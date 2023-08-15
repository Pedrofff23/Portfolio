import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Notfound() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);
    let cor

    if(currentTheme == "dark"){
        cor = "stone-900"
    }else{
        cor = "white"
    }

    useEffect(() => {
        setMounted(true);

      }, [currentTheme]);
  
      if (!mounted) {
        return null;
      }

    return (
        <div>
            <p className="zoom-area">A pagina que você procura não existe! </p>
            <section className="error-container">
                <span className="four">
                    <span className="screen-reader-text text-sla">4</span>
                </span>
                <span className={`zero after:bg-` + cor}>
                    
                    <span className={`screen-reader-text`}>0</span>
                </span>
                <span className="four">
                    <span className="screen-reader-text ">4</span>
                </span>
            </section>
            <div className="link-container">
                <div className="flex justify-center">
                    <div className="px-4">
                        <a
                            href="/"
                            className="more-link "
                        >
                            Clique para voltar
                        </a>
                    </div>
                    <a
                        target="_blank"
                        href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
                        className="more-link"
                    >
                        Créditos ao criador
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Notfound;