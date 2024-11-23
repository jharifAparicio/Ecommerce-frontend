"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Layout from "@/components/Layout";
import CustomCartBook from "@/components/CustomCardBook";
import { fetchBooks } from "../api/Books";

const Book = () => {
	const router = useRouter();
	const [books, setBooks] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) {
			router.push("/");
		}
	}, [router]);

	useEffect(() => {
		const getBooks = async () => {
			try {
				const books = await fetchBooks();
				setBooks(books);
			} catch (error) {
				setError((error as Error).message || "Error al obtener libros");
			} finally {
				setLoading(false);
			}
		};
		getBooks();
	}, []);

	const handleInformation = () => {
		router.push("/information");
	};

	if (loading) {
		return (
			<Layout>
				<div className="w-full h-full flex justify-center items-center">
					<p>Cargando...</p>
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<div className="w-full h-full flex justify-center items-center mx-4">
				{books.map((book) => (
					<CustomCartBook
						key={book.Isbn}
						souce={book.imageUrl}
						titulo={book.title}
						author={book.author}
						Price={book.price}
						categoria={book.categories}
						Information={handleInformation}
					/>
				))}
			</div>
		</Layout>
	);
};

export default Book;
