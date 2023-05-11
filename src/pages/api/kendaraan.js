export default function kendaraan(req, res) {
	if (req.method === 'GET') {
		res.status(200).json({ message: 'GET request successful' });
	} else if (req.method === 'POST') {
		res.status(200).json({ message: 'POST request successful' });
	} else if (req.method === 'PUT') {
		res.status(200).json({ message: 'PUT request successful' });
	} else if (req.method === 'DELETE') {
		res.status(200).json({ message: 'DELETE request successful' });
	} else {
		res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
		res.status(405).json({ message: `Method ${req.method} Not Allowed` });
	}
}
