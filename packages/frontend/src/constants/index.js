import * as React from "react";

const server = {
  baseUrl: "https://ludo.reezweb.com/",
  prod: "https://ludo.reezweb.com/",
  // baseUrl: 'http://localhost:1337/',
  // prod: 'http://localhost:1337/'
};

class Api extends React.Component {
  getCurrentHost = () => {
    if (process.env.REACT_APP_URL === "prod") {
      return server.prod;
    } else {
      return server.baseUrl;
    }
  };
}

export default Api;
