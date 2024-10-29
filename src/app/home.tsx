'use client';
import React, { useEffect} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    return (
        <h1>bienvenido </h1>
    );
}

export default HomePage;