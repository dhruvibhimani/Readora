

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Quotes from "./Pages/quotes";
import "./index.css"; // Tailwind CSS
import Authors from "./Pages/authors";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Bookimage from "./Components/bookimage";
import Books from "./Pages/Books";
import Homepage from "./Pages/Homepage";
import BlogsPage from "./Pages/BlogsPage";
import BlogDetail from "./Pages/BlogDetail";
import SearchBar from "./Components/SearchBar"; 
import BookDetail from "./Pages/BookDetail"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-zinc-50 text-gray-800">
        <Bookimage />
        <h1 className="text-1xl md:text-3xl lg:text-4xl font-bold text-center mt-2 mb-3 text-gray-800 px-4">
          Readora
        </h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/SearchBar" element={<SearchBar />} /> {/* NEW search bar route */}
          <Route path="/BookDetail/:id" element={<BookDetail />} /> {/* NEW book detail route */}
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
