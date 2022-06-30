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
        --yellowColoe:#f8a442 ;
    }


    *{
        padding:0 ;
        margin:0 ;
        box-sizing:border-box ;
    }
    body{
        font-family: 'Bodoni Moda', serif;
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration:none ;
    }

`;
