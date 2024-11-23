"use client"
import React from "react";
import CustomButton from "./CustomButton";

interface BookDetails {
	Isbn: string;
	Title: string;
	Author: string;
	Description: string;
	Price: number;
	Category: number;
	imageUrl: string;
}

const BookDetails: React.FC<BookDetails> = ({
	Isbn,
	Title,
	Author,
	Description,
	Price,
	Category,
	imageUrl,
}) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="h-max w-max flex flex-row m-4">
				<div>
					<div
						className="h-[512] w-[512] rounded-lg m-2"
					>
						<img
							src={imageUrl}
							alt={Title}
							className={`w-auto h-[512] rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)]`}
						/>
					</div>
					<p className="mt-2"> ISBN: {Isbn}</p>
				</div>
				<div className="ml-6 w-full h-full flex flex-col">
					<h1 className="font-extrabold text-6xl">{Title}</h1>
					<p className="font-medium text-xl">{Author}</p>
					<p className="mt-3">{Description}</p>
					<p>Categoria: {Category}</p>
                    <br />
                    <p className="text-2xl">Bs. {Price}</p>
                    <div className="w-full h-full justify-end">
                        <CustomButton 
                            className="bg-green-500 p-1 rounded-lg m-1 hover:bg-green-800 hover:text-white"
                            onClick={() => console.log("Comprar")}
                            text="Comprar"
                        />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
