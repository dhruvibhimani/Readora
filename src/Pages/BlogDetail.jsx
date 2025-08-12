import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading book details...</div>;
  }

  if (!book || !book.volumeInfo) {
    return <div className="text-center py-20 text-lg">Book not found.</div>;
  }

  const { volumeInfo } = book;
  const thumbnail =
    volumeInfo.imageLinks?.large ||
    volumeInfo.imageLinks?.thumbnail ||
    volumeInfo.imageLinks?.smallThumbnail ||
    "https://via.placeholder.com/300x400?text=No+Image";

  return (
    <div className="min-h-screen bg-white px-4 py-10 max-w-4xl mx-auto">
      <Link
        to="/search"
        className="mb-6 inline-block text-indigo-600 font-semibold hover:underline"
      >
        ← Back to Search
      </Link>

      <div
        className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 rounded-lg shadow-lg p-6"
        data-aos="fade-up"
      >
        {/* Book Image */}
        <img
          src={thumbnail}
          alt={volumeInfo.title}
          className="w-48 h-auto rounded-md shadow-md mb-6 md:mb-0 md:mr-8 object-cover"
        />

        {/* Book Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{volumeInfo.title}</h1>
          {volumeInfo.authors && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Author{volumeInfo.authors.length > 1 ? "s" : ""}:</span>{" "}
              {volumeInfo.authors.join(", ")}
            </p>
          )}
          {volumeInfo.categories && (
            <div className="mb-4">
              <span className="font-semibold text-gray-800">Genre:</span>
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md ml-2">
                {volumeInfo.categories.join(", ")}
              </div>
            </div>
          )}
          {volumeInfo.description && (
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p>{volumeInfo.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;





