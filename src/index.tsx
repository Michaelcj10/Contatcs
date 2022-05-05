/** @jsx createElement */
import { createElement } from "react";
import * as ReactDOM from "react-dom";
import App from "./app/main";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import regular from "./assets/fonts/Roboto-Regular.ttf";
import bold from "./assets/fonts/Roboto-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: 'Roboto-Regular';
      src: url(${regular}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: auto;
    }

    @font-face {
        font-family: 'Roboto-Bold';
        src: url(${bold}) format('truetype');
        font-style: normal;
        font-display: auto;
    }

    body{
      margin: auto;
      font-family: Roboto-Regular;
      padding: 32px;
    }

    h1,h2,h3,h4,h5{
      font-family: Roboto-Bold;
    }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
