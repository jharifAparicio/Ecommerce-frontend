"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CustomMenu from "@/components/CustomMenu";
import FooterSection from "@/components/FooterSection";

function HomePage() {
	const router = useRouter();

	const handleLoginRedirect = () => {
		router.push("/login");
	};

	const handleCartRedirect = () => {
		router.push("/cart");
	};

	return (
		<div className="w-full h-full bg-[#E2DCCC]">
			<header className="w-full h-1/5 bg-[#CB994E]">
				<div className="p-4 h-[60%] flex justify-center">
					<img
						src="https://res.cloudinary.com/dczydmnqc/image/upload/v1732214880/Ecommers/otros/fnsoq3a7wdrmwzh8lpln.webp"
						alt="logo"
					/>
				</div>
				<div className="flex h-2/5 w-full justify-around p-4 items-center">
					<CustomMenu
						alt="home"
						link="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215055/Ecommers/otros/svg/qp7xaxcv1ypml7e7fhfh.svg"
						title="Inicio"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<CustomMenu
						alt="Productos"
						link="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215053/Ecommers/otros/svg/rnck052aznmonpkyiyat.svg"
						title="Productos"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<CustomMenu
						alt="Recomendados"
						link="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215053/Ecommers/otros/svg/gc6vqgjfxkrmgevoi9ok.svg"
						title="Recomendados"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<div className="p-4 flex items-center cursor-pointer">
						<button
							className="bg-[blue] text-white px-4 py-3 rounded-xl hover:bg-blue-500 text-base font-black hover:text-black"
							onClick={handleLoginRedirect}
						>
							INICIAR SESION
						</button>
					</div>
				</div>
			</header>
			<article className="bg-[url('../public/webp/Welcome.webp')] w-full h-full bg-no-repeat bg-cover bg-center py-[5%] px-0">
				<h1 className="my-0 mx-[20%] text-5xl">Bienvenidos</h1>
				<p className="w-2/4 my-[5%] mx-[20%] text-xl">
					Explora un universo de historias, conocimiento e inspiración
					en nuestra tienda en línea. Ofrecemos una cuidadosa
					selección de libros para todos los gustos: desde fascinantes
					novelas y clásicos inmortales, hasta guías prácticas y las
					últimas tendencias literarias. Nuestro compromiso es
					acercarte el placer de la lectura con comodidad, precios
					justos y un servicio excepcional. ¡Descubre tu próxima gran
					lectura hoy mismo!
				</p>
			</article>
			<footer className="bg-[#CB994E] text-white px-[10%] py-5 h-1/3 flex flex-col items-center justify-center">
				<div className="flex justify-between w-full mb-5">
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
									className="hover:underline"
									onClick={handleLoginRedirect}
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									className="hover:underline"
									onClick={handleLoginRedirect}
								>
									Productos
								</a>
							</li>
							<li>
								<a
									className="hover:underline"
									onClick={handleLoginRedirect}
								>
									Recomendamos
								</a>
							</li>
							<li>
								<a
									className="hover:underline"
									onClick={handleLoginRedirect}
								>
									Carrito
								</a>
							</li>
						</ul>
					</FooterSection>
					<FooterSection title="Siguenos">
						<div className=" flex flex-row">
							<img
								className="w-8 h-8 mr-3 trasiotion duration-300 ease-in-out transform hover:scale-125"
								src="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215053/Ecommers/otros/svg/socials/xqbroqfwofs0ylwwp4lv.svg"
								alt="F"
								onClick={handleCartRedirect}
							/>
							<img
								className="w-8 h-8 mr-3 trasiotion duration-300 ease-in-out transform hover:scale-125"
								src="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215054/Ecommers/otros/svg/socials/kdq3tn04p4u8mewlwjyl.svg"
								alt="F"
								onClick={handleCartRedirect}
							/>
							<img
								className="w-8 h-8 mr-3 trasiotion duration-300 ease-in-out transform hover:scale-125"
								src="https://res.cloudinary.com/dczydmnqc/image/upload/v1732215053/Ecommers/otros/svg/socials/p7ctmm12cslyfg5rbbfh.svg"
								alt="F"
								onClick={handleCartRedirect}
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
}

export default HomePage;
