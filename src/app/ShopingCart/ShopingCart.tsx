import React from "react";
import Layout from "@/components/Layout";
import CarritoIcon from "@/assets/icons/CarritoIcon";
import DolarIcon from "@/assets/icons/dolarIcon";
import BasuraIcon from "@/assets/icons/basuraIcon";

const ShopingCart = () => {
	return (
		<Layout>
			<div className="w-2/3 h-full p-4">
				<div className="flex flex-row justify-between">
					<div className="flex flex-row justify-center items-center h-max w-max">
						<CarritoIcon className="w-12 h-12" />
						<p className="text-3xl font-bold pl-2">Mi Carrito</p>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-2xl font-bold">Total en cesta</p>
						<p className="text-xl font-semibold">0.00 Bs.</p>
					</div>
				</div>
				<div className="flex flex-col p-3 text-white bg-blue-700 rounded-3xl my-3">
					<div className="flex flex-row justify-between">
						<p className="text-xl font-semibold pl-2">Articulo</p>
						<p className="text-xl font-semibold pr-2">precio</p>
					</div>
					<hr className="w-full bg-white h-[2px]" />
					<div className="flex flex-row items-center  justify-between px-4">
						<div className="">
							<ol>
								<li>Andando el tiempo - Eraclito Zepeda</li>
							</ol>
						</div>
						<div className="flex flex-row p-2">
							<div className="mx-1 p-1 rounded-full bg-yellow-400 hover:bg-yellow-600 hover:scale-110">
								<DolarIcon className="w-8" />
							</div>
							<div className="mx-1 p-1 rounded-full bg-red-600 hover:bg-red-500 hover:scale-110">
								<BasuraIcon className="w-8" />
							</div>
						</div>
						<div>
							<p>0.00 Bs</p>
						</div>
					</div>
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
