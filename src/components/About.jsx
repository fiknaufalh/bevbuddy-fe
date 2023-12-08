import React from "react";
import img from "../assets/img/about.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
			<h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
				About Us
			</h1>

			<div className=" flex flex-col lg:flex-row items-center gap-5">
				<div className=" w-full lg:w-2/4">
					<img className=" rounded-lg" src={img} alt="img" />
				</div>
				<div className=" w-full lg:w-2/4 p-4 space-y-3">
					<h2 className=" font-semibold text-3xl">
						What Makes Our Recommendation Special?
					</h2>
					<p>
						Layanan rekomendasi dari BevBuddy ini menjadi spesial
						karena mempertimbangkan kesehatan juga kenikmatan bagi
						setiap penggunanya. Kesehatan ini diperoleh dengan
						penentuan menu minuman sesuai batasan kalori, gula, dan
						nutrisi-nutrisi lainnya yang sesuai pada batas yang
						sesuai dengan tubuh berdasarkan input frekuensi
						aktivitas, berat badan, tinggi badan, dan usia.
					</p>
					<p>
						Sementara kenikmatan diperoleh dari penentuan menu
						minuman berdasarkan mood pengguna dan cuaca terkini pada
						lokasi pengguna. Mood pengguna ditentukan dari input
						yang diberikan oleh pengguna serta cuaca terkini
						ditentukan dari lokasi pengguna.
					</p>
					<p>Tunggu apa lagi? Yuk cobain rekomendasinya!</p>
				</div>
			</div>
		</div>
	);
};

export default About;
