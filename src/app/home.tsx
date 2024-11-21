"use client";
import React from "react";
import { useRouter } from "next/navigation";

function HomePage() {
	const router = useRouter();

	const handleLoginRedirect = () => {
		router.push("/login");
	};
	
	return (
		<>
			<h1>bienvenido </h1>
			<button
				onClick={handleLoginRedirect}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
			>
				Ir a login
			</button>
		</>
	);
}

export default HomePage;
