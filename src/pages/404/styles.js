import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;

    h1 {
        margin-bottom: 30px;
        font-size: 16px;
        color: gray;
        @media (min-width: 700px) {
            font-size: 40px;
        }
    }

    .animation {
        width: 300px;
        @media (min-width: 700px) {
            width: 450px;
        }
    }

    .voltar {
        background: gray;
        border-radius: 1.2vh;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background: ${shade(0.2, "gray")};
        }
        height: 50px;
        font-size: 20px;
        width: 150px;
    }
`;
