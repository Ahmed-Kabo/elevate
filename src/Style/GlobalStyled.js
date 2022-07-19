import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
       
        --lightcolor : #fff; 
        --dark :#000;
        --mainColor :linear-gradient( to left,  #f8a442  , #dd2c5a  );
        --gray:#888;  
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
    ::-webkit-scrollbar {
        width: 10px;
        background:#000 !important;
        border-radius:2rem;
    }

    ::-webkit-scrollbar-track {
       width: 10px;
        background:var(--darkGray) !important;
        border-radius:2rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--yellow); 
        border-radius: 2rem;
    }
    html{
          scroll-behavior: smooth;
    }
    body{
        font-family: 'Bodoni Moda', serif;
        background: var(--darkGray);
        overflow-x: hidden;
        color: var(--lightcolor);
        transition: all 0.5s;
        /* &.kabo{
          
            --darkGray : #f5f5f5;
            --lightcolor : #222; 
            --lightGray:#444;
        } */
        
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration:none ;
        color: inherit;
    }



`;
