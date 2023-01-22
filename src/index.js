import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain="dev-0jaefimwdv3ffb4g.us.auth0.com"
  //   clientId="oKzui0mRw9Y0sctHHn3VcYe4P2HZGZux"
  //   redirectUri={window.location.origin}
  // >
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
