import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css?url';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap',
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body className='w-full min-h-screen flex bg-black pb-10'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
