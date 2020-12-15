import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;

    .backgroundImage {
        background-size: cover;
        position: fixed;
        z-index: -1;
        width: 100%;
        bottom: 0;
        animation: grow0 1s forwards;

        @keyframes grow0 {
            from {
                height: 65%;
            }
            to {
                height: 25%;
            }
        }
        @media (min-width: 700px) {
            background-size: cover;
            position: fixed;
            z-index: -1;
            width: 100%;
            bottom: 0;
            animation: grow0 1s forwards;
            @keyframes grow0 {
                from {
                    height: 65%;
                }
                to {
                    height: 75%;
                }
            }
        }
        @media (min-width: 1600px) {
            /* Para a imagem não ficar muito grande caso a tela seja super widescreen */
            background-size: cover;
            position: fixed;
            z-index: -1;
            width: 100%;
            height: 80%;
            bottom: 0;
        }
    }
    .page {
        flex: 1;
        display: flex;
        margin: 5% 5% 5% 5%;

        @media (max-width: 700px) {
            /* Se for para tela pequena, ele centralziza o modal de login/lost/create para o meio */
            justify-content: center;
        }

        .leftside {
            box-shadow: #c0c0c0 0px 0px 3px 0.3px;
            flex: 1;
            max-width: 400px;
            min-width: 340px;
            height: max-content;
            display: flex;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 2vw;
            backdrop-filter: blur(3px);

            animation: grow1 2s forwards;
            @keyframes grow1 {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 10%;
                img {
                    width: 3rem;
                }
                p {
                    color: #595959;
                    margin-left: 10px;
                    font-size: 20px;
                }
            }
            .leftside-phone {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                font-size: 14px;
                p {
                    margin-top: 10px;
                }
            }
            .modalLogin {
                padding: 5% 5% 5% 5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 430px;
            }
        }
        .rightside {
            width: 100%;
            flex: 1.5;
            margin-left: 2%;
            .detec-news {
                color: gray;
                font-size: 2.5vw;
                text-align: center;
            }
            .detec-emails {
                margin-top: 10px;
                color: gray;
                font-size: 1.2vw;
                text-align: center;
            }
        }
    }
`;
