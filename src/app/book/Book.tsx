'use client';
import React, { useEffect}from 'react';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Book = () => {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    const closeSession = () => {
        Cookies.remove("token");
        router.push("/login");
    }
    return (
        <div className='w-full bg-[#E2DCCC] h-full'>
            <h1>libros</h1>
            <button
                onClick={closeSession}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
            >
                Cerrar sesión
            </button>
        </div>
    );
}

export default Book;
