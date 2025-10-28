import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
