import { useState } from "react";
import {
  Search,
  Code,
  Rocket,
  Star,
  Clock,
  Users,
  ChevronRight,
  Filter,
  Zap,
  Target,
  Trophy,
} from "lucide-react";
// import {Link} from "react-router-dom"
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Build a Weather App",
      description:
        "Create a real-time weather application using APIs to fetch and display weather data.",
      difficulty: "beginner",
      category: "web",
      duration: "2-3 hours",
      skills: ["JavaScript", "HTML", "CSS", "API Integration"],
      color: "from-blue-500 to-blue-600",
      icon: Code,
      learnings: ["API calls", "DOM manipulation", "Async/Await"],
      link: "https://github.com/akuafrema/weatherApp",
    },
    {
      id: 2,
      title: "Todo List Application",
      description:
        "Build a full-featured todo list with CRUD operations and local storage.",
      difficulty: "beginner",
      category: "web",
      duration: "3-4 hours",
      skills: ["React", "JavaScript", "CSS"],
      color: "from-green-500 to-green-600",
      icon: Code,
      learnings: ["State management", "Event handling", "Local storage"],
      link: "https://github.com/akuafrema/To-List-Calculator",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Design and develop a professional portfolio website to showcase your projects.",
      difficulty: "beginner",
      category: "web",
      duration: "4-6 hours",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-purple-500 to-purple-600",
      icon: Code,
      learnings: ["Responsive design", "CSS Grid", "Flexbox"],
      link: "https://github.com/shu-vro/COMPLETE-PORTFOLIO-WEBSITE",
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description:
        "Create interactive charts and graphs to visualize complex datasets.",
      difficulty: "intermediate",
      category: "data-science",
      duration: "5-7 hours",
      skills: ["Python", "Matplotlib", "Pandas", "Seaborn"],
      color: "from-teal-500 to-teal-600",
      icon: Code,
      learnings: ["Data analysis", "Chart creation", "Data cleaning"],
      link: "https://github.com/sameehkhan/boards",
    },
    {
      id: 5,
      title: "E-commerce Product Page",
      description:
        "Build a dynamic product page with shopping cart functionality.",
      difficulty: "intermediate",
      category: "web",
      duration: "6-8 hours",
      skills: ["React", "JavaScript", "CSS", "State Management"],
      color: "from-orange-500 to-orange-600",
      icon: Code,
      learnings: ["Complex state", "Cart logic", "UI/UX design"],
      link: "https://github.com/akuafrema/Bookstore",
    },
    {
      id: 6,
      title: "Machine Learning Classifier",
      description:
        "Train a classification model to predict outcomes from real-world data.",
      difficulty: "intermediate",
      category: "data-science",
      duration: "8-10 hours",
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      color: "from-pink-500 to-pink-600",
      icon: Code,
      learnings: ["ML algorithms", "Model training", "Data preprocessing"],
      link: "https://github.com/mondejar/ecg-classification",
    },
    {
      id: 7,
      title: "RESTful API Backend",
      description:
        "Create a robust REST API with authentication and database integration.",
      difficulty: "advanced",
      category: "backend",
      duration: "10-12 hours",
      skills: ["Node.js", "Express", "MongoDB", "Authentication"],
      color: "from-indigo-500 to-indigo-600",
      icon: Code,
      learnings: ["API design", "Database operations", "Security"],
      link: "https://github.com/libeyondea/backend-node-express",
    },
    {
      id: 8,
      title: "Real-time Chat Application",
      description:
        "Build a live chat app with websockets and real-time messaging.",
      difficulty: "advanced",
      category: "web",
      duration: "12-15 hours",
      skills: ["React", "Node.js", "WebSockets", "MongoDB"],
      color: "from-cyan-500 to-cyan-600",
      icon: Code,
      learnings: ["WebSockets", "Real-time data", "Full-stack development"],
      link: "https://github.com/adrianhajdin/project_chat_application",
    },
    {
      id: 9,
      title: "Password Manager",
      description:
        "Create a secure password manager with encryption and master password.",
      difficulty: "advanced",
      category: "security",
      duration: "10-14 hours",
      skills: ["Python", "Cryptography", "SQLite", "Encryption"],
      color: "from-red-500 to-red-600",
      icon: Code,
      learnings: ["Encryption", "Security best practices", "Database design"],
      link: "https://github.com/Kartik11082/Password-Manager",
    },
    {
      id: 10,
      title: "Game Development: Snake",
      description:
        "Build the classic Snake game with collision detection and scoring.",
      difficulty: "beginner",
      category: "game",
      duration: "4-5 hours",
      skills: ["JavaScript", "HTML Canvas", "Game Logic"],
      color: "from-yellow-500 to-yellow-600",
      icon: Code,
      learnings: ["Canvas API", "Game loops", "Collision detection"],
      link: "https://github.com/akuafrema/Game-Development--Snake",
    },
    {
      id: 11,
      title: "Automated Web Scraper",
      description:
        "Build a web scraper to collect and analyze data from websites.",
      difficulty: "intermediate",
      category: "automation",
      duration: "6-8 hours",
      skills: ["Python", "BeautifulSoup", "Requests", "Pandas"],
      color: "from-lime-500 to-lime-600",
      icon: Code,
      learnings: ["Web scraping", "Data extraction", "Automation"],
      link: "https://github.com/ibenlems/JobNotifier",
    },
    {
      id: 12,
      title: "Blockchain Basics",
      description:
        "Implement a simple blockchain from scratch to understand the fundamentals.",
      difficulty: "advanced",
      category: "blockchain",
      duration: "15-20 hours",
      skills: ["Python", "Cryptography", "Data Structures"],
      color: "from-violet-500 to-violet-600",
      icon: Code,
      learnings: ["Blockchain concepts", "Hashing", "Distributed systems"],
      link: "https://github.com/Usama-Tariq/Basics-Of-Blockchain-Python",
    },
  ];

  const difficulties = [
    { id: "all", label: "All Levels", color: "gray" },
    { id: "beginner", label: "Beginner", color: "green" },
    { id: "intermediate", label: "Intermediate", color: "yellow" },
    { id: "advanced", label: "Advanced", color: "red" },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "data-science", label: "Data Science" },
    { id: "backend", label: "Backend" },
    { id: "security", label: "Security" },
    { id: "game", label: "Game Dev" },
    { id: "automation", label: "Automation" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesDifficulty =
      selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-700";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Rocket size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hands-On Projects
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Learn by building real-world projects. Challenge yourself and
              create something amazing!
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-2xl"
              />
              <Search
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">12+</div>
              <div className="text-pink-100 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-pink-100 text-sm">Difficulty Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">∞</div>
              <div className="text-pink-100 text-sm">Skills to Learn</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Difficulty Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={20} className="text-gray-600" />
              <h3 className="font-semibold text-gray-900">Difficulty Level</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDifficulty === difficulty.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {difficulty.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Filter size={20} className="text-gray-600" />
              <h3 className="font-semibold text-gray-900">Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 no-underline"
                >
                  {/* Gradient Header */}
                  <div
                    className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Icon className="text-white" size={48} strokeWidth={1.5} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h2>
                      <ChevronRight
                        className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                        size={24}
                      />
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          project.difficulty
                        )}`}
                      >
                        {project.difficulty.charAt(0).toUpperCase() +
                          project.difficulty.slice(1)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={14} />
                        {project.duration}
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-500 mb-2">
                        Skills you`ll use:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                            +{project.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* What you'll learn */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-xs font-semibold text-gray-500 mb-2">
                        What you`ll learn:
                      </div>
                      <ul className="space-y-1">
                        {project.learnings
                          .slice(0, 2)
                          .map((learning, index) => (
                            <li
                              key={index}
                              className="text-xs text-gray-600 flex items-start"
                            >
                              <span className="text-purple-600 mr-2">•</span>
                              {learning}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between text-purple-600 font-medium group-hover:underline">
                      <span>Start Building</span>
                      <Target size={18} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDifficulty("all");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* Why Build Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Build Projects?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Learn by Doing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build real applications and solidify your understanding through
                hands-on practice.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 text-white rounded-2xl mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build Your Portfolio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create impressive projects to showcase to potential employers
                and clients.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gain Confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Overcome challenges and build confidence in your coding
                abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <Rocket className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Pick a project that matches your skill level and start coding today!
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedDifficulty("beginner")}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Beginner Projects
            </button>
            <button
              onClick={() => setSelectedDifficulty("advanced")}
              className="px-8 py-4 bg-purple-900 text-white rounded-xl font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg"
            >
              Advanced Challenges
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
