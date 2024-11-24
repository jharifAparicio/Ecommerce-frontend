"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import CartItems from "@/components/CartItem";
import CarritoIcon from "@/assets/icons/CarritoIcon";
import cartUtils, { Product } from "@/utils/cartUtils";

const ShopingCart = () => {
	const [cart, setCart] = useState<Product[]>([]);
	useEffect(() => {
		setCart(cartUtils.getCart());
	}, []);

	const handleClearCart = (id: number) => {
		const updatedCart = cart.filter((p) => p.id != id);
		setCart(updatedCart);
		cartUtils.removeFromCart(id);
	};

	return (
		<Layout>
			<div className="w-2/3 h-full p-4">
				<div className="flex flex-row justify-between">
					<div className="flex flex-row justify-center items-center h-max w-max">
						<CarritoIcon className="w-12 h-12" />
						<p className="text-3xl font-bold pl-2">Mi Carrito</p>
					</div>
				</div>
				<div className="flex flex-col p-3 text-white bg-blue-700 rounded-3xl my-3">
					<div className="text-xl font-semibold justify-items-center grid grid-cols-[.5fr,3fr,1fr,1fr]">
						<p>Cantidad</p>
						<p>Articulo</p>
						<p>Operaciones</p>
						<p>precio</p>
					</div>
					<hr className="w-full bg-white h-[2px]" />
					{cartUtils.getCart().map((item) => (
						<CartItems
							id={item.id}
							key={item.id}
							quantity={item.quantity ?? 1}
							title={item.name}
							price={item.price}
							onRemove={handleClearCart}
						/>
					))}
				</div>
				<div className="flex justify-end">
					<button className="bg-[yellow] hover:bg-[rgb(255,255,0,0.5)] font-bold border-none py-3 px-5 rounded-lg cursor-pointer">
						Comprar todo Bs
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default ShopingCart;
