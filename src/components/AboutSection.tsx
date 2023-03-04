import Image from "next/image";
import React from "react";

const habilidades = [
  { habilidade: "HTML" },
  { habilidade: "CSS" },
  { habilidade: "JavaScript" },
  { habilidade: "TypeScript" },
  { habilidade: "Python" },
  { habilidade: "React" },
  { habilidade: "Next.js" },
  { habilidade: "Tailwind CSS" },
  { habilidade: "Git" },
  { habilidade: "GitHub" },
];

export const AboutSection = () => {
  return (
    <section id="sobre">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mim
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div
          className="flex flex-col space-y-10 items-stretch 
        justify-center align-top md:flex-row md:text-left md:p-4
        md:space-y-0 md:space-x-10"
        >
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Sobre mim
            </h1>
            <p>
              Olá, meu nome é Pedro Santana, <span className="font-bold">{"dolor"}</span>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              perferendis! Ea tempore recusandae quaerat. Voluptate quas commodi
              maxime soluta, itaque ipsam ducimus sunt natus, illo dolorum
              asperiores illum labore suscipit.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            {" "}
            <h1 className="text-2xl font-bold mb-6">Minhas Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {habilidades.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.habilidade}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hand.png"
              alt=""
              width={300}
              height={300}
              className="hidden md:block md:relative md:bottom-4 items-end md:left-32 md:z-0 md:pt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
