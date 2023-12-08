import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import Button from "./Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const navigate = useNavigate();
	const handleLogout = () => {
		try {
			localStorage.removeItem("accessToken");
			navigate("/", { replace: true });
			toast.success("Logged out successfully.");
		} catch (error) {
			console.error(error);
			toast.error("An error occurred during logout.");
		}
	};

	const handleChange = () => {
		setMenu(!menu);
	};

	const closeMenu = () => {
		setMenu(false);
	};

	return (
		<div className="fixed w-full z-10">
			<div>
				<div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
					<div className=" flex flex-row items-center cursor-pointer gap-2">
						<span>
							<SiCoffeescript size={25} />
						</span>
						<h1 className=" text-xl font-semibold">BevBuddy</h1>
					</div>

					<nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
						<Link
							to="home"
							spy={true}
							smooth={true}
							duration={500}
							className="group relative inline-block cursor-pointer hover:text-brightColor"
						>
							Home
							<span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
						</Link>

						<Link
							to="menu"
							spy={true}
							smooth={true}
							duration={500}
							className="group relative inline-block cursor-pointer hover:text-brightColor"
						>
							Recommendation
							<span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
						</Link>

						<Link
							to="about"
							spy={true}
							smooth={true}
							duration={500}
							className="group relative inline-block cursor-pointer hover:text-brightColor"
						>
							About Us
							<span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
						</Link>
					</nav>

					<div className=" hidden lg:flex">
						<Button title="Logout" onClick={handleLogout} />
					</div>

					<div className="md:hidden flex items-center">
						{menu ? (
							<AiOutlineClose size={25} onClick={handleChange} />
						) : (
							<AiOutlineMenuUnfold
								size={25}
								onClick={handleChange}
							/>
						)}
					</div>
				</div>
				<div
					className={` ${
						menu ? "translate-x-0" : "-translate-x-full"
					} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
				>
					<Link
						to="home"
						spy={true}
						smooth={true}
						duration={500}
						className="hover:text-brightColor transition-all cursor-pointer"
						onClick={closeMenu}
					>
						Home
					</Link>
					<Link
						to="menu"
						spy={true}
						smooth={true}
						duration={500}
						className="hover:text-brightColor transition-all cursor-pointer"
						onClick={closeMenu}
					>
						Menu
					</Link>
					<Link
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						className="hover:text-brightColor transition-all cursor-pointer"
						onClick={closeMenu}
					>
						About Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
