import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Notfound() {
    const { systemTheme, theme, setTheme } = useTheme();
    let currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = useState(false);
    const [mounted, setMounted] = useState(false);

    if(currentTheme === "dark"){
        currentTheme = "stone-900"
    }else{
        currentTheme = "white"
    }

    useEffect(() => {
        setMounted(true);
      }, []);
  
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
                <span className={`zero after:bg-` + currentTheme}>
                    
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