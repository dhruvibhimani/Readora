import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Needed for routing

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Integrate with backend later
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat px-4 sm:px-6"
      style={{ backgroundImage: "url('/backgroundimage1.jpg')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl px-6 py-8 sm:px-10 sm:py-10 rounded-xl w-full max-w-md text-gray-800"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          LOGIN
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 text-sm sm:text-base">Email</label>
          <input
            type="email"
            className="w-full p-2.5 sm:p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-sm sm:text-base">Password</label>
          <input
            type="password"
            className="w-full p-2.5 sm:p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base"
        >
          Login
        </button>

        {/* 👇 Add the signup link below */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Not a user?{' '}
          <Link to="/Signup" className="text-blue-600 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
