import React, { useEffect, useState } from "react";

const bookimage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Bookify heading appears after scroll */}
      <div
        className={`fixed top-0 left-0 w-full text-center py-4 bg-white z-50 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-950">"Books, Quotes, Blogs – All for the Curious Mind"</h1>
      </div>

      
      <div
  className={`w-full h-[250px] relative transition-opacity duration-700 ${
    scrolled ? "opacity-0" : "opacity-100"
  }`}
>
  <img
    src="/bookimage3.jpg"
    alt="books"
    className="w-full h-full object-cover absolute inset-0"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <h2 className="text-2xl md:text-4xl font-bold text-white text-center px-4 z-10">
      "A reader lives a thousand lives before he dies."
    </h2>
  </div>

</div>
      
    </>
  );
};

export default bookimage;