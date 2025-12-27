import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/exercise", label: "Exercise" },
    { path: "/reference", label: "Reference" },
    { path: "/projects", label: "Projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-xl sm:text-2xl lg:text-3xl no-underline transition-colors flex-shrink-0"
            >
              {/* <img 
              src="src/assets/images/guidemelearnlogo.webp"
              alt="Guide Me Learn Logo"
              className="w-10 h-10 object-contain"
              /> */}
              <span className="text-blue-900">Code</span><span className="text-amber-600">Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium text-base transition-all duration-200 no-underline ${
                    location.pathname === link.path
                      ? "bg-blue-100 text-blue-900"
                      : "text-blue-900 hover:bg-blue-50 hover:text-blue-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Search */}
            {/* <div className="hidden lg:block flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div> */}

            {/* Mobile Icons */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Search size={22} />
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {/* {searchOpen && (
            <div className="lg:hidden pb-4 animate-fadeIn">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          )} */}
        </div>
      </nav>

      {/* SPACE BELOW NAVBAR */}
      <div className="h-16 md:h-20" />

      {/* ⭐ YOUR WELCOME SECTION (kept exactly the same) ⭐ */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Welcome to Guide Me Learn
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your comprehensive learning platform with exercises, references, and projects.
          </p>
        </div>
      </div> */}

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
