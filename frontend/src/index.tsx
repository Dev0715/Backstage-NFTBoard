import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import {
  moralisAppId_testnet,
  moralisServerUrl_testnet,
  moralisAppId_mainnet,
  moralisServerUrl_mainnet,
} from "./utils/moralis_app";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId={moralisAppId_mainnet}
      serverUrl={moralisServerUrl_mainnet}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
