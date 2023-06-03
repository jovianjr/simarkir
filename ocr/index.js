'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

require('dotenv').config();

const key = process.env.VISION_KEY;
const endpoint = process.env.VISION_ENDPOINT;

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function computerVision() {
  async.series([
    async function () {
      // URL images containing printed and/or handwritten text. 
      // The URL can point to image files (.jpg/.png/.bmp) or multi-page files (.pdf, .tiff).
      const printedTextSampleURL = 'https://github.com/jovianjr/simarkir/assets/72853893/e7bcb501-0732-4e9c-ad7f-642ad6a006fe';

      // Recognize text in printed image from a URL
      //// console.log('Read printed text from URL...', printedTextSampleURL.split('/').pop());
      const printedResult = await readTextFromURL(computerVisionClient, printedTextSampleURL);
      printRecText(printedResult);

      // Perform read and await the result from URL
      async function readTextFromURL(client, url) {
        // To recognize text in a local image, replace client.read() with readTextInStream() as shown:
        let result = await client.read(url);
        let operation = result.operationLocation.split('/').slice(-1)[0];

        // Wait for read recognition to complete
        while (result.status !== "succeeded") { await sleep(1000); result = await client.getReadResult(operation); }
        return result.analyzeResult.readResults; // Return the first page of result. Replace [0] with the desired page if this is a multi-page file such as .pdf or .tiff.
      }

      // Prints Read result
      function printRecText(readResults) {
        const firstPage = readResults[0]; // Get the first page of results
        if (firstPage.lines.length) {
          const firstLine = firstPage.lines[0]; // Get the first line
          const textWithoutSpaces = firstLine.words.map(w => w.text).join('');
          ////console.log(textWithoutSpaces);

          return textWithoutSpaces;
        } else {
          ////console.log('No recognized text.');

          return 'No recognized text.';
        }
      }

      function downloadFilesToLocal(url, localFileName) {
        return new Promise((resolve, reject) => {
          ////console.log('--- Downloading file to local directory from: ' + url);
          const request = https.request(url, (res) => {
            if (res.statusCode !== 200) {
              ////console.log(`Download sample file failed. Status code: ${res.statusCode}, Message: ${res.statusMessage}`);
              reject();
            }
            var data = [];
            res.on('data', (chunk) => {
              data.push(chunk);
            });
            res.on('end', () => {
              ////console.log('   ... Downloaded successfully');
              fs.writeFileSync(localFileName, Buffer.concat(data));
              resolve();
            });
          });
          request.on('error', function (e) {
            ////console.log(e.message);
            reject();
          });
          request.end();
        });
      }

    },
    function () {
      return new Promise((resolve) => {
        resolve();
      })
    }
  ], (err) => {
    throw (err);
  });
}

computerVision();