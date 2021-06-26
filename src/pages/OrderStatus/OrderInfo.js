import { OrderCard } from "@components";
import React from "react";
import ProductImage from "../../assets/images/pubg.png";

const data = [
	{
		id: 1,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "45",
		type: "150 Extra Coins",
	},
	{
		id: 2,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "50",
		type: "150 Extra Coins",
	},
];

const OrderInfo = () => {
	return (
		<div>
			{data.map((data) => (
				<OrderCard key={data.id} data={data} />
			))}
		</div>
	);
};

export default OrderInfo;
