export default function summary(req, res) {
	if (req.method === 'GET') {
		res.status(200).json({ message: 'GET request successful' });
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} Not Allowed` });
	}
}
