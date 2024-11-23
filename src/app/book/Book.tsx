"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import CustomCartBook from "@/components/CustomCardBook";

const Book = () => {
	const router = useRouter();

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) {
			router.push("/");
		}
	}, [router]);

	const handleInformation = () => {
		console.log("Información del libro");
	}

	return (
		<Layout>
			<CustomCartBook
				souce="https://tienda.sophosenlinea.com/imagenes/9788417/978841734762.GIF"
				alt="Book"
				titulo="El Principito"
				author="Antoine de Saint-Exupéry"
				Price={100}
				Information={handleInformation}
			>

			</CustomCartBook>
		</Layout>
	);
};

export default Book;
