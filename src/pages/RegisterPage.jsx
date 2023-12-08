import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [fullname, setFullname] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/home";

	const handleLogin = async () => {
		const formData = {
			username: username,
			fullname: fullname,
			password: password,
			email: email,
		};

		try {
			console.log(import.meta.env.VITE_BASE_URL);
			console.log(formData);
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/register`,
				formData
			);
			console.log(response);
			toast.success("Register successfully.");
			navigate(from, { replace: true });
		} catch (error) {
			console.error(error);
			toast.error("An error occurred during register.");
		}
	};

	return (
		<section>
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 rounded-3xl">
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-2xl xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center">
						<div className="p-4 space-y-4 md:space-y-6 sm:p-6 w-full">
							<h1 className="text-xl font-lato font-bold leading-tight tracking-tight text-[#BF8C4D] md:text-4xl text-center">
								REGISTER
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="username"
										className="block mb-2 text-md font-medium text-black-600"
									>
										Username
									</label>
									<input
										type="text"
										name="username"
										id="username"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="username"
										required
										onChange={(e) =>
											setUsername(e.target.value)
										}
									/>
								</div>
								<div>
									<label
										htmlFor="fullname"
										className="block mb-2 text-md font-medium text-black-600"
									>
										Fullname
									</label>
									<input
										type="text"
										name="fullname"
										id="fullname"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="fullname"
										required
										onChange={(e) =>
											setFullname(e.target.value)
										}
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-md font-medium text-black-600"
									>
										Email
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="email@example.com"
										required
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-md font-medium text-black-600"
									>
										Password
									</label>
									<input
										type="text"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>
								<div className="flex flex-col items-center justify-center">
									<button
										type="button"
										onClick={handleLogin}
										className="flex flex-col items-center justify-center w-full text-white bg-[#BF8C4D] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									>
										Register
									</button>
								</div>
								<p className="text-sm font-light text-gray-500">
									Already have an account?{" "}
									<a
										href="/"
										className="font-medium text-black-600 hover:underline"
									>
										Login
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default LoginPage;
