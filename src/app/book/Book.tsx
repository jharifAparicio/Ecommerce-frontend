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
    return (
        <div className='w-full bg-[#E2DCCC] h-full'>
            <h1>libros</h1>
        </div>
    );
}

export default Book;
