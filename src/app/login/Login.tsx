"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/login";
import CustomInput from "@/components/CustomInput";
import Cookies from "js-cookie";
import "@/styles/globals.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	// Clear error message after 3 secondsss
	useEffect(() => {
		if(error){
			const timer  = setTimeout(()=> setError(""), 3000);
			return () => clearTimeout(timer);
		}
	},[error]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		if(!username || !password){
			setError("error: Campos vacíos");
			return;
		};
		try {
			const res = await login(username, password);
			if (res && res.token) {
				Cookies.set("token", res.token, {
					expires: 1,
					sameSite: "None",
					secure: true,
				});
				router.push("/book");
			} else {
				setError("error: Token no recibido:");
			}
		} catch (err) {
			setError("error: Contraseña o usuario incorrecto");
		}
	};

	return (
		<div className="flex items-center justify-center bg-cover bg-center bg-[url('../public/webp/portadaLogin.webp')] m-0 h-screen">
			<div className="h-auto w-auto flex flex-col border-4 border-gray-800 backdrop-blur-md shadow-lg rounded-lg ">
				<form
					id="loginForm"
					onSubmit={handleSubmit}
					className="flex flex-col justify-center h-[400px] p-[60px] bg-transparent"
				>
					<h2 className="text-white text-2xl text-center mb-7 mt-0">
						Login
					</h2>
					<div className="mb-5">
						<CustomInput
							type="text"
							id="username"
							placeholder="Usuario"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							aria-label="Usuario"
						/>
						<CustomInput
							type="password"
							id="password"
							placeholder="Contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							aria-label="Contraseña"
						/>
						{error && <p className="text-red-500 text-left mt-1">{error}</p>}
					</div>
					<div className="flex justify-end">
						<input
							type="submit"
							value="Ingresar"
							className="bg-blue-600 text-white text-xs py-2 px-4 rounded-md mt-5 w-auto border-none cursor-pointer"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
