const { default: Link } = require("next/link");

const Post = ({ post }) => {
  return (
    <article className="s-pxy-4 s-radius-1 s-shadow-bottom course-card background s-shadow-card-micro s-transition white-color nowrap s-column s-mb-0 undefined">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <span>{`Ecrito por el usuario ${post.userId}`}</span>
      <Link href={`blog/${post.id}`}>
        <a>Leer más</a>
      </Link>
    </article>
  );
};
export default Post;
