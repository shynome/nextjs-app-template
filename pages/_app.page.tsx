import "../styles/globals.css";
import Head from "next/head";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>爱博漫画</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
