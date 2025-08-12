import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch book details");
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg">Loading book details...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-lg text-red-600">
        Error: {error}
      </div>
    );
  }

  if (!book || !book.volumeInfo) {
    return (
      <div className="text-center py-20 text-lg">Book not found.</div>
    );
  }

  const info = book.volumeInfo;
  const image =
    info.imageLinks?.large ||
    info.imageLinks?.medium ||
    info.imageLinks?.thumbnail ||
    "";

  return (
    <div
      className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <Link
        to="/"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        ← Back to Search
      </Link>

      <h1 className="text-3xl font-bold mb-4">{info.title}</h1>

      {image && (
        <img
          src={image}
          alt={info.title}
          className="w-48 h-auto float-right ml-6 mb-4 rounded-md shadow-lg"
          loading="lazy"
        />
      )}

      {info.authors && (
        <p className="text-gray-700 mb-2">
          <strong>Author(s):</strong> {info.authors.join(", ")}
        </p>
      )}

      {info.categories && (
        <p className="text-gray-700 mb-2">
          <strong>Genre:</strong> {info.categories.join(", ")}
        </p>
      )}

      {info.publishedDate && (
        <p className="text-gray-700 mb-2">
          <strong>Published:</strong> {info.publishedDate}
        </p>
      )}

      {info.publisher && (
        <p className="text-gray-700 mb-4">
          <strong>Publisher:</strong> {info.publisher}
        </p>
      )}

      {info.description ? (
        <div
          className="prose max-w-none clear-right"
          dangerouslySetInnerHTML={{ __html: info.description }}
        />
      ) : (
        <p className="text-gray-600 italic">No description available.</p>
      )}
    </div>
  );
};

export default BookDetail;

