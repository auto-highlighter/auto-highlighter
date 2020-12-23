import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ routes }) {
	const routeLinks = routes.map((route) =>
		route === routes[0] || route === routes[routes.length - 1] ? null : (
			<li key={route}>
				<Link
					className='px-4 py-2 text-white rounded-md font-serif text-lg transform hover:bg-indigo-700 transition transition-colors'
					to={route}>
					{route}
				</Link>
			</li>
		),
	);

	return (
		<div className='contianer bg-indigo-900 sticky top-0'>
			<nav className='flex p-5 justify-between'>
				<div className='mx-5'>
					<Link
						className='px-4 py-2 text-white rounded-md font-serif text-lg transform hover:bg-indigo-700 transition transition-colors'
						to='/'>
						Logo
					</Link>
				</div>
				<ul className='hidden md:flex w-7/12 flex flex-row justify-between'>
					{routeLinks}
				</ul>
				<div className='hidden md:block mx-5'>
					<Link
						className='px-4 py-2 text-white rounded-md font-serif text-lg transform hover:bg-indigo-700 transition transition-colors'
						to={`/${routes[routes.length - 1]}`}>
						login
					</Link>
				</div>
				<label
					htmlFor='menu-toggle'
					className='pointer-cursor md:hidden block'>
					<svg
						className='fill-current text-white'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 20 20'>
						<title>menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
					</svg>
				</label>
				<input className='hidden' type='checkbox' id='menu-toggle' />
			</nav>
		</div>
	);
}
