import { useState } from "react";
import { Search, BookOpen, Code2, Database, Shield, Palette, GitBranch, FileText, ChevronRight, Filter } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Reference = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();


  const references = [
    {
      id: 1,
      title: "Python Reference",
      description: "Complete Python language reference with syntax, built-in functions, and standard library documentation.",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      category: "programming",
      topics: ["Syntax", "Data Types", "Functions", "Classes", "Modules"],
      link: "/pythonreference"
    },
    {
      id: 2,
      title: "Machine Learning Reference",
      description: "ML algorithms, libraries (scikit-learn, TensorFlow, PyTorch), and implementation guides.",
      icon: Code2,
      color: "from-purple-500 to-purple-600",
      category: "data-science",
      topics: ["Algorithms", "Neural Networks", "Model Training", "Libraries"],
      link: "/machine-learning-reference"
    },
    {
      id: 3,
      title: "JavaScript Reference",
      description: "Modern JavaScript ES6+ features, DOM manipulation, async programming, and best practices.",
      icon: Code2,
      color: "from-yellow-500 to-yellow-600",
      category: "programming",
      topics: ["ES6+", "DOM", "Promises", "Async/Await", "Array Methods"],
      link: "/javascript-reference"
    },
    {
      id: 4,
      title: "Python Data Visualization Reference",
      description: "Matplotlib, Seaborn, Plotly documentation with chart types and customization options.",
      icon: Palette,
      color: "from-teal-500 to-teal-600",
      category: "data-science",
      topics: ["Matplotlib", "Seaborn", "Plotly", "Charts", "Graphs"],
      link: "/py-visual-reference"
    },
    {
      id: 5,
      title: "SQL Reference",
      description: "SQL commands, queries, joins, indexes, and database management fundamentals.",
      icon: Database,
      color: "from-indigo-500 to-indigo-600",
      category: "database",
      topics: ["SELECT", "JOIN", "Indexes", "Transactions", "Optimization"],
      link: "/sql-reference"
    },
    {
      id: 6,
      title: "Kali Linux Reference",
      description: "Penetration testing tools, network security commands, and ethical hacking resources.",
      icon: Shield,
      color: "from-gray-700 to-gray-900",
      category: "security",
      topics: ["Nmap", "Metasploit", "Wireshark", "Burp Suite", "Aircrack-ng"],
      link: "/kali-linux-reference"
    },
    {
      id: 7,
      title: "Cryptography Reference",
      description: "Encryption algorithms, hashing, digital signatures, and cryptographic protocols.",
      icon: Shield,
      color: "from-red-500 to-red-600",
      category: "security",
      topics: ["AES", "RSA", "Hashing", "Digital Signatures", "SSL/TLS"],
      link: "/cryptography-reference"
    },
    {
      id: 8,
      title: "HTML Reference",
      description: "HTML5 elements, attributes, semantic markup, forms, and accessibility guidelines.",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
      category: "web",
      topics: ["Elements", "Attributes", "Forms", "Semantic HTML", "SEO"],
      link: "/htmlreferences"
    },
    {
      id: 9,
      title: "CSS Reference",
      description: "CSS properties, selectors, flexbox, grid, animations, and responsive design patterns.",
      icon: Palette,
      color: "from-blue-400 to-blue-500",
      category: "web",
      topics: ["Selectors", "Flexbox", "Grid", "Animations", "Media Queries"],
      link: "/cssreference"
    },
    {
      id: 10,
      title: "React Reference",
      description: "React hooks, component lifecycle, state management, routing, and best practices.",
      icon: Code2,
      color: "from-cyan-500 to-cyan-600",
      category: "web",
      topics: ["Hooks", "Components", "State", "Props", "Context API"],
      link: "/reactreference"
    },
    {
      id: 11,
      title: "Git Reference",
      description: "Git commands, branching strategies, merge workflows, and GitHub collaboration.",
      icon: GitBranch,
      color: "from-orange-600 to-orange-700",
      category: "tools",
      topics: ["Commits", "Branches", "Merging", "Rebasing", "GitHub"],
      link: "/gitreference"
    }
  ];

  const categories = [
    { id: "all", label: "All References", icon: BookOpen },
    { id: "programming", label: "Programming", icon: Code2 },
    { id: "web", label: "Web Development", icon: FileText },
    { id: "data-science", label: "Data Science", icon: Palette },
    { id: "database", label: "Database", icon: Database },
    { id: "security", label: "Security", icon: Shield },
    { id: "tools", label: "Tools", icon: GitBranch }
  ];

  const filteredReferences = references.filter((ref) => {
    const matchesSearch = ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ref.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ref.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || ref.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <BookOpen size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reference Library
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Quick access to comprehensive documentation and reference guides for all your programming needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search references, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredReferences.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReferences.map((reference) => {
              const Icon = reference.icon;
              return (
                <div
                 
                  key={reference.id}
                  onClick={() => navigate(reference.link)}
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer">
                

                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${reference.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Icon className="text-white" size={48} strokeWidth={1.5} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {reference.title}
                      </h2>
                      <ChevronRight
                        className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                        size={24}
                      />
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {reference.description}
                    </p>

                    {/* Topics Tags */}
                    <div className="flex flex-wrap gap-2">
                      {reference.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {topic}
                        </span>
                      ))}
                      {reference.topics.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          +{reference.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center text-indigo-600 font-medium group-hover:underline">
                        <Link to={reference.link} className="flex items-center no-underline">
                      <span>View Reference</span>
                      <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No references found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Quick Access Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Quick Help?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All references are organized for quick lookup and include syntax examples, best practices, and common use cases. Bookmark your favorites for instant access.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Syntax Examples</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Best Practices</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Code Snippets</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">11</div>
                <div className="text-gray-600">Languages</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Topics</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg col-span-2">
                <div className="text-4xl font-bold text-pink-600 mb-2">Always Updated</div>
                <div className="text-gray-600">Latest syntax and best practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Learning Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive tutorials to put these references into practice
          </p>
          <Link
            to="/exercise"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg no-underline"
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log("Navigate to home");
            // }}
          >
            Browse Tutorials
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reference;