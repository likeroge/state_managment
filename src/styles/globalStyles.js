import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root{
    --mainFont: 'Open Sans', sans-serif;
}
    *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                text-decoration: none;
    }

    body{
        h1,p{
            font-family: var(--mainFont);
        }
    }

`;
