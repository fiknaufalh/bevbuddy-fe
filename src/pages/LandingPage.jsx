import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/About";
import Footer from "../components/Footer";

const LandingPage = () => {
	return (
		<div>
			<Navbar />

			<main>
				<div id="home">
					<Home />
				</div>

				<div id="menu">
					<Menu />
				</div>

				<div id="about">
					<About />
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default LandingPage;
