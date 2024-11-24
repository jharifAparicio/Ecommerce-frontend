import React from "react";
import DolarIcon from "@/assets/icons/dolarIcon";
import BasuraIcon from "@/assets/icons/basuraIcon";
import AddProduct from "@/assets/icons/addProduct";
import cartUtils from "@/utils/cartUtils";

interface CartItemProps {
	id: number;
	quantity: number;
	title: string;
	price: number;
}
const CartItem: React.FC<CartItemProps> = ({ id, quantity, title, price }) => {
	const handleDelete = () => {
		cartUtils.removeFromCart(id);
		window.location.reload();
	};
	const handleAdd = () => {
		cartUtils.addToCart({ id, name: title, price });
		window.location.reload();
	};
	return (
		<div className="justify-items-center place-items-center grid grid-cols-[.5fr,3fr,1fr,1fr]">
			<div>{quantity}</div>
			<div>{title}</div>
			<div className=" my-2 flex flex-row">
				<div className="mx-1 p-1 rounded-full bg-yellow-400 hover:bg-yellow-600 hover:scale-110">
					<DolarIcon className="w-7" />
				</div>
				<div className="mx-1 p-1 rounded-full bg-red-600 hover:bg-red-500 hover:scale-110" onClick={handleDelete}>
					<BasuraIcon className="w-7" />
				</div>

				<AddProduct className="w-9" onClick={handleAdd} />
			</div>
			<div>{Math.round((quantity * price)*100)/100 || 0}</div>
		</div>
	);
};

export default CartItem;
