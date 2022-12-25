import React from "react";
import Navigation from "./navigation.js";
import Head from "next/head.js";

const Container = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <title>next.js proyect</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
