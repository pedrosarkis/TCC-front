import React from "react";

import { Container } from "./styles";

import Menu from "../../components/menu";

const About = () => {
    return (
        <>
            <Menu />
            <Container>
                <h1>Sobre o projeto</h1>
                <p>Esta plataforma visa identificar automaticamente uma fake news analisando apenas seu corpo textual</p>
                <h2>Como funciona?</h2>
                <p>
                    Ao receber o conteúdo de uma notícia, o sistema aplica técnicas de word embedding e o resultado é inserido em uma rede neural recorrente do
                    tipo LSTM, na qual foi treinada por 7200 notícías utilizando o database disponível pela equipe do{" "}
                    <a href="https://github.com/roneysco/Fake.br-Corpus" target="blank">
                        Fake.br
                    </a>
                    .
                </p>
                <h2>Sugestões de melhorias e report de bugs</h2>
                <p>
                    No momento ainda não temos um chat diretamente em nossa plataforma, no entanto para sugestão de melhorias ou parar reportar algum erro
                    encontrado durante o uso da ferramenta, orientamos que mande um e-mail para pedropverani@hotmail.com ou abra uma issue diretamente em nosso
                    repositório do{" "}
                    <a href="https://github.com/pedrosarkis/TCS-all" target="blank">
                        github.
                    </a>
                </p>
            </Container>
        </>
    );
};

export default About;
