import React from "react";

const DemoVideo = () => {
	return (
		<div className='rounded-xl mx-auto'>
			<video
				style={{ boxShadow: "0 0 20px -12px rgba(0, 0, 0, 0.8)" }}
				src='https://bcalabs.org/AIPYQS.mp4'
				className='w-full h-auto mx-auto  max-w-sm lg:max-w-7xl rounded-xl shadow-xl'
				autoPlay={true}
				playsInline={true}
				loop={true}
				muted={true}
			></video>
		</div>
	);
};

export default DemoVideo;
