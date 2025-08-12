import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const genres = [
  'fiction',
  'romance',
  'self-help',
  'poetry',
  'drama',
  'science fiction',
  'mystery',
  'thriller'
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 }
  })
};

const BooksGenre = () => {
  const [booksByGenre, setBooksByGenre] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    genres.forEach((genre) => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=40`)
        .then((response) => {
          setBooksByGenre((prev) => ({
            ...prev,
            [genre]: response.data.items || []
          }));
        })
        .catch((error) => {
          console.error(`Error fetching ${genre} books:`, error);
        });
    });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10">
        {genres.map((genre, index) => (
          <motion.div
            key={genre}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index}
            className="mb-16"
          >
            <div className="bg-[#f3e8dc]  text-black-400 px-6 py-8 md:px-10 md:py-12 rounded-xl shadow-xl w-full max-w-screen-2xl mx-auto">
              <h2 className="text-3xl font-bold capitalize mb-6 border-b border-black pb-2">
                {genre} Books
              </h2>
              <div className="flex overflow-x-auto gap-6 scrollbar-hide pb-4">
                {(booksByGenre[genre] || []).map((book, i) => {
                  const info = book.volumeInfo;
                  return (
                    <motion.div   
                      key={book.id}
                      onClick={() => setSelectedBook(info)}
                      whileHover={{ scale: 1.07 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02, duration: 0.4 }}
                      className="min-w-[160px] md:min-w-[200px] bg-white text-gray-900 shadow-lg rounded-xl overflow-hidden flex-shrink-0 cursor-pointer hover:shadow-xl transition-all"
                    >
                      <img
                        src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x195?text=No+Cover'}
                        alt={info.title}
                        className="w-full h-56 md:h-64 object-contain bg-gray-50"
                      />
                      <div className="p-3">
                        <h3 className="text-sm font-semibold truncate">{info.title}</h3>
                        <p className="text-xs text-gray-600">{info.authors?.[0]}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Book Detail */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-md w-full p-5 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold"
                onClick={() => setSelectedBook(null)}
              >
                &times;
              </button>
              <img
                src={selectedBook.imageLinks?.thumbnail || 'https://via.placeholder.com/128x195?text=No+Cover'}
                alt={selectedBook.title}
                className="w-36 h-auto mx-auto mb-4 rounded shadow"
              />
              <h2 className="text-xl font-bold mb-1">{selectedBook.title}</h2>
              <p className="text-sm text-gray-700 mb-2 italic">{selectedBook.authors?.join(', ')}</p>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {selectedBook.description
                  ? selectedBook.description.slice(0, 600) + '...'
                  : 'No description available.'}
              </p>
              {selectedBook.previewLink && (
                <a
                  href={selectedBook.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
                >
                  🔗 Preview on Google Books
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BooksGenre;
