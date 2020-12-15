import styled from "styled-components";
import { shade } from "polished";

export const LoginArea = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            span {
                font-size: 1rem;
                color: gray;
                margin-top: 20px;
            }
            input {
                font-size: 1.1rem;
                width: 20rem;
                height: 2.5rem;
                margin-top: 5px;
                padding: 0 10px;
                border: 1px solid #6e6e6e;
                border-radius: 0.9vh;
                margin-bottom: 20px;
            }
            small {
                font-size: 0.8rem;
                color: black;
                &:hover {
                    color: ${shade(0.5, "#00B0FF")};
                }
                cursor: pointer;
            }
        }
        button {
            position: -moz-absolute;
            bottom: 0;
            margin-bottom: 20px;

            background: #00b0ff;
            border-radius: 1.2vh;
            border: 0;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.2s;
            &:hover {
                background: ${shade(0.2, "#00B0FF")};
            }
            margin-top: 30px;
            height: 50px;
            font-size: 20px;
            width: 150px;
        }
    }
`;

export const LinkCreateAccount = styled.div`
    text-decoration: none;
    margin-top: 20px;
    span {
        font-size: 1.35rem;
        color: #008ac6;
    }
`;
