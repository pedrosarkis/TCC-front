import React, { useReducer, useEffect } from "react";
import { Home, Result } from "./styles";

//componentes
import Menu from "../../components/menu/index";
import { useAlert, types } from "react-alert";

//Scripts
import { changecolor } from "./scripts/changeColorResult";

//icons
import UrlIcon from "../../assets/link.svg";
import UrlIcon2 from "../../assets/link2.svg";
import TextIcon from "../../assets/text.svg";
import UpArrow from "../../assets/up-arrow.svg";
import TwitterImg from "../../assets/twitter.svg";
import FacebookImg from "../../assets/facebook.svg";

//animations
import GirlSearch from "./animations/searchGirl/animation";
import FindText from "./animations/findText/index";
import LoadingNews from "./animations/loadingNews";

function DetectorPage() {
    const scrapUrl = async (url) => {
        const authorization = localStorage.getItem("qwert");
        const settings = {
            method: "POST",
            body: JSON.stringify({ url }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };
        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/news/scrap", settings);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            alert.show("Houve um erro ao pesquisar essa url, por gentileza tente outra url ou use texto", { type: types.ERROR });
        }
    };

    const sendNews = async (content, url = "") => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");
        if (!authorization) window.location.reload(true); //supondo que o usuario ta logado, deletou o localStorage,e tenta enviar uma noticia, é pra desloga-lo, o reload fará isso
        const settings = {
            method: "POST",
            body: JSON.stringify({ content, url, verifiedBy: user }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };
        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/news/create", settings);
            const data = await response.json();

            if (data.success === true) {
                setUserInput({ ["veredict"]: data.veredict });
                window.scrollBy({
                    top: 1000,
                    behavior: "smooth",
                });
            } else {
                alert.show("Ocorreu um erro ao enviar sua noticia, tente novamente mais tarde!", { type: types.ERROR });
            }
        } catch (error) {}
    };

    const [userInput, setUserInput] = useReducer(
        //States da pagina
        (state, newState) => ({ ...state, ...newState }),
        {
            //scrap
            content: "",
            mode: "url",
            url: "",
            //url mode
            pagination: "1",
            nameButton: "Checar Noticia",
            //verify news
            veredict: true,
        }
    );

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const changeMode = () => {
        if (userInput.mode === "url") {
            setUserInput({ ["mode"]: "text" }); //Mudando para o formato texto
            setUserInput({ ["url"]: "" }); ///limpando campo da url caso mude o modo
        } else {
            setUserInput({ ["mode"]: "url" });
            setUserInput({ ["pagination"]: "1" }); //Caso volte para url, voltar para paginação 1
            setUserInput({ ["nameButton"]: "Checar Noticia" });
            setUserInput({ ["content"]: "" }); //limpando campo da noticia caso mude o modo
        }
    };

    const shake = (id) => {
        let auxid = document.getElementById(id); //Pega Div Url
        if (auxid) auxid.style = "animation: shake 0.5s;"; //APlica a animação e roda

        setTimeout(function () {
            // depois de 500 milissegundos tira a animação para depois rodar de novo
            auxid.style = "animation: none;";
        }, 450);
    };

    const checkNews = async () => {
        //Função para habilitar textarea antes de enviar a noticia
        if (userInput.content) {
            sendNews(userInput.content);
            return;
        }

        if (userInput.url) {
            //verifica se tem url preenchida
            setUserInput({ ["pagination"]: "2" }); //Muda para pagina dois.
            document.getElementById("pagination1").style.background = "white";
            document.getElementById("pagination2").style.background = "lightgray";
            setUserInput({ ["nameButton"]: "Enviar Noticia" }); //Troca o nome do botão
            const contentScraped = await scrapUrl(userInput.url);
            setUserInput({ ["content"]: contentScraped.content });
            return false;
        }

        shake("divurl");
    };

    const changePagination = () => {
        if (userInput.pagination === "1") {
            // Não deixa trocar para paginação 2
            if (userInput.url) {
                checkNews();
            } else {
                shake("divurl");
            }
        } else {
            document.getElementById("pagination1").style.background = "lightgray";
            document.getElementById("pagination2").style.background = "white";
            setUserInput({ ["pagination"]: "1" }); //Muda para pagina um.
            setUserInput({ ["nameButton"]: "Checar Noticia" });
            setUserInput({ ["content"]: "" });
        }
    };

    useEffect(() => {
        //Para subir a pagina caso atualize depois de dar um sendnews
        window.scrollBy({
            top: -1000,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <Menu />

            <Home>
                <div id="animation-girlsearch">
                    <GirlSearch />
                </div>

                <div className="header">
                    <div>
                        <p className="header-title">Identifique se a noticia é falsa</p>
                        {/* <a href="#section2">Click Me</a> */}
                        {userInput.mode === "text" && <button onClick={changeMode}>Mudar para url</button>}
                        {userInput.mode === "url" && <button onClick={changeMode}>Mudar para texto</button>}
                    </div>
                </div>
                <div className="content">
                    {userInput.mode === "text" && (
                        <>
                            <div className="textmode-title">
                                <img src={TextIcon} alt="" />
                                <h3>Insira o texto da noticia abaixo</h3>
                            </div>
                            <textarea
                                className="content-textarea"
                                placeholder="Insira o texto da noticia aqui..."
                                name="content"
                                value={userInput.content}
                                onChange={handleChange}
                            ></textarea>
                        </>
                    )}
                    {userInput.mode === "url" && userInput.pagination === "1" && (
                        <>
                            <div className="urlmode-title">
                                <img src={UrlIcon2} alt="" />
                                <h3>Insira a url da noticia abaixo</h3>
                            </div>
                            <div className="urlmode" id="divurl">
                                <img src={UrlIcon} alt="" />
                                <input placeholder="Insira a url" name="url" value={userInput.url} onChange={handleChange} id="url"></input>
                            </div>
                        </>
                    )}
                    {userInput.mode === "url" && userInput.pagination === "2" && (
                        <>
                            {userInput.content ? (
                                <>
                                    <h1 id="verify-news">Verifique se o trecho na noticia está correto</h1>
                                    <textarea className="content-textarea" name="content" value={userInput.content} onChange={handleChange}></textarea>
                                </>
                            ) : (
                                <FindText />
                            )}
                        </>
                    )}
                    <div className="content-footer">
                        {userInput.mode === "text" && (
                            <button type="submit" onClick={checkNews} id="sendnews">
                                Enviar Noticia
                            </button>
                        )}

                        {userInput.mode === "url" && (
                            <>
                                <div className="pagination">
                                    <button className="paginations" id="pagination1" onClick={changePagination}></button>
                                    <button className="paginations" id="pagination2" onClick={changePagination}></button>
                                </div>

                                <button type="submit" onClick={checkNews} id="sendnews">
                                    {userInput.nameButton}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </Home>
            <Result id="section2" color={changecolor(userInput.veredict)}>
                <button
                    className="btn-backtoup"
                    onClick={() => {
                        window.scrollBy({
                            top: -1000,
                            behavior: "smooth",
                        });
                    }}
                >
                    <img id="arrowup" src={UpArrow} alt="up-arrow" />
                    Voltar
                </button>
                <div className="div-title-result">
                    <h1 className="title-result">A noticia que você pesquisou é {userInput.veredict == true ? "verdadeira!" : "falsa!"}</h1>
                </div>

                <textarea className="content-textarea" value={userInput.content} readOnly />
                {/* <div className="share">
                    <h1>Compartilhar</h1>
                    <a href="https://twitter.com/intent/tweet?text=Hello%20world">
                        <img src={TwitterImg} alt="" />
                    </a>

                    <a
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                        target="_blank"
                        title="Share on Facebook"
                    >
                        <img src={FacebookImg} alt="Facebook" />
                    </a>
                </div> */}
            </Result>
        </>
    );
}

export default DetectorPage;
