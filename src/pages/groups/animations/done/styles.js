import styled from "styled-components";

export const Div = styled.div`
    flex: 1;
    height: 600px;

    .fadeIn {
        -webkit-animation: fadeIn 3s ease-in-out;
        -moz-animation: fadeIn 3s ease-in-out;
        -o-animation: fadeIn 3s ease-in-out;
        animation: fadeIn 3s ease-in-out;
    }

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
    @-o-keyframes fadeIn {
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
