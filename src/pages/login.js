import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
	const [error, setError] = useState();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			const data = await response.json();
			const token = data.token;

			// Store the token in localStorage
			localStorage.setItem('token', token);
			localStorage.setItem('role', data.role);

			setError();
			router.push('/');
		} else {
			const data = await response.json();
			setError(data.message);
		}
	};

	return (
		<>
			<Head>
				<title>SIMARKIR</title>
				<meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex h-screen w-screen flex-col items-center justify-center bg-[url('../assets/images/main-bg-simarkir.webp')] bg-cover p-12">
				<h1 className="mb-4 text-3xl font-bold leading-3 text-white">Selamat Datang!</h1>
				<h4 className="text-white">Login untuk melanjutkan</h4>
				<form
					onSubmit={handleSubmit}
					className="mt-8 flex w-full flex-col gap-1 rounded-xl bg-slate px-8 pb-10 pt-6 drop-shadow-lg md:w-1/2 lg:w-1/3"
				>
					<label for="username" className="font-bold text-blue">
						username
					</label>
					<input
						required
						type="username"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="rounded-lg border border-gray-300 bg-white p-2.5 text-base transition duration-200 hover:outline-none hover:drop-shadow-lg focus:outline-none focus:drop-shadow-lg"
					/>
					<label for="password" className="font-bold text-blue">
						Password
					</label>
					<input
						required
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="rounded-lg border border-gray-300 bg-white p-2.5 text-base text-sm transition duration-200 hover:outline-none hover:drop-shadow-lg focus:outline-none focus:drop-shadow-lg"
					/>
					{error ? <small className="text-red">Username atau password salah</small> : null}
					<button
						type="submit"
						className="text-bold mt-4 cursor-pointer rounded-3xl bg-blue px-4 py-2 text-base text-white"
					>
						Login
					</button>
				</form>
			</main>
		</>
	);
}
