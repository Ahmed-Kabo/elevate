import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
       
        --lightcolor : #fff; 
        --dark :#000;
        --mainColor :linear-gradient( to left,  #f8a442  , #dd2c5a  );
        --gray:#888;
        --darkGray:#333;
        --lightGray:#e1e1e1;
        --darkGray:#181818;
        --yellow:#ff8601 ;
        --normalFont : "Poppins", sans-serif;
    }
    *{
        padding:0 ;
        margin:0 ;
        box-sizing:border-box ;
    }
    ::selection {
        background: var(--yellow);
        color: rgb(255, 255, 255);
    }
    body{
        font-family: 'Bodoni Moda', serif;
        background: var(--darkGray);
        overflow-x: hidden;
        color: var(--lightcolor);
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration:none ;
        color: inherit;
    }

`;
