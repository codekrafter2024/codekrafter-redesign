import Logo from "./logo";
import NavMenu from "./nav-menu";

const Navbar = () => {
	return (
		<nav className='xl:px-16 md:px-8 px-6 py-4 bg-opacity-80  md:bg-opacity-100    md:dark:bg-opacity-100 dark:bg-opacity-80  md:backdrop-blur-none md:backdrop-filter-none  backdrop-filter backdrop-blur-[4px] bg-white dark:bg-[#0f0f10] border-gray-100 dark:border-gray-900 border-b z-10 sticky top-0'>
			<div className='nav-gradient' />
			<div className='2xl:max-w-[1280px] md:max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between gap-8'>
				<Logo />
				<NavMenu />
			</div>
		</nav>
	);
};

export default Navbar;
