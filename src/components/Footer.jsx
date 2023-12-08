import React from "react";

const Footer = () => {
	return (
		<div className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
			<div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
				<div className=" w-full md:w-1/4">
					<h1 className=" font-semibold text-xl pb-4">BevBuddy</h1>
					<p className=" text-sm">
						Welcome to our coffee haven! Explore our aromatic brews,
						savor artisanal flavors, and discover the perfect roast
						to elevate your daily ritual.
					</p>
				</div>
				<div>
					<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
						Contact Us
					</h1>
					<nav className=" flex flex-col gap-2">
						<a className=" hover:text-backgroundColor transition-all cursor-pointer">
							fiknaufalh@email.com
						</a>
						<a className=" hover:text-backgroundColor transition-all cursor-pointer">
							+628991077555
						</a>
					</nav>
				</div>
			</div>
			<div>
				<p className=" text-center py-4">
					Microservice Made by
					<span className=" text-backgroundColor">
						{" "}
						Fikri Naufal Hamdi (18221096){" "}
					</span>
					| II3160 - Teknologi Sistem Terintegrasi
				</p>
			</div>
		</div>
	);
};

export default Footer;
