import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    justify-content: flex-start;
    text-align: center;

    #title-page{
        font-size: 24px;
        @media (max-width: 700px) {
        font-size: 20px;
        }
        color: #454545
    }

    #back {
        display: flex;
        align-items: center;
        @media (max-width: 700px) {
            margin-left: 20px;
        }
        @media (min-width: 700px) {
            margin-left: 20vw;
        }

        height: 50px;

        cursor: pointer;
        p {
            font-size: 18px;
            margin-left: 10px;
        }
        img {
            height: 50px;
        }
    }

    .description {
        padding: 20px;
        color: #454545;
    }

    #groupimage {
        position: relative;
        animation: myfirst 2s forwards;
        z-index: -1;

        #splash {
            @media (min-width: 700px) {
            position: absolute;
            top: -5px; left: -47px;
            z-index: -1;
            }
            position: absolute;
            top:40px; left: 37px;
            z-index: -1;

        
        }

        @keyframes myfirst {
            from {
                top: 0px;
            }
            to {
                top: 180px;
            }
        }

        img {
            width: 300px;
            @media (min-width: 700px) {
                width: 600px;
            }
        }
        #text-bottom-button {
            color: #454545;
            font-size: 30px;
            margin-top: 10px;
        }
    }

    .divbutton {
        display: flex;
        justify-content: center;
        align-items: center;

        #create-group-button {
            position: absolute;
            background: #00b0ff;
            color: white;
            border: none;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            &:hover {
                background: ${shade(0.1, "#00B0FF")};
            }
            opacity: 0;
            animation: Opacityfade 1s forwards;
            animation-delay: 1.3s;

            @keyframes Opacityfade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            .icon {
                font-size: 30px;
            }
        }
    }

    #title-create-group {
        font-size: 30px;
        margin-bottom: 30px;
    }

    #footer {
        @media (min-width: 700px) {
            margin-top: 20px;
        }
        @media (max-width: 700px) {
            order:-1;
        }
        button {
            background:  #009b00;
            border-radius: 1.2vh;
            border: 0;
            color: #FFF;
            font-weight: bold;
            transition: background-color 0.2s;
            cursor: pointer;
            &:hover {
                background: ${shade(0.2, "#009b00")}
            } 
                height: 50px;
                font-size: 20px;
            width: 150px;
                }
        }
    }
    #create-group {
        color: #454545;
        width: 100vw;
        display: flex;
        justify-content: center;
        @media (max-width: 700px) {
            flex-direction: column;
            align-items: center;
        }
        
        form {
            @media (min-width: 700px) {
                display :flex;
            }
        #div-form-create-group {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 0px 5px 0px 5px;

            @media (min-width: 700px) {
                padding-right: 30px;
            }
            #div-group-name {
                display: flex;
                align-items: center;
                border: 1px solid #00b0ff;
                border-radius: 6px 6px 6px 6px;
                margin-top: 20px;

                p {
                    @media (min-width: 700px) {
                        font-size: 18px;
                    }
                    font-size: 14px;
                    background-color: #00b0ff;
                    padding: 10px;
                    border-radius: 5px 0px 0px 5px;
                    color: white;
                }
                input {
                    margin-left: 10px;
                    width: 50vw;
                    @media (min-width: 700px) {
                        width: 200px;
                    }
                    height: 30px;
                    border: none;
                    font-size: 18px;
                    padding-right: 5px;
                }
            }

            #div-description-group {
                margin-top: 30px;
                border: 1px solid #00b0ff;

                border-radius: 10px 10px 10px 10px;
                p {
                    font-size: 14px;
                    @media (min-width: 700px) {
                        font-size: 18px;
                    }
                    border-radius: 8px 8px 0px 0px;
                    background-color: #00b0ff;
                    padding: 10px;
                    color: white;
                }

                textarea {
                    border: none;
                    resize: none;
                    @media (min-width: 700px) {
                        width: 355px;
                    }
                    width: 88vw;

                    height: 150px;
                    padding: 10px;
                    background: rgba(255, 255, 255, 0.1); /* deixa o fundo branco transparente */
                    backdrop-filter: blur(1px);
                    cursor: text;
                }

                textarea::-webkit-scrollbar {
                    width: 12px;
                    background-color: #f5f5f5;
                }

                textarea::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
                    background-color: #4285f4;
                }
            }
        }
        }

        #div-list-emails {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @media (min-width: 700px) {
                margin-left: 30px;
            }
            @media (max-width: 700px) {
                width: 88vw;
            }
                    

            @media (max-width: 700px) {
                margin-top: 25px;
            }

            #div-list-emails-inside {
                border-radius: 10px;

                div {
                    display: flex;
                    align-items: flex-start;
                }

                input {
                    font-size: 17.5px;
                    padding: 10px;
                    border: 1px solid #00b0ff;
                    border-radius: 10px 0px 0px 10px;
                    margin-top: 20px;
                    @media (max-width: 700px) {
                        width: 60vw;
                        max-width: 300px;
                    }
                }
                button {
                    font-size: 18px;
                    padding: 10px;
                    border: none;
                    color: white;
                    background-color: #00b0ff;
                    border-radius: 0px 8px 8px 0px;
                    margin-top: 20px;
                    &:hover {
                        background: ${shade(0.1, "#00B0FF")};
                    }
                }

                ul {
                    list-style-type: none;
                    font-size: 14px;
                    height: 225px;

                    li {
                        padding: 5px;
                        border: 1px solid lightgray;
                        border-radius: 10px;
                        margin-top: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    #crown{
                        margin-right: 5px;
                    }

                    li:last-child {
                        margin-bottom: 30px;
                    }

                    
                }
            }
        }
    }





    #container-created{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        color: #454545;
        font-size: 20px;
        @media (max-width: 700px) {
                flex-direction: column;
        }
        
        #border-color{
            border: 1px solid;
        }
       
       
    
         
    }

    
