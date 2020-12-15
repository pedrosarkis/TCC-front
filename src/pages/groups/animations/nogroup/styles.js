import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin-left: 20px;

    @media (min-width: 700px) {
        width: 450px;
    }

    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn 1s ease-in-out;
    animation: fadeIn 1s ease-in-out;

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
