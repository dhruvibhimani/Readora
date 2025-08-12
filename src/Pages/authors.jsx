// src/pages/Authors.jsx
const Authors = [
  {
    name: "J.K. Rowling",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg",
    bio: "Author of the Harry Potter series. Her books have sold over 500 million copies worldwide."
  },
  {
    name: "George R.R. Martin",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/George_R._R._Martin_by_Gage_Skidmore_2.jpg",
    bio: "Best known for 'A Song of Ice and Fire', the basis for the Game of Thrones series."
  },
  {
    name: "Jane Austen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/CassandraAusten-JaneAusten(c.1810)_hires.jpg/640px-CassandraAusten-JaneAusten(c.1810)_hires.jpg",
    bio: "An iconic 19th-century author known for 'Pride and Prejudice' and strong female characters."
  }
];

const authors = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet the Authors</h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {authors.map((author, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4 text-center"
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">{author.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default authors;
