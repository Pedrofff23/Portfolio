import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projetos = [
  {
    nome: "Lava Jato",
    descricao:
      "Um site feito para uma lava jato manter suas comandas e assinalas virtualmente",
    image:
      "/MateoMMA_3d_baby_green_dinosaur_with_white_glasses_with_a_cap_w_15b47a1b-7b43-4f29-ab3f-903420b0cb16.png",
    github: "https://github.com/OsCrias-ltda/Lava-Jato-UI",
    link: "https://pedrofff.dev",
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
              <SlideUp offset="-300px 0px -300px 0px">
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
                    <h1 className="text-4xl font-bold mb-6">{projetos.nome}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {projetos.descricao}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={projetos.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={projetos.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
     
    </section>
  );
};
