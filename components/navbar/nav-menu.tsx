import NavItem from "./nav-item";
// import SignInButton from "./sign-in-button";
import { navMenuItems as data } from "@/constants/data";

const NavMenu = () => {
	return (
		<div className=' hidden flex-1 items-center justify-end capitalize sm:items-stretch lg:mr-8 lg:inline-flex lg:px-8 '>
			<div className='hidden sm:block'>
				<div className='flex flex-row items-center space-x-2'>
					{data.map((item, _idx) => (
						<NavItem item={item} key={_idx} />
					))}
					{/* <SignInButton /> */}
				</div>
			</div>
		</div>
	);
};

export default NavMenu;
