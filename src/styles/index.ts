import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --blueDetails: #003be5;
        --blueHover: #154ef8;
        --greenDetails: #2FC18C;
        --greenHover: #21956b;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: rgba(0, 128, 0, 0.486);
        height: 100vh;
        width: 100vw;
        background-size: cover;
        background-position: center;
    }
`;

export default GlobalStyle;
