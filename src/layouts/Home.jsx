import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, Code, Award, ArrowRight, Mail } from "lucide-react";
import {FaInstagram, FaWhatsapp, FaGithub, FaLinkedin} from "react-icons/fa";

// Mock images - replace with your actual imports
const mockImages = {
  git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  ml: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png",
  gif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
};

// Mock tutorials data
// const mockTutorials = [
//   { title: "Python", description: "Learn Python programming", link: "/python" },
//   { title: "JavaScript", description: "Master JavaScript", link: "/javascript" },
//   { title: "React", description: "Build with React", link: "/react" },
// ];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const tutorials = [
    {
      id: 1,
      title: "Python",
      description: "Learn Python programming language from basics to advanced concepts.",
      image: mockImages.python,
      exerciseLink: "/python",
      referenceLink: "/pythonreference",
      color: "from-blue-500 to-blue-800"
    },
    {
      id: 2,
      title: "Python Machine Learning",
      description: "Build machine learning models using Python programming language.",
      image: mockImages.ml,
      exerciseLink: "/python-ml",
      referenceLink: "/machine-learning-reference",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Learn JavaScript programming and build dynamic web applications.",
      image: mockImages.js,
      exerciseLink: "/javascript",
      referenceLink: "/javascript-reference",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 4,
      title: "Python Data Visualization",
      description: "Visualize data using Python. A great way to learn data science.",
      image: mockImages.python,
      exerciseLink: "/python-visualization",
      referenceLink: "/py-visual-reference",
      color: "from-teal-400 to-teal-600"
    },
    {
      id: 5,
      title: "SQL Database Language",
      description: "Learn SQL programming and database management fundamentals.",
      image: mockImages.sql,
      exerciseLink: "/sql",
      referenceLink: "/sql-reference",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: 6,
      title: "Kali Linux",
      description: "Master Kali Linux and perform penetration testing.",
      image: "https://www.kali.org/images/kali-logo.svg",
      exerciseLink: "/kali-linux",
      referenceLink: "/kali-linux-reference",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 7,
      title: "Cryptography",
      description: "Learn encryption, decryption and the art of writing codes.",
      image: "https://cdn-icons-png.flaticon.com/512/6195/6195699.png",
      exerciseLink: "/cryptography",
      referenceLink: "/cryptography-reference",
      color: "from-red-500 to-red-600"
    },
    {
      id: 8,
      title: "HTML",
      description: "Create web pages using HTML - the building blocks of the web.",
      image: mockImages.html,
      exerciseLink: "/html",
      referenceLink: "/htmlreferences",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 9,
      title: "CSS",
      description: "Style beautiful web pages using CSS styling language.",
      image: mockImages.css,
      exerciseLink: "/css",
      referenceLink: "/cssreference",
      color: "from-blue-400 to-blue-500"
    },
    {
      id: 10,
      title: "React",
      description: "Build modern web applications with React JavaScript library.",
      image: mockImages.react,
      exerciseLink: "/react",
      referenceLink: "/reactreference",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 11,
      title: "Git",
      description: "Master Git and GitHub version control system.",
      image: mockImages.git,
      exerciseLink: "/git",
      referenceLink: "/gitreference",
      color: "from-orange-500 to-orange-800"
    }
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const results = tutorials.filter((tutorial) =>
        tutorial.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const stats = [
    { icon: BookOpen, value: "11+", label: "Programming Languages" },
    { icon: Code, value: "500+", label: "Coding Exercises" },
    { icon: Award, value: "100%", label: "Free Forever" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to CodeHub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a skill today and be a better you tomorrow. Start your journey to master programming languages, web development, data science, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={result.exerciseLink}
                    className="block p-4 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0 no-underline"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   console.log(`Navigate to: ${result.learnLink}`);
                    // }}
                  >
                    <div className="flex items-center space-x-4">
                      <img src={result.image} alt={result.title} className="w-12 h-12 object-contain" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{result.title}</h3>
                        <p className="text-gray-600 text-sm">{result.description}</p>
                      </div>
                      <ArrowRight className="text-blue-600" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                    <Icon size={32} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Tutorials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Popular Tutorials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className={`h-48 bg-gradient-to-br ${tutorial.color} flex items-center justify-center p-8`}>
                <img
                  src={tutorial.image}
                  alt={`${tutorial.title} logo`}
                  className="w-32 h-32 object-contain filter drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tutorial.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={tutorial.exerciseLink}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg text-center no-underline"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   console.log(`Navigate to: ${tutorial.learnLink}`);
                    // }}
                  >
                    Learn
                  </Link>
                  <Link
                    to={tutorial.referenceLink}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all text-center no-underline"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   console.log(`Navigate to: ${tutorial.referenceLink}`);
                    // }}
                  >
                    Reference
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational GIF Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Learn How to Code for Free
              </h2>
              <div className="space-y-4 mb-8">
                <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  `The best way to learn to code is to code.`
                </blockquote>
                <blockquote className="text-xl italic text-gray-700 border-l-4 border-purple-600 pl-4">
                  From great responsibilities comes great opportunities.
                </blockquote>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-700 mb-2">
                    Have questions? We are here to help!
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=codehubgh25@example.com&body"
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  >
                    codehubgh25@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mockImages.gif}
                  alt="Coding animation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CodeHub</h3>
            <p className="text-gray-400 mb-4">
              Empowering developers worldwide with free, quality education.
            </p>
            <a href="/about" className="hover:text-white text-gray-400 text-sm transition-colors">About Us</a>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              {/* <a href="/about" className="hover:text-white transition-colors">About</a> */}
            
               <p className="flex justify-center space-x-6 text-3xl mb-4 mt-6">
                {/* <FaLinkedin /> <FaGithub /> <FaWhatsapp /> <FaInstagram /> */}
                <Link to="https://github.com/akuafrema">
                <FaGithub />
                </Link>

                <Link to="https://www.instagram.com/xx.frema?igsh=em5zM2hzbm92djg4">
                <FaInstagram />
                </Link>

                <Link to="https://wa.me/233532970591">
                <FaWhatsapp />
                </Link>

                <Link to="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=akua-frema-492853373">
                <FaLinkedin />
                </Link>
                
               </p>
            </div>
            <p className="mt-8 text-gray-500 text-sm">
              © 2025 CodeHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;