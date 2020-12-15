import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     * {
          margin:0;
          padding:0;
          outline: 0;
          box-sizing: border-box;

          animation: Opacityfade 0.3s forwards;

          @keyframes Opacityfade {
          0% {
               opacity: 0;
          }
          100% {
               opacity: 1;
          }
          } 

          button {
          cursor: pointer;
     }
     }
     body {
          (/*overflow: hidden;*/}
     }
     html {
          scroll-behavior: smooth;
     }
     body, input, button {
          font: 62.5% Roboto, sans-serif;
     }
     #root {
          margin: 0 auto;
     }
     
     button {
          cursor: pointer;
     }

     

    

     
`;
