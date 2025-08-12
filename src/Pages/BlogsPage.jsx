import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("https://689a09dcfed141b96ba1abbf.mockapi.io/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  // Manual image mapping: blog.id or index -> image URL
  const getImageForBlog = (id) => {
    switch (id) {
      case "1":
        return "/images/blogimage1.jpeg"; 
      case "2":
        return "/images/blogimage2.jpeg";
      case "3":
        return "/images/blogimage4.jpeg";
      case "4":
        return "/images/blogimage5.jpeg";
      case "5":
        return "/images/blog5.jpg";
      case "6":
        return "/images/blog6.jpg";
      case "7":
        return "/images/blog7.jpg";
      case "8":
        return "/images/blog8.jpg";
      case "9":
        return "/images/blog9.jpg";
      case "10":
        return "/images/blog10.jpg";
      case "11":
        return "/images/blog11.jpg";
      case "12":
        return "/images/blog12.jpg";
      default:
        return "/images/default.jpg"; // fallback image
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading blogs...</div>;
  }

  return (
    <div className="px-4 md:px-12 py-12 bg-[#f5e8dc] min-h-screen space-y-16">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } bg-white shadow-lg rounded-xl overflow-hidden`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          {/* Blog Image - manual based on blog id */}
          <img
            src={getImageForBlog(blog.id)}
            alt={blog.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />

          {/* Blog Info */}
          <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
            <div>
              <span className="text-xs uppercase text-gray-500">
                {blog.category} • {blog.date}
              </span>
              <h3 className="text-2xl font-bold text-[#3b2f25] mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-3">{blog.excerpt}</p>
            </div>
            <Link
              to={`/blogs/${blog.id}`}
              className="mt-4 inline-block text-[#3b2f25] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;





