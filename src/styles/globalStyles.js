import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Nunito', sans-serif;
    }

    img {
        max-width: 100%;
    }
`;
