import React from "react";
import PlansTable from "./PlansTable";

const Pricing = () => {
	return (
		<div className='pt-8 mx-auto md:max-w-7xl max-w-sm'>
			<h2 className='text-3xl flex justify-center items-center   bg-gradient-to-r from-[#FF3CAC] via-text-sky-500 to-sky-400 lg:max-w-5xl text-transparent bg-clip-text max-w-sm lg:text-4xl font-bold mx-auto text-center mb-8'>
				Plans That Fit Every Need and Budget!
			</h2>
			<PlansTable />
		</div>
	);
};

export default Pricing;
