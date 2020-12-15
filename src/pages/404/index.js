import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import Menu from "../../components/menu/";
import Animation from "./animations/animation";

const Page404 = () => {
    const history = useHistory();
    return (
        <>
            <Container>
                <h1>Desculpe mas essa pagina não existe :(</h1>
                <div className="animation">
                    <Animation />
                </div>
                <button className="voltar">Voltar</button>
            </Container>
        </>
    );
};

export default Page404;
