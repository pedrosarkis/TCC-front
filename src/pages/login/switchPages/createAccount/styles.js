import styled from "styled-components";
import { shade } from "polished";

export const CreateArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 20px;

        .back-icon {
            width: 25px;
        }

        .div-title-header {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-right: 10px;
            .title-header {
                font-size: 1.3rem;
                color: #595959;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 80px; /* nao mexer */
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
            }
        }
        button {
            position: -moz-absolute;
            bottom: 0;
            margin-bottom: 20px;

            background: #009b00;
            border-radius: 1.2vh;
            border: 0;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.2s;
            cursor: pointer;
            &:hover {
                background: ${shade(0.2, "#009b00")};
            }
            margin-top: 30px;
            height: 50px;
            font-size: 20px;
            width: 150px;
        }
    }
`;
