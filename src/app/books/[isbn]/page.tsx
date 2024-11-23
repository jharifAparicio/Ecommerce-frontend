"use client"
import { getBookIsbn } from "@/app/api/getBookIsbn";
import Layout from "@/components/Layout";
import BookDetails from "@/components/BookDetails";
import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: { isbn: string } }) {
	const { isbn } = params;
    const router = useRouter();
	try {
		const book = await getBookIsbn(isbn);
		return (
			<Layout>
				<BookDetails
					Isbn={book.ISBN}
					Title={book.title}
					Author={book.author}
					Description={book.description}
					Price={book.price}
					Category={book.categories}
					imageUrl={book.imageUrl}
				/>
			</Layout>
		);
	} catch (e) {
		router.push('/');
		return (
			<Layout>
				<h1>Libro no encontrado</h1>
			</Layout>
		);
	}
}
