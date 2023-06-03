import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			const token = localStorage.getItem('token');

			// Redirect to the login page if the user is not authenticated and trying to access a protected route
			if (!token && url !== '/login') {
				router.push('/login');
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
