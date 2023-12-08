import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/home" element={<LandingPage />} />
		</Routes>
	);
}
