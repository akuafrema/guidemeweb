import { useState } from "react";
import {
  Code,
  Layout,
  Image,
  List,
  Table,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  FileText,
  Globe,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
function HTML() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Basic HTML Structure",
      description:
        "Create a complete HTML document with proper DOCTYPE, head, and body structure.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Document Structure", "DOCTYPE", "Head & Body"],
      hint: "Start with <!DOCTYPE html>, then add <html>, <head>, and <body> tags",
      icon: FileText,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Text Formatting Elements",
      description:
        "Use headings, paragraphs, bold, italic, and other text formatting tags.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Headings", "Paragraphs", "Text Formatting"],
      hint: "Practice using <h1>-<h6>, <p>, <strong>, <em>, <mark>, and <small>",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Creating Lists",
      description:
        "Build ordered, unordered, and nested lists for organizing content.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "20 min",
      topics: ["Lists", "Ordered Lists", "Unordered Lists"],
      hint: "Use <ul>, <ol>, and <li> tags, and practice nesting lists",
      icon: List,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Working with Links",
      description:
        "Create internal and external hyperlinks with proper attributes.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["Links", "Anchors", "Navigation"],
      hint: "Use <a> tag with href, target, and rel attributes",
      icon: Link,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Images and Media",
      description:
        "Embed images with proper alt text, dimensions, and accessibility features.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["Images", "Alt Text", "Accessibility"],
      hint: "Use <img> with src, alt, width, and height attributes",
      icon: Image,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "HTML Tables",
      description:
        "Create structured data tables with headers, rows, and cells.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Tables", "Data Structure", "Table Elements"],
      hint: "Use <table>, <thead>, <tbody>, <tr>, <th>, and <td> tags",
      icon: Table,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "HTML Forms",
      description:
        "Build interactive forms with various input types and validation.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Forms", "Input Types", "Validation"],
      hint: "Practice input, textarea, select, and button elements",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "Semantic HTML",
      description:
        "Use semantic tags like header, nav, main, article, section, and footer.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Semantic HTML", "Structure", "Best Practices"],
      hint: "Replace <div> with meaningful tags like <header>, <nav>, <article>",
      icon: Layout,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "HTML5 Audio & Video",
      description:
        "Embed audio and video elements with controls and multiple sources.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Audio", "Video", "Media Elements"],
      hint: "Use <audio> and <video> tags with <source> elements",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Meta Tags & SEO",
      description:
        "Add meta tags for SEO, social sharing, and viewport configuration.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Meta Tags", "SEO", "Open Graph"],
      hint: "Use <meta> tags for description, keywords, viewport, and og: properties",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Responsive Images",
      description:
        "Implement responsive images using srcset and picture elements.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "35 min",
      topics: ["Responsive", "Images", "Picture Element"],
      hint: "Use srcset attribute and <picture> with multiple <source> tags",
      icon: Image,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "HTML Entities & Symbols",
      description: "Use HTML entities for special characters and symbols.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Entities", "Special Characters", "Symbols"],
      hint: "Practice &lt;, &gt;, &amp;, &copy;, and other entities",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 13,
      title: "Accessible Forms",
      description:
        "Create forms with proper labels, fieldsets, and ARIA attributes.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["Accessibility", "Forms", "ARIA"],
      hint: "Use <label>, <fieldset>, <legend>, and aria-* attributes",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Data Attributes",
      description: "Store and manipulate custom data using data-* attributes.",
      difficulty: "advanced",
      points: 25,
      timeEstimate: "35 min",
      topics: ["Data Attributes", "Custom Data", "JavaScript Integration"],
      hint: "Use data-* attributes to store custom information on elements",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Microdata & Schema.org",
      description:
        "Add structured data markup for search engines using Schema.org.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Microdata", "Schema.org", "SEO"],
      hint: "Use itemscope, itemtype, and itemprop attributes",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "Complete Landing Page",
      description:
        "Build a full landing page with header, hero, features, and footer sections.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "60 min",
      topics: ["Layout", "Semantic HTML", "Structure"],
      hint: "Combine semantic tags, forms, images, and links in a cohesive design",
      icon: Layout,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Inline SVG Graphics",
      description: "Embed and manipulate SVG graphics directly in HTML.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["SVG", "Graphics", "Vector Images"],
      hint: "Use <svg> tag with path, circle, rect elements",
      icon: Image,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Progressive Web App Manifest",
      description:
        "Create a web app manifest file for installable web applications.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["PWA", "Manifest", "Mobile"],
      hint: "Link manifest.json with icons, theme colors, and display mode",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const difficulties = [
    { id: "all", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch =
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.topics.some((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      exercise.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-700";
      case "intermediate":
        return "bg-blue-100 text-blue-700";
      case "advanced":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const toggleComplete = (id) => {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter((item) => item !== id));
    } else {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  const totalPoints = exercises.reduce((sum, ex) => sum + ex.points, 0);
  const earnedPoints = exercises
    .filter((ex) => completedExercises.includes(ex.id))
    .reduce((sum, ex) => sum + ex.points, 0);
  const completionPercentage = Math.round(
    (completedExercises.length / exercises.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HTML Exercises
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              Master semantic markup, forms, tables, and modern HTML5 features
              through practical exercises
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-orange-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-orange-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-orange-100 text-sm">Progress</div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-2xl"
              />
              <Code
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star size={20} className="text-gray-600" />
            <h3 className="font-semibold text-gray-900">
              Filter by Difficulty
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDifficulty === difficulty.id
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {difficulty.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredExercises.length > 0 ? (
          <div className="space-y-4">
            {filteredExercises.map((exercise) => {
              const Icon = exercise.icon;
              const isCompleted = completedExercises.includes(exercise.id);

              return (
                <div
                  key={exercise.id}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    isCompleted ? "ring-2 ring-green-500" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-6 p-6">
                    {/* Left: Icon and Status */}
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${exercise.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                      <button
                        onClick={() => toggleComplete(exercise.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          isCompleted
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {isCompleted ? (
                          <span className="flex items-center gap-2">
                            <CheckCircle size={16} />
                            Done
                          </span>
                        ) : (
                          "Mark Done"
                        )}
                      </button>
                    </div>

                    {/* Middle: Content */}
                    <div className="md:col-span-7">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exercise.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exercise.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exercise.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                          <Sparkles size={16} />
                          <span>Show Hint</span>
                        </summary>
                        <div className="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm text-gray-700">
                          💡 {exercise.hint}
                        </div>
                      </details>
                    </div>

                    {/* Right: Metadata */}
                    <div className="md:col-span-3 flex md:flex-col gap-4 md:items-end">
                      <div className="flex-1">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium ${getDifficultyColor(
                            exercise.difficulty
                          )}`}
                        >
                          {exercise.difficulty.charAt(0).toUpperCase() +
                            exercise.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex-1 text-right">
                        <div className="flex items-center justify-end gap-2 text-gray-600 mb-2">
                          <Clock size={16} />
                          <span className="text-sm">
                            {exercise.timeEstimate}
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-orange-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/html/${exercise.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                          Start Exercise
                          <ChevronRight size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Code className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No exercises found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDifficulty("all");
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            HTML Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FileText className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Structure
              </h3>
              <p className="text-gray-600 text-sm">
                Build proper document structure with semantic elements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Layout className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Semantics
              </h3>
              <p className="text-gray-600 text-sm">
                Use meaningful tags for better accessibility and SEO.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Globe className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Forms</h3>
              <p className="text-gray-600 text-sm">
                Create interactive forms with validation and inputs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Image className="text-orange-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Media</h3>
              <p className="text-gray-600 text-sm">
                Embed images, videos, and audio with proper attributes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive HTML tag reference guide
          </p>
          <Link to="/htmlreferences">
            <button className="inline-block px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View HTML Reference
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HTML;
