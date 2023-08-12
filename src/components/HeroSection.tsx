import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

export const HeroSection = () => {
    return (
        <section id="home">
            <div
                className="flex flex-col text-center items-center justify-center animate-fadeIn 
      animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
            >
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/eu_final.jpg"
                        alt="Pedro Santana"
                        height={325}
                        width={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0 ">
                        Olá, me chamo Pedro Santana
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        Eu sou um estudante de
                        <span className="font-semibold text-teal-600">
                            {" "}
                            Ciências da Computação{" "}
                        </span>
                        no{" "}
                        <span className="font-semibold text-teal-600">
                            IFG-Anapolis
                        </span>
                        . E estou em busca de conseguir meu primeiro estágio.
                    </p>
                    <Link
                        to="projetos"
                        className="text-neutral-100 font-semibold px-6 py-3 cursor-pointer bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projetos
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Link
                    to="sobre"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    );
};
