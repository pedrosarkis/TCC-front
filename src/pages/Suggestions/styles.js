import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    h1 {
        font-size: 30px;
    }


    #title{
       margin-top: 20px;
        font-size: 16px;
        text-align: center;

        width: 80vw;
    }
    textarea {
        border-radius: 1vh;
        resize: none;
        width: 80vw;
        height: 400px;
        padding: 10px;
        cursor: text;
        border: 1px solid lightgray;
        margin-top: 50px;
        margin-bottom: 40px;

        @media (min-width: 700px) {
            width: 60vw;
        }
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

    div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90vw;
            @media (max-width: 700px){
                flex-direction: column;
            }

            p {
                font-size: 16px;  
            }

            select {
                height: 40px;
                font-size: 16px;
                -webkit-padding-end: 20px;
                -moz-padding-end: 20px;
                -webkit-padding-start: 20px;
                -moz-padding-start: 20px;
                background-color: SkyBlue; /* Fallback color if gradients are not supported */
                color: white;
                border: none;
                
                @media (min-width: 700px){
                    margin-right: 20px;
                    width: 20vw;
                }
                @media (max-width: 700px){
                    margin-bottom: 50px;
                    width: 80vw;
                }    

                option {
                    background: gray;
                }
            }
            

            
            button {
                background: #00b0ff;
                border-radius: 1.2vh;
                border: 0;
                color: #fff;
                font-weight: bold;
                transition: background-color 0.2s;
                &:hover {
                    background: ${shade(0.2, "#00B0FF")};
                }
                height: 50px;
                font-size: 20px;
                width: 150px;
            }
        }
    }
`;
