import { Link } from '@heroui/react';

export default function Nav() {
	return (
		<>
			<nav className='flex flex-row items-center justify-between px-3 bg-gray-800/5 border-b-2 border-gray-500/10 w-full h-13'>
				<div className='text-white text-lg mx-3'>logologo</div>
				<div className='flex flex-row gap-7'>
					<NavItem text='Home' hrefTo='/' />
					<NavItem text='Watch' hrefTo='/watch' />
					<NavItem text='News' hrefTo='/news' />
					<NavItem text='Team' hrefTo='/team' />
					<NavItem text='Gallery' hrefTo='/gallery' />
					<NavItem text='Contact' hrefTo='/contact' />
				</div>
				<div></div>
			</nav>
		</>
	);
}

function NavItem({ text = '', hrefTo = '' }) {
	return (
		<>
			<Link
				href={hrefTo}
				className={`text-white/80 uppercase no-underline ${hrefTo === window.location.pathname && 'underline underline-offset-20 decoration-purple-500'}`}
			>
				{text}
			</Link>
		</>
	);
}
