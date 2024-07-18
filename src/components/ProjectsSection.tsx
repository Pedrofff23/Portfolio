import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projetos = [
    {
        nome: "Sistema de Comandas",
        descricao:
            "Um site feito para um lava jato cadastrar seus clientes, além de criar, assinar virtualmente e exportar suas comandas. Também foi feito um dashboard para o nosso cliente ter um maior controle do caixa de sua empresa.",
        image: "/lavajato.png",
        github: "",
        link: "",
    },
    {
        nome: "Associacão de Doulas de Goiás",
        descricao:
            "Site feito para a Associação de Doulas de Goiás, com o intuito de apresentar o seu trabalho e realizar o controle de suas associadas.",
        image: "/doulas.png",
        github: "",
        link: "https://adoulago.com",
    },
    {
        nome: "Portfólio",
        descricao: "Este site para apresentar o meu portfólio.",
        image: "/portfolio.png",
        github: "https://github.com/Pedrofff23/Portfolio",
        link: "https://pedrofff.tech/",
    },
    {
        nome: "Cria-Meet",
        descricao:
            "Um site para criar salas de reuniões e compartilhar o link com outras pessoas.",
        image: "/cria-meet.png",
        github: "https://github.com/Pedrofff23/cria-meet",
        link: "https://cria-meet.vercel.app",
    },
    {
        nome: "Annotations",
        descricao:
            "Um site para mostrar anotações feitas da faculdade, permitindo que qualquer pessoa que queira entrar nesse projeto possa compartilhar suas anotações e compartilhar o link com outras pessoas.",
        image: "/annotations.png",
        github: "https://github.com/Pedrofff23/IFG-Annotations",
        link: "https://annotations.grupocrias.com/",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projetos">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projetos
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projetos.map((projetos, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -200px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={projetos.link}>
                                            <Image
                                                src={projetos.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {projetos.nome}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {projetos.descricao}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            {projetos.github === "" ? (
                                                <div></div>
                                            ) : (
                                                <Link
                                                    href={projetos.github}
                                                    target="_blank"
                                                >
                                                    <BsGithub
                                                        size={30}
                                                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                    />
                                                </Link>
                                            )}
                                            {projetos.link === "" ? (
                                                <div></div>
                                            ) : (
                                                <Link
                                                    href={projetos.link}
                                                    target="_blank"
                                                >
                                                    <BsArrowUpRightSquare
                                                        size={30}
                                                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};