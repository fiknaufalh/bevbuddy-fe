import { useState } from "react";
import MenuCard from "../layouts/MenuCard";
import axios from "axios";

const Menu = () => {
	const [activity, setActivity] = useState("");
	const [mood, setMood] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [max_rec, setMaxRec] = useState("");
	const [weather, setWeather] = useState("");
	const [recommendationData, setRecommendationData] = useState([]);
	const [isEmpty, setIsEmpty] = useState(false);

	const activityOptions = [
		"Sedentary",
		"Lightly Active",
		"Moderately Active",
		"Very Active",
		"Extra Active",
	];
	const moodOptions = [
		"Happy",
		"Loved",
		"Focus",
		"Chill",
		"Sad",
		"Scared",
		"Angry",
		"Neutral",
	];

	const handleRec = async () => {
		try {
			const headers = {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			};
			const body = JSON.stringify({
				activity,
				mood,
				age,
				gender,
				height,
				weight,
				weather,
				max_rec,
			});
			console.log(headers);
			console.log(body);
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/recommendations`,
				body,
				{ headers }
			);

			if (response.status === 404 || response.status === 422) {
				setIsEmpty(true);
			}

			setRecommendationData(response.data);
		} catch (error) {
			console.error("An error occurred while fetching data:", error);
		}
	};

	return (
		<div className=" min-h-screen flex flex-col justify-start lg:px-32 px-5 bg-backgroundColor">
			<h1 className=" font-semibold text-center text-4xl mt-32 mb-8">
				Beverage Recommendation
			</h1>

			<div className="container mx-auto p-4">
				<div className="grid grid-cols-1 gap-4">
					<div className="grid grid-cols-4 gap-4">
						<select
							type="text"
							placeholder="Activity"
							value={activity}
							onChange={(e) => setActivity(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						>
							<option value="">Select Activity</option>
							{activityOptions.map((activity) => (
								<option
									key={activity}
									value={activity
										.toLowerCase()
										.replace(" ", "_")}
								>
									{activity}
								</option>
							))}
						</select>
						<select
							type="text"
							placeholder="Mood"
							value={mood}
							onChange={(e) => setMood(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						>
							<option value="">Select Mood</option>
							{moodOptions.map((mood) => (
								<option key={mood} value={mood.toLowerCase()}>
									{mood}
								</option>
							))}
						</select>
						<select
							type="text"
							placeholder="Gender"
							value={gender}
							onChange={(e) => setGender(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						>
							<option value="">Select Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
						<input
							type="number"
							placeholder="Age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						/>
						<input
							type="number"
							placeholder="Weight"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						/>
						<input
							type="number"
							placeholder="Height"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						/>
						<select
							type="text"
							placeholder="Weather"
							value={weather}
							onChange={(e) => setWeather(e.target.value)}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						>
							<option value="">Consider Weather?</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<input
							type="number"
							placeholder="Max Recommendation"
							value={max_rec}
							onChange={(e) => setMaxRec(e.target.value) || 5}
							className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
						/>
					</div>
					<div className="grid grid-cols-1 gap-4">
						<button
							className="bg-[#BF8C4D] hover:bg-[#e9cfa9] text-white p-2 rounded-md ml-2"
							onClick={handleRec}
						>
							Search
						</button>
					</div>
				</div>

				{isEmpty ? (
					<div className="text-center text-red-500">
						<p>No recommendation found</p>
					</div>
				) : (
					<div className="min-h-screen flex flex-col justify-center lg:px-16 px-5 bg-backgroundColor">
						<div className="flex flex-wrap pb-8 gap-8 mt-8 justify-center">
							{recommendationData.map((beverage) => (
								<MenuCard
									key={beverage.id}
									img={beverage.url_img}
									title={beverage.name}
									desc={beverage.description}
									category={beverage.category}
									calories={beverage.calories}
									protein={beverage.protein}
									fats={beverage.fats}
									carbs={beverage.carbs}
									sugar={beverage.sugar}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Menu;
