import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchBar from "../Components/SearchBar";
import { FaBook, FaBrain, FaSmile, FaLightbulb } from "react-icons/fa";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const books = [
    { src: "/bookimages/bookimage6.jpg", alt: "Book 1", title: "HERZORG" },
    { src: "/bookimages/bookimage7.jpg", alt: "Book 2", title: "THE PICTURE OF DORIAN GRAY" },
    { src: "/bookimages/bookimage 9.jpeg", alt: "Book 3", title: "THE DA VINCI CODE" },
    { src: "/bookimages/bookimage11.jpeg", alt: "Book 4", title: "THE IMMORTALS OF MELUHA" },
    { src: "/bookimages/bookimage8.jpeg", alt: "Book 5", title: "THE PSYCHOLOGY OF MONEY" },
    { src: "/bookimages/bookimage10.jpg", alt: "Book 6", title: "THE ALCHEMIST" },
  ];

  const handleSearch = (query) => {
    // your search logic here
  };

  const whyReadBooks = [
    {
      icon: <FaBook className="text-5xl mb-4 text-[#6b46c1]" />,
      title: "Expand Knowledge",
      desc: "Books open doors to new worlds, ideas, and perspectives.",
    },
    {
      icon: <FaBrain className="text-5xl mb-4 text-[#d53f8c]" />,
      title: "Boost Brain Power",
      desc: "Reading regularly improves focus, memory, and critical thinking.",
    },
    {
      icon: <FaSmile className="text-5xl mb-4 text-[#38a169]" />,
      title: "Reduce Stress",
      desc: "Immersing yourself in a story can calm your mind and relax you.",
    },
    {
      icon: <FaLightbulb className="text-5xl mb-4 text-[#ed8936]" />,
      title: "Spark Creativity",
      desc: "Books inspire innovation and creative problem solving.",
    },
  ];

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8 mt-7 max-w-4xl mx-auto px-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Suggestions Section */}
      <section
        className="bg-black rounded-2xl px-6 py-16 m-2"
        style={{ minHeight: "450px" }}
      >
        <h2 className="text-white text-2xl md:text-5xl font-serif mb-12 text-center">
          Some Book Suggestions
        </h2>

        <div
          className="flex space-x-10 overflow-x-auto px-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onScroll={(e) => {
            e.currentTarget.style.scrollbarWidth = "none";
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {books.map(({ src, alt, title }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex-shrink-0 bg-gray-900 rounded-xl shadow-lg p-8"
              style={{ width: "340px", scrollSnapAlign: "start" }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full object-cover rounded-lg"
                style={{ height: "280px" }}
              />
              <p
                className="text-white text-lg font-semibold mt-6 font-serif text-center truncate"
                title={title}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Read Books Section */}
      <section
        className="bg-white rounded-2xl px-6 py-12 m-2 mt-12"
        style={{ minHeight: "300px" }}
      >
        <h2 className="text-gray-900 text-2xl md:text-3xl font-serif mb-10 text-center">
          Why Read Books?
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {whyReadBooks.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="bg-[#f3e8dc] rounded-full p-4 mb-4 inline-flex items-center justify-center">
                <span>{icon}</span>
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mb-2 font-serif">
                {title}
              </h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Author Spotlight Section */}
      <section
        className="bg-[#f3e8dc] rounded-2xl px-6 py-16 m-2 mt-12"
        style={{ minHeight: "450px" }}
      >
        <h2 className="text-gray-900 text-3xl md:text-5xl font-serif mb-12 text-center">
          Featured Author Spotlight
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {/* Oscar Wilde */}
          <div
            data-aos="fade-up"
            className="bg-black bg-opacity-70 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            style={{ minHeight: "100%" }}
          >
            <img
              src="/authors/Oscar Wilde.jpeg"
              alt="Oscar Wilde"
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white text-2xl font-serif mb-2">Oscar Wilde</h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                Irish poet, playwright, and author known for his sharp wit and classic works.
              </p>
              <p className="text-[#bca391] font-semibold">Famous works:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>The Picture of Dorian Gray</li>
                <li>The Importance of Being Earnest</li>
                <li>De Profundis</li>
              </ul>
            </div>
          </div>

          {/* Paulo Coelho */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-black bg-opacity-70 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            style={{ minHeight: "100%" }}
          >
            <img
              src="/authors/paulo.jpeg"
              alt="Paulo Coelho"
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white text-2xl font-serif mb-2">Paulo Coelho</h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                Brazilian lyricist and novelist best known for inspiring spiritual literature.
              </p>
              <p className="text-[#bca391] font-semibold">Famous works:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>The Alchemist</li>
                <li>Brida</li>
                <li>Eleven Minutes</li>
              </ul>
            </div>
          </div>

          {/* Jane Austen */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-black bg-opacity-70 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            style={{ minHeight: "100%" }}
          >
            <img
              src="/authors/jane asuten.jpeg"
              alt="Jane Austen"
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white text-2xl font-serif mb-2">Jane Austen</h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                Renowned English novelist famous for her romantic fiction and keen social commentary.
              </p>
              <p className="text-[#bca391] font-semibold">Famous works:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Pride and Prejudice</li>
                <li>Sense and Sensibility</li>
                <li>Emma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section
  className="bg-white px-8 py-20 mt-16 w-full font-serif"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-black text-4xl font-bold mb-6 border-l-8 border-black pl-6">
      About Readora
    </h2>
    <p className="text-black text-lg leading-relaxed mb-8">
      Readora is your personalized gateway to the world of books — helping you discover inspiring stories, expand your knowledge, and spark creativity.
    </p>
    <p className="text-black text-lg leading-relaxed mb-8">
      We bring curated book suggestions, insightful author spotlights, and compelling reasons to read, all designed to ignite your passion for reading and lifelong learning.
    </p>
    <p className="text-black text-lg leading-relaxed">
      Whether you're a casual reader or an avid bookworm, Readora aims to make your reading journey enjoyable, enriching, and uniquely yours.
    </p>
  </div>
</section>


{/* Suggestions Section */}
<section
  className="bg-gray-100 px-8 py-16 mt-10 w-full font-serif"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-black text-3xl md:text-4xl mb-2 font-serif text-center">
      Your Suggestions are Valuable !!
    </h2>
    <h3 className="text-gray-800 text-1xl md:text-2xl mb-5 font-serif text-center">Suggest some book names or blogs other people can see</h3>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const suggestion = formData.get("suggestion");
        if (suggestion.trim() === "") {
          alert("Please enter a suggestion.");
          return;
        }
        alert("Thanks for your suggestion!");
        e.target.reset();
      }}
      className="max-w-4xl mx-auto"
    >
      <textarea
        name="suggestion"
        rows={5}
        placeholder="Type your suggestion here..."
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none text-black text-lg md:text-xl"
        required
      />
      <button
        type="submit"
        className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  </div>
</section>
     





    </div>
  );
};

export default HomePage;





