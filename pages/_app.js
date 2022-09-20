import "../styles/globals.css";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Repo Uber</title>
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
