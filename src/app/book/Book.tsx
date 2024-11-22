"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";

const Book = () => {
	const router = useRouter();

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) {
			router.push("/");
		}
	}, [router]);

	const closeSession = () => {
		Cookies.remove("token");
		router.push("/");
	};
	return (
		<Layout>
			<h1>libros</h1>
		</Layout>
	);
};

export default Book;