`;

export const Created = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;

    @media (min-width: 1100px) {
        height: 80vh;
        padding: 10px 80px 0px 80px;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        padding: 0px 5px 20px 5px;
    }

    #cover {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #70b0ff;

        @media (max-width: 1100px) {
            height: 200px;
            width: 94.83vw;
            border-radius: 30px 30px 0px 0px;
        }

        @media (min-width: 1100px) and (max-width: 1420px) {
            width: 40%;
            border-radius: 30px 0px 0px 30px;
        }

        @media (min-width: 1420px) {
            width: 33%;
            border-radius: 30px 0px 0px 30px;
        }

        img {
            padding: 10px;
            @media (max-width: 1100px) {
                height: 200px;
            }
            @media (min-width: 1100px) {
                height: 30vw;
                min-height: 250px;
                max-height: 300px;
            }
        }
    }

    #content {
        border: 1px 1px 1px 0px solid lightgray;
        box-shadow: 2px 1px 20px lightgray;
        background-color: Snow;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1100px) {
            border-radius: 0px 0px 30px 30px;
            width: 95vw;
        }
        @media (min-width: 1100px) {
            border-radius: 0px 30px 30px 0px;
            width: 50vw;
        }

        #nav {
            display: flex;

            align-items: center;
            padding-top: 20px;
            padding-right: 30px;
            flex-direction: row-reverse;

            button {
                background: transparent;
                border: none;
                display: flex;
            }
        }

        #top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            #title {
                width: 100%;
                font-size: 45px;
                margin-top: 30px;
                margin-bottom: 30px;
                color: #454545;
                word-wrap: break-word;
            }
            #title::first-letter {
                text-transform: uppercase;
            }
            #description {
                font-size: 14px;
                width: 300px;
                word-wrap: break-word;

                small {
                    color: #454545;
                }
                @media (max-width: 1100px) {
                    margin-top: 20px;
                }
            }
            #description::first-letter {
                text-transform: uppercase;
            }
        }

        #mid {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            font-size: 16px;
            color: #454545;
            @media (max-width: 1100px) {
                margin-top: 20px;
            }

            #mid-title {
                margin-bottom: 20px;
            }
        }
        #bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px;
            font-size: 16px;
            @media (max-width: 1100px) {
                flex-direction: column;
            }
        }
    }
`;

export const Invited = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #454545;
    margin-top: 20px;

    h2 {
        margin-top: 10px;
        color: gray;
    }

    h3 {
        margin-bottom: 40px;
    }
    #buttons {
        width: 100%;
        display: flex;
        @media (max-width: 700px) {
            flex-direction: column;
        }
        @media (min-width: 700px) {
            align-items: center;
            justify-content: center;
        }

        #notaccetp {
            font-size: 38px;
            padding: 10px;
            border: none;
            color: white;
            background-color: tomato;
            border-radius: 8px;
            margin-top: 20px;
            &:hover {
                background: ${shade(0.1, "tomato")};
            }
            @media (max-width: 700px) {
                margin: 20px 20px 0px 20px;
            }
        }

        #accetp {
            font-size: 38px;
            padding: 10px 30px 10px 30px;

            border: none;
            color: white;
            background-color: #00b0ff;
            border-radius: 8px;
            margin-top: 20px;
            @media (min-width: 700px) {
                margin-left: 30px;
            }
            &:hover {
                background: ${shade(0.1, "#00B0FF")};
            }
            @media (max-width: 700px) {
                margin: 20px 20px 0px 20px;
            }
        }
    }
`;
