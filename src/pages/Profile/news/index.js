import React from "react";

import { Container, Nav, Page } from "./styles";
import Menu from "../../../components/menu/index";

import { useHistory, Link } from "react-router-dom";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BiLeftArrowAlt, BiTimeFive } from "react-icons/bi";

const News = (props) => {
    const history = useHistory();

    let date = props.date.match(/\d{4}-\d{2}-\d{2}/g);
    let hours = props.date.match(/([01][0-9]|2[0-3]):([0-5][0-9])/g);

    return (
        <>
            <Menu />
            <Page>
                <Nav id="nav">
                    <button id="voltar" style={{ marginLeft: 5 }}>
                        <BiLeftArrowAlt
                            id="left-arrow"
                            onClick={() => {
                                history.goBack();
                            }}
                        />
                    </button>
                    <p>Perfil</p>
                    <p></p>
                </Nav>
                <Container>
                    {props.isFakeNews === true ? <h1>Essa é uma noticia falsa.</h1> : <h1>Essa é uma noticia verdadeira.</h1>}
                    <div id="acess-time">
                        <BiTimeFive id="acess-time-icon" />
                        <span>
                            Acessada em: {date} as {hours}
                        </span>
                    </div>
                    <div id="news-content">
                        <p id="text">
                            <ImQuotesLeft id="quote-left" />
                            {props.content}
                            <ImQuotesRight id="quote-right" />
                        </p>
                    </div>
                </Container>
            </Page>
        </>
    );
};

export default News;
