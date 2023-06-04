import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default function App({ Component, pageProps }) {
	const router = useRouter();

	const fetchUser = async () => {
		try {
			const token = localStorage.getItem('token');
			const queryParams = new URLSearchParams({
				token: token,
			});

			const url = `/api/auth/user?${queryParams.toString()}`;

			const response = await fetch(url);

			if (!response.ok) {
				throw new Error('Request failed');
			}

			const data = await response.json();

			if (data) localStorage.setItem('role', data[0].role_name);

			return data;
		} catch (error) {
			console.error(error);
			router.push('/login');
		}
	};

	useEffect(() => {
		const handleRouteChange = (url) => {
			const token = localStorage.getItem('token');

			if (!token && url !== '/login') {
				router.push('/login');
			} else if (token && url !== '/login') {
				fetchUser();
			}
		};

		handleRouteChange();

		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);

	return <Component {...pageProps} />;
}
