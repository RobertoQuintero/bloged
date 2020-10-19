import Header from "../components/Sections/Header";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="ed-grid">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
