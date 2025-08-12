import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const debounceTimeout = useRef(null);

  const fetchSuggestions = (searchTerm) => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchTerm
      )}&maxResults=5`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setSuggestions(
            data.items.map((item) => ({
              id: item.id,
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors?.join(", "),
            }))
          );
        } else {
          setSuggestions([]);
        }
      })
      .catch(() => setSuggestions([]));
  };

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(debounceTimeout.current);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
  };

  return (
    <>
      {/* Full width background container */}
      <div className="bg-[#f3e8dc] w-full py-16 px-4" style={{
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
  }}>
        {/* Centered content container */}
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-start relative">
          <h1 className="text-4xl font-semibold text-center mb-2 text-[#4b3f35]">
            Discover the Book you'll love!
          </h1>
          <p className="text-md mb-8 text-center text-[#6d5c50]">
            Search by title, author, or genre
          </p>
          <form
            onSubmit={handleSearch}
            className="flex w-full bg-white shadow-md"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Type the book you want"
              className="flex-grow px-6 py-4 outline-none text-gray-800 text-lg border border-r-0 border-gray-300"
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-[#bca391] text-white px-6 py-4 text-lg font-medium hover:bg-[#a58d7b] transition-all border border-gray-300"
            >
              Search →
            </button>
          </form>

          {/* Autocomplete Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-md max-h-60 overflow-y-auto z-30 max-w-2xl mx-auto">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="cursor-pointer px-6 py-3 hover:bg-gray-100 border-b border-gray-200"
                >
                  <strong>{suggestion.title}</strong>
                  {suggestion.authors && (
                    <span className="text-gray-500 ml-2">
                      by {suggestion.authors}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
