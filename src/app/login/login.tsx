"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/login";
import CustomInput from "@/components/CustomInput";
import "@/styles/globals.css";
import Cookies from "js-cookie";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	// Clear error message after 3 secondsss
	useEffect(() => {
		if (error) {
			const timer = setTimeout(() => setError(""), 3000);
			return () => clearTimeout(timer);
		}
	}, [error]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		if (!username || !password) {
			setError("error: Campos vacíos");
			return;
		}
		try {
			const res = await login(username, password);
			if (res && res.token) {
				Cookies.set("token", res.token, {
					expires: 1,
					sameSite: "None",
					secure: true,
				});
				router.push("/");
			} else {
				setError("error: Token no recibido:");
			}
		} catch (err) {
			setError("error: Contraseña o usuario incorrecto");
		}
	};

	return (
		<div className="flex bg-custom-gradient m-0 h-screen">
			<div className="h-[60vh] w-1/3 flex m-auto border-none backdrop-blur-md shadow-[0_0_10px_5px_rgb(148,146,146)] rounded-3xl">
				<form
					id="loginForm"
					onSubmit={handleSubmit}
					className="w-full text-xs bg-[rgb(249,249,249)] h-full flex flex-col justify-center p-16 rounded-3xl"
				>
					<div className="text-black text-2xl text-center my-6 mx-auto h-1/5 font-extrabold font-serif">
						<h2>Login</h2>
					</div>
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
					{error && (
						<p className="text-red-500 text-left mt-1">{error}</p>
					)}
					<div className="flex justify-between items-center h-1/5">
						<p onClick={handleSubmit} className="font-semibold text-blue-600 hover:text-blue-700 hover:cursor-pointer hover:scale-105">Crear Cuenta</p>
						<input
							type="submit"
							value="Ingresar"
							className="bg-blue-600 text-white text-[15px] py-3 font-bold rounded-xl w-1/4 border-none cursor-pointer hover:bg-blue-500 hover:text-black"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
