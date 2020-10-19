import { useEffect, useState } from "react";

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number) {
      fetch(`${process.env.API_BLOG}/posts/${id}/comments`)
        .then((resp) => resp.json())
        .then((comments) => {
          setComments(comments);
        });
    }
  }, [number]);

  if (!comments) {
    return (
      <div>
        <a onClick={() => setNumber((prev) => prev + 1)}>Cargar comentarios</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Comentarios</h2>
      {comments.map((c) => (
        <div key={c.id}>
          <h3>{c.email}</h3>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
