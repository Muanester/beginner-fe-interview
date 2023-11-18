import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout/Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Layout>
    <App />
  </Layout>
);

reportWebVitals();
