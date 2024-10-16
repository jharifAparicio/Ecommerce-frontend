// src/app/Login.tsx
"use client";

import React, { useState } from 'react';
import CustomInput from '@/components/CustomInput';
import "@/styles/globals.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log({ username, password });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center">
            <div className="h-auto w-auto flex flex-col border-4 border-gray-800 backdrop-blur-md shadow-lg rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
                <form id="loginForm" onSubmit={handleSubmit} className="flex flex-col justify-center h-[400px] p-10 bg-transparent">
                    <h2 className="text-black text-3xl text-center mb-7 mt-0">Login</h2>
                    <div className="mb-5">
                        <CustomInput
                            type="text"
                            id="username"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <CustomInput
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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