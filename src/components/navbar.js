import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ routes }) {
	const routeLinks = routes.map((route) =>
		route === routes[0] ? null : (
			<li key={route}>
				<Link className='px-5 font-serif' to={route}>
					{route}
				</Link>
			</li>
		),
	);

	return (
		<div className='contianer bg-blue-200'>
			<nav className='flex p-5 justify-between'>
				<div className='mx-5'>
					<Link className='px-5 font-serif' to='/'>
						Logo
					</Link>
				</div>
				<ul className='w-7/12 flex flex-row justify-between'>
					{routeLinks}
				</ul>
				<div className='mx-5'>
					<button className='px-5 font-serif' href='/'>
						login
					</button>
				</div>
			</nav>
		</div>
	);
}
