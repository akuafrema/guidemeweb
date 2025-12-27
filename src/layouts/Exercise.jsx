import { useState } from "react";
import {
  Search,
  ChevronRight,
  Code,
  Database,
  Shield,
  Palette,
  GitBranch,
} from "lucide-react";
// import { Link } from "react-router-dom";
import {  Link } from "react-router-dom";
// import s from "./Tutorials"



function Exercise() {
  const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

  // Mock tutorials data - replace with your actual import
//   const tutorials = [
//     { title: "Python Exercises", link: "/exercises/python" },
//     {
//       title: "Python Machine Learning Exercises",
//       link: "/exercises/python-ml",
//     },
//     { title: "JavaScript Exercises", link: "/exercises/javascript" },
//     {
//       title: "Python Data Visualization Exercises",
//       link: "/exercises/python-viz",
//     },
//     { title: "SQL Exercises", link: "/exercises/sql" },
//     { title: "Kali Linux Exercises", link: "/exercises/kali-linux" },
//     { title: "Cryptography Exercises", link: "/exercises/cryptography" },
//     { title: "HTML Exercises", link: "/exercises/html" },
//     { title: "CSS Exercises", link: "/exercises/css" },
//     { title: "React Exercises", link: "/exercises/react" },
//     { title: "Git Exercises", link: "/exercises/git" },
//   ];

//   function getExerciseLink(title) {
//     const match = s.find(
//       (item) =>
//         item.title.toLowerCase().includes(title.toLowerCase()) &&
//         item.title.toLowerCase().includes("exercises")
//     );
//     return match ? match.link : "#";
//   }

  const exercises = [
    {
      id: 1,
      title: "Python",
      description: "Master Python fundamentals with hands-on exercises",
      color: "from-blue-400 to-blue-600",
      icon: Code,
      level: "Beginner to Advanced",
      link: "/python",
    },
    {
      id: 2,
      title: "Python Machine Learning",
      description: "Build ML models and explore data science concepts",
      color: "from-rose-400 to-rose-600",
      icon: Code,
      level: "Intermediate",
      link: "/python-ml",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Learn modern JavaScript and ES6+ features",
      color: "from-amber-400 to-amber-600",
      icon: Code,
      level: "Beginner to Advanced",
      link: "/javascript",
    },
    {
      id: 4,
      title: "Python Data Visualization",
      description: "Create stunning visualizations with Python libraries",
      color: "from-teal-400 to-teal-600",
      icon: Palette,
      level: "Intermediate",
      link: "/python-visualization",
    },
    {
      id: 5,
      title: "SQL Database Language",
      description: "Query and manage databases efficiently",
      color: "from-blue-400 to-blue-600",
      icon: Database,
      level: "Beginner to Intermediate",
      link: "/sql",
    },
    {
      id: 6,
      title: "Kali Linux",
      description: "Explore cybersecurity tools and techniques",
      color: "from-rose-400 to-rose-600",
      icon: Shield,
      level: "Advanced",
      link: "/kali-linux",
    },
    {
      id: 7,
      title: "Cryptography",
      description: "Understand encryption and security principles",
      color: "from-amber-400 to-amber-600",
      icon: Shield,
      level: "Intermediate to Advanced",
      link: "/cryptography",
    },
    {
      id: 8,
      title: "HTML",
      description: "Build web page structure and semantic markup",
      color: "from-teal-400 to-teal-600",
      icon: Code,
      level: "Beginner",
      link: "/html",
    },
    {
      id: 9,
      title: "CSS",
      description: "Style beautiful and responsive web interfaces",
      color: "from-blue-400 to-blue-600",
      icon: Palette,
      level: "Beginner to Intermediate",
      link: "/css",
    },
    {
      id: 10,
      title: "React",
      description: "Build interactive UIs with React components",
      color: "from-rose-400 to-rose-600",
      icon: Code,
      level: "Intermediate",
      link: "/react",
    },
    {
      id: 11,
      title: "Git",
      description: "Master version control and collaboration",
      color: "from-amber-400 to-amber-600",
      icon: GitBranch,
      level: "Beginner to Intermediate",
      link: "/git",
    },
  ];

  const filteredExercises = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Practice Exercises
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Sharpen your skills with hands-on coding challenges
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
                aria-label="Search exercises"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredExercises.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => {
              const Icon = exercise.icon;
              return (
                <Link
                  key={exercise.id}
                  to={exercise.link}
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 no-underline"
                //   onClick={() => navigate(exercise.link)}
                    
                    // In production, use: navigate(exercise.link) or window.location.href = exercise.link
                
                >
                  {/* Gradient Header */}
                  <div
                    className={`h-32 bg-gradient-to-br ${exercise.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Icon className="text-white" size={48} strokeWidth={1.5} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {exercise.title}
                      </h2>
                      <ChevronRight
                        className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                        size={24}
                      />
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exercise.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {exercise.level}
                      </span>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Start →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No exercises found
            </h3>
            <p className="text-gray-500">Try adjusting your search query</p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">11</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Practice Exercises</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-gray-600">Learning Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
