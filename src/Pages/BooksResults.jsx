// components/BookResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => res.json())
        .then(data => setResults(data.items || []));
    }
  }, [query]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(book => {
          const volume = book.volumeInfo;
          return (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow">
              <img
                src={volume.imageLinks?.thumbnail}
                alt={volume.title}
                className="mb-3 w-full h-60 object-contain"
              />
              <h3 className="text-lg font-bold">{volume.title}</h3>
              <p className="text-sm text-gray-600">
                {volume.authors?.join(', ')}
              </p>
              <p className="text-sm mt-2 line-clamp-3">{volume.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookResults;
