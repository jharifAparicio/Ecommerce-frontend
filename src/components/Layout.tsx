"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// imports custom components
import CustomMenu from "@/components/CustomMenu";
import FooterSection from "@/components/FooterSection";
// imports Icons
import HomeIcon from "@/assets/icons/HomeIcon";
import ProductsIcon from "@/assets/icons/ProductsIcon";
import RecomentsIcon from "@/assets/icons/RecomentsIcon";
import CarritoIcon from "@/assets/icons/CarritoIcon";
// imports socials
import FacebookIcon from "@/assets/socials/FacebookIcon";
import TwitterIcon from "@/assets/socials/TwitterIcon";
import InstagramIcon from "@/assets/socials/InstagramIcon";

import { ReactNode } from "react";
import Cookies from "js-cookie";

const Layout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			setIsAuth(!!token);
		}
	}, []);

	const handleLoginRedirect = (path: string) => {
		if (isAuth) {
			router.push(path);
		} else {
			router.push("/login");
		}
	};

	return (
		<div className="w-full h-full flex flex-col justify-between">
			<header className="w-full h-1/5 bg-marron">
				<div className="p-4 h-[60%] flex justify-center">
					<Image
						src="/webp/logo.webp"
						width={78}
						height={100}
						alt="logo"
					/>
				</div>
				<div className="flex h-2/5 w-full justify-around p-4 items-center">
					<CustomMenu
						icon={
							<HomeIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Inicio"
						onClick={() => handleLoginRedirect("/")}
					></CustomMenu>
					<CustomMenu
						icon={
							<ProductsIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Productos"
						onClick={() => handleLoginRedirect("/books")}
					></CustomMenu>
					<CustomMenu
						icon={
							<RecomentsIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Recomendados"
						onClick={() => handleLoginRedirect("/")}
					></CustomMenu>
					{isAuth ? (
						<CustomMenu
							icon={
								<CarritoIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
							}
							title="Carrito de compras"
							onClick={() => handleLoginRedirect("/")}
						></CustomMenu>
					) : null}
					<div className="p-4 flex items-center cursor-pointer">
						{!isAuth ? (
							<button
								className="bg-[blue] text-white px-4 py-3 rounded-xl hover:bg-blue-500 text-base font-black hover:text-black"
								onClick={() => {
									router.push("/login");
								}}
							>
								Iniciar Sesión
							</button>
						) : (
							<button
								className="bg-red-500 text-black px-4 py-3 rounded-xl hover:bg-red-700 text-base font-black hover:text-white"
								onClick={() => {
									Cookies.remove("token");
									setIsAuth(false);
									router.push("/");
								}}	
							>
								Cerrar Sesión
							</button>
						)}
					</div>
				</div>
			</header>
			<main className="bg-custom-gradient h-full">{children}</main>
			<footer className="bg-marron text-white px-[10%] py-5 h-1/3 flex flex-col items-center justify-center">
				<div className="flex items-center justify-between w-full mb-5">
					<FooterSection title="Contantanos">
						<p className="text-base mx-1 my-0 text-white">
							📍 Dirección: Calle Ficticia #123, Ciudad
						</p>
						<p className="text-base mx-1 my-0 text-white">
							📞 Teléfono: +52 55 1234 5678
						</p>
						<p className="text-base mx-1 my-0 text-white">
							📧 Email: contacto@tu-tienda.com
						</p>
					</FooterSection>
					<FooterSection title="Enlaces Rapidos">
						<ul className="no-underline text-white list-none p-0">
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={() => handleLoginRedirect("/")}
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={() => handleLoginRedirect("/book")}
								>
									Productos
								</a>
							</li>
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={() => handleLoginRedirect("/")}
								>
									Recomendamos
								</a>
							</li>
							{isAuth ? (
								<li>
									<a
										className="hover:underline cursor-pointer"
										onClick={() => handleLoginRedirect("/")}
									>
										Carrito
									</a>
								</li>
							) : null}
						</ul>
					</FooterSection>
					<FooterSection title="Siguenos">
						<div className=" flex flex-row">
							<FacebookIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								onClick={handleLoginRedirect}
								alt="F"
							></FacebookIcon>
							<TwitterIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								alt="Twitter"
								onClick={handleLoginRedirect}
							/>
							<InstagramIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								alt="X"
								onClick={handleLoginRedirect}
							/>
						</div>
					</FooterSection>
				</div>
				<div className="text-center text-sm border-t-[1px] border-t-black p-3 w-full">
					<p>
						© 2024 Tu Tienda de Libros. Todos los derechos
						reservados.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
