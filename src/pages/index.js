import { useEffect, useState } from 'react';
import DashboardAkademik from './_dashboard_akademik';
import DashboardParkir from './_dashboard_parkir';
import { useRouter } from 'next/router';

export default function Dashboard() {
	const [role, setRole] = useState();
	const router = useRouter();

	useEffect(() => {
		const roleName = localStorage.getItem('role');

		if (roleName !== 'akademik' && roleName !== 'parkir') {
			router.push('/logout');
		}
		setRole(roleName);
	}, []);

	if (role === 'akademik') return <DashboardAkademik />;
	if (role === 'parkir') return <DashboardParkir />;
}
