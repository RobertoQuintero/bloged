import { NextSeo } from "next-seo";
import fetch from "node-fetch";
import Post from "../components/Blog/Post";

const Home = ({ posts }) => {
  return (
    <div>
      <NextSeo
        title="Bienvenido a Edblog"
        description="Edblog es una creación del curso de Next en Edteam"
        openGraph={{
          url: "https//ed.team",
          title: "Bienvenido a EdBlog",
          description: "Edblog es una creación del curso de Next en Edteam",
          images: [
            {
              url: "https://ux.ed.team/img/edteam-ux.svg",
              width: 1280,
              height: 720,
              alt: "Foto de perfil de EDteam",
            },
          ],
          site_name: "EDblog",
        }}
        twitter={{
          handle: "@edteamlat",
          site: "@edteamlat",
          cardType: "summary_large_image",
        }}
      />
      <main>
        <h1>EDblog</h1>
        <div className="ed-grid m-grid-3 row-gap">
          {posts.map((p) => (
            <Post post={p} key={p.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const resp = await fetch(`${process.env.API_BLOG}/posts`);
  const posts = await resp.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
