import Link from "next/link";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function Notfound() {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    // true on the client, false during SSR — avoids a theme hydration mismatch
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);
    let cor

    if(currentTheme == "dark"){
        cor = "stone-900"
    }else{
        cor = "white"
    }

  
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
                        <Link
                            href="/"
                            className="more-link "
                        >
                            Clique para voltar
                        </Link>
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