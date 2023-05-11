export default function login(req, res) {
	if (req.method === 'POST') {
		res.status(200).json({ message: 'POST request successful' });
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ message: `Method ${req.method} Not Allowed` });
	}
}
