import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  *, button, input {
      font-family: Roboto, sans-serif;
  }
  

  :root {
    --color-background: #EEEEEE;
    --color-text: #161B3D;
    --color-text-white: #FFFFFF;
    --color-text-subtitle: #999999;
    --color-post-none-img: #617CBE;
  }

  
  pre::-webkit-scrollbar {
    width: 14px;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #bd93f9;
    border-radius: 0px;
  }

  pre::-webkit-scrollbar-track {
    background-color: #6272a4;
    border-radius: 0px;
  }

  

  body::-webkit-scrollbar {
    width: 14px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #617CBE;
    border-radius: 0.2em;
  }

  body::-webkit-scrollbar-track {
    background-color: #EEEEEE;
    border-radius: 0px;
  }



`;