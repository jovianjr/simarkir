import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Logout() {
	const router = useRouter();

	useEffect(() => {
		localStorage.setItem('token', null);
		localStorage.setItem('role', null);

		router.push('/login');
	}, []);

	return null;
}
