import styled from 'styled-components';

export const Container = styled.div`
    --gradient-violet-start: #b53cff;
    --gradient-violet-end: #f952ff;
    --gradient-green-start: #23bd38;
    --gradient-green-end: #41eba9;
    --gradient-red-start: #f857a6;
    --gradient-red-end: #ff5858;
    --gradient-orange-start: #e77842;
    --gradient-orange-end: #f7c068;
    --gradient-yellow-start: #ffb040;
    --gradient-yellow-end: #ffd62e;
    --gradient-blue-start: #327ae7;
    --gradient-blue-end: #6bd0ff;
`;


export const BoxPost = styled.div`
  display: flex;
  max-width: 1256px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;

  img {
    max-width: 45%;
    border-radius: 0.5em;
    background-size: 100% 100%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 50px;

    img {
      display: none;
    }
  }
`;


export const TextPost = styled.div`
  margin-top: 10%;

  h1 {
    font-size: 45px;
    color: var(--color-text);
    padding: 20px;
  }

  p {
    color: var(--color-text-subtitle);
    padding: 0 20px;
    font-size: 25px;
  }

  @media (max-width: 1000px) {
    margin-top: 1%;
  }
`;

export const TextArticle = styled.div`
  margin: 109px 200px;
  p {
    font-size: 37px;
    text-align: justify;
    line-height: 2;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  @media (max-width: 1000px) {
    margin: 10px 20px;

    p {
      font-size: 20px;
    }
  }
  
  pre {
    background: rgba(40, 41, 54, 1) !important;
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
    display: block;

    
    code[class*="code-"], pre[class*="code-"] {
        color: #ccc;
        background: rgb(40, 41, 54);
        text-shadow: none;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.8;
        font-size: 16px;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;


        .keyword {
          color: var(--gradient-violet-end);
        }

        .function {
          color: var(--gradient-green-end);

        }

        .operator {
          color: var(--gradient-blue-end);
        }

        .string {
          color: var(--gradient-orange-end);

        }

        .comment {
          color: rgba(98, 114, 164, 1);
        }
    }
  }
  
`;
