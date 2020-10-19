import Head from "next/head";
import Header from "../components/Sections/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>EDblog</h1>
        <span>{process.env.API_BLOG}</span>
      </main>
    </div>
  );
};

export default Home;
