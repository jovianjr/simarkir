import db from '@/utils/db';
import AWS from 'aws-sdk';
import fs from 'fs';
import formidable from 'formidable';
import { promisify } from 'util';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
require('dotenv').config();

const sleep = promisify(setTimeout);
const key = process.env.VISION_KEY;
const ENDPOINT = process.env.VISION_ENDPOINT;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const UPLOAD_DIR = './public/uploads';

const computerVisionClient = new ComputerVisionClient(
	new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }),
	ENDPOINT
);

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const { file, path } = await uploadImageLocal(req);
		const awsImageUrl = await uploadImageToS3(file.originalFilename, path);
		const result = await ocr(computerVisionClient, awsImageUrl);

		res.status(200).json({ message: 'File upload successful', result });
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'An error occurred' });
	}
}

const uploadImageLocal = async (req) => {
	const form = new formidable.IncomingForm();
	form.uploadDir = UPLOAD_DIR;
	form.keepExtensions = true;
	form.keepFilenames = true;

	form.on('file', (field, file) => {
		fs.rename(file.filepath, `${form.uploadDir}/${file.originalFilename}`, () => {});
	});

	const files = await new Promise((resolve, reject) => {
		form.parse(req, (err, fields, files) => {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	});

	await sleep(1000);
	const file = files['images'];
	const path = `${form.uploadDir}/${file.originalFilename}`;

	return { file, path };
};

const uploadImageToS3 = (fileName, filePath) => {
	const fileContent = fs.readFileSync(filePath);

	const params = {
		Bucket: BUCKET_NAME,
		Key: fileName,
		Body: fileContent,
		ContentType: 'image/jpeg',
	};

	return new Promise((resolve, reject) => {
		s3.upload(params, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.Location);
			}
		});
	});
};

const ocr = async (client, url) => {
	let result = await client.read(url);
	let operation = result.operationLocation.split('/').slice(-1)[0];

	while (result.status !== 'succeeded') {
		await sleep(1000);
		result = await client.getReadResult(operation);
	}

	const readResults = result.analyzeResult.readResults;
	const firstPage = readResults[0];

	if (firstPage.lines.length) {
		const firstLine = firstPage.lines[0];
		const textWithoutSpaces = firstLine.words.map((w) => w.text).join('');
		return textWithoutSpaces;
	} else {
		return 'No recognized text.';
	}
};
