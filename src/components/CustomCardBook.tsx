import React from "react";

interface CustomCartBookProps {
    souce: string;
    alt: string;
    titulo: string;
    author: string;
    Price: number;
    Information: () => void;
}

const CustomCartBook: React.FC<CustomCartBookProps> = ({ souce, alt, titulo,author,Price,Information }) => {
    return (
        <div className= "w-52 h-80 p-[.8em] bg-[#f5f5f5] relative overflow-visible shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] rounded-xl flex flex-col items-center justify-between">
            <img
            className="rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                src={souce}
                alt={alt}
                width="100px"
                height="auto"
            ></img>
            <h2 className="pt-2 font-bold">{titulo}</h2>
            <span className="text-xs">{author}</span>
            <span className="text-xs">Bs. {Price}</span>
            <div>
                <button className="bg-yellow-400 p-1 rounded-lg m-2 hover:bg-yellow-600 hover:text-white">Me gusta</button>
                <button className="bg-green-400 p-1 rounded-lg m-2 hover:bg-green-600 hover:text-white">Comprar</button>
            </div>
            <span className="w-full text-left text-blue-600 hover:text-blue-800 hover:cursor-pointer" onClick={Information}>ver más</span>
        </div>
    );
};

export default CustomCartBook;