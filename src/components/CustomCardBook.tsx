import React from "react";

interface CustomCartBookProps {
	souce: string;
	titulo: string;
	author: string;
	Price: number;
    categoria: number;
	Information: () => void;
}

const CustomCartBook: React.FC<CustomCartBookProps> = ({
	souce,
	titulo,
	author,
	Price,
    categoria,
	Information,
}) => {
	const [isLoad, setIsLoad] = React.useState(true);
	return (
		<div className="w-52 h-[350px] p-[.8em] bg-[#f5f5f5] relative overflow-visible shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] rounded-xl flex flex-col items-center justify-between m-2 text-center">
			<div className="flex flex-col items-center justify-center">
				<div
					className={`h-36 w-auto rounded-lg m-2 ${
						isLoad ? "bg-gray-200 animate-pulse" : ""
					}`}
				>
					<img
						className={`rounded-lg h-36 w-auto transition-all object-cover duration-300 ease-in-out transform hover:scale-105 ${
							isLoad ? "opacity-0" : "opacity-100"
						}`}
						src={souce}
						alt="cargando ..."
						onLoad={() => setIsLoad(false)}
					></img>
				</div>
                <p className="w-full text-right">{categoria}</p>
				<h2 className="pt-2 font-semibold">{titulo}</h2>
			</div>
			<div className="flex flex-col">
				<span className="text-xs">{author}</span>
				<span className="text-[10px]">Bs. {Price}</span>
			</div>
			<div>
				<button className="bg-yellow-400 p-1 rounded-lg m-1 hover:bg-yellow-600 hover:text-white">
					Me gusta
				</button>
				<button className="bg-green-400 p-1 rounded-lg m-1 hover:bg-green-600 hover:text-white">
					Comprar
				</button>
			</div>
			<span
				className="w-full text-left text-blue-600 hover:text-blue-800 hover:cursor-pointer"
				onClick={Information}
			>
				ver más
			</span>
		</div>
	);
};

export default CustomCartBook;
