"use client";

import { useState, useEffect } from "react";

export default function FetchExample() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        const data = await response.json();
        setPosts(data.slice(0, 5)); // Obtener solo los primeros 5 posts
      } catch (err) {
        setError("Error al cargar los posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts (Fetch)</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="mb-2 list-group-item">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

