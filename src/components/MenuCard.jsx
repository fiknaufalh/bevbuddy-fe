import React, { useState } from "react";
import Modal from "react-modal";

const MenuCard = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div
			className="w-full lg:w-1/4 bg-white p-3 rounded-lg"
			style={{ cursor: "pointer" }}
			onClick={openModal}
		>
			<div className="flex flex-row justify-center">
				<img className="rounded-xl" src={props.img} alt={props.title} />
			</div>
			<div className="p-2 mt-2">
				<div className="flex flex-row justify-center">
					<h3 className="font-semibold text-l text-center">
						{props.title}
					</h3>
				</div>
				<div className="flex flex-col justify-center mt-3">
					<div className="text-sm text-gray-400 text-center">
						{props.desc}
					</div>
					<div className="flex flex-row justify-between mt-4 text-sm">
						<div className="flex flex-col justify-end">
							<div>Calories: {props.calories} gr</div>
							<div>Protein: {props.protein} gr</div>
						</div>
						<div className="flex flex-col justify-end">
							<div>Carbs: {props.carbs} gr</div>
							<div>Fats: {props.fats} gr</div>
						</div>
						<div>Sugar: {props.sugar} gr</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
