import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "../../routes/routesSwitchLogin";

import { Container } from "./styles";

import logoImg from "../../assets/logo4.svg";
import fakeNewsIcon from "../../assets/fakenewsicon.svg";

function LoginPage() {
    const [widthscreen, setWidthscreen] = useState(window.screen.width);

    const [countNews, setCountNews] = useState();
    const [countEmails, setCountEmails] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://tcspedroverani.herokuapp.com/report/extract");
                const data = await response.json();
                setCountNews(data.totalNews);
                setCountEmails(data.totalMail);
            } catch (error) {}
        })();
    }, []);

    return (
        <>
            <Container>
                <img className="backgroundImage" src={logoImg} alt="" />

                <div className="page">
                    <div className="leftside">
                        <div className="title">
                            <img src={fakeNewsIcon} alt="" />
                            <p>Detector de Fake News</p>
                        </div>
                        {widthscreen < 1000 && ( // Só renderiza se for tela de pc
                            <div className="leftside-phone">
                                <p>Vamos ajudar você a detectar noticias falsas.</p>
                                <p>Já encontramos {countNews} noticias falsas.</p>
                                <p>Enviamos mais de {countEmails} e-mails avisando colegas.</p>
                            </div>
                        )}
                        <div className="modalLogin">
                            <BrowserRouter>
                                <Routes />
                            </BrowserRouter>
                        </div>
                    </div>
                    {widthscreen > 1000 && ( // Só renderiza se for tela de pc
                        <div className="rightside">
                            <div>
                                <p className="detec-news">Vamos ajudar você a detectar noticias falsas.</p>
                                <p className="detec-emails">
                                    Já encontramos {countNews} noticias falsas e enviamos mais de {countEmails} e-mails avisando colegas.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
}

export default LoginPage;
