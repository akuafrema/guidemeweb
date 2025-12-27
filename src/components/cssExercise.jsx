import { useState } from "react";
import {
  Search,
  Palette,
  Layout,
  Smartphone,
  Sparkles,
  CheckCircle,
  Code,
  BookOpen,
  ChevronRight,
  Trophy,
  Clock,
  Star,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
function CSS() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Basic Text Styling",
      description:
        "Practice styling text with fonts, colors, sizes, and text decorations.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Typography", "Colors", "Text Properties"],
      hint: "Use font-family, color, font-size, and text-decoration properties",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Box Model Mastery",
      description:
        "Understand and apply padding, margin, border to create proper spacing.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["Box Model", "Padding", "Margin", "Border"],
      hint: "Remember: content → padding → border → margin",
      icon: Layout,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "CSS Selectors Challenge",
      description:
        "Master various CSS selectors including class, id, attribute, and pseudo-selectors.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["Selectors", "Specificity", "Pseudo-classes"],
      hint: "Practice descendant, child, adjacent sibling, and attribute selectors",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Flexbox Layout",
      description:
        "Create responsive layouts using Flexbox properties and alignment.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Flexbox", "Alignment", "Responsive Design"],
      hint: "Use justify-content, align-items, and flex-direction",
      icon: Layout,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 5,
      title: "CSS Grid System",
      description: "Build complex two-dimensional layouts with CSS Grid.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Grid", "Layout", "Template Areas"],
      hint: "Define grid-template-columns and grid-template-rows",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 6,
      title: "Responsive Design with Media Queries",
      description:
        "Make your layouts adapt to different screen sizes using media queries.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Media Queries", "Breakpoints", "Mobile-First"],
      hint: "Use @media (max-width: ...) and @media (min-width: ...)",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "CSS Animations",
      description:
        "Create smooth animations using keyframes and transition properties.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Animations", "Keyframes", "Transitions"],
      hint: "Define @keyframes and use animation property",
      icon: Sparkles,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "CSS Transitions & Transforms",
      description: "Apply smooth transitions and 2D/3D transforms to elements.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Transitions", "Transforms", "Hover Effects"],
      hint: "Use transition, transform: rotate/scale/translate",
      icon: Sparkles,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "Custom CSS Variables",
      description:
        "Create and use CSS custom properties (variables) for reusable values.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["CSS Variables", "Custom Properties", "Theme"],
      hint: "Define with --variable-name and use with var(--variable-name)",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 10,
      title: "Advanced Positioning",
      description:
        "Master absolute, relative, fixed, and sticky positioning techniques.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Positioning", "Z-index", "Layout"],
      hint: "Understand how position property affects element flow",
      icon: Layout,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "CSS Pseudo-elements",
      description:
        "Use ::before and ::after to add content and styling without HTML.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "25 min",
      topics: ["Pseudo-elements", "Content Property", "Decoration"],
      hint: "Use ::before and ::after with content property",
      icon: Sparkles,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "Complex Selectors & Combinators",
      description: "Master advanced CSS selectors and combinator patterns.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "40 min",
      topics: ["Advanced Selectors", "Combinators", "Specificity"],
      hint: "Practice ~, +, >, and :not() selectors",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 13,
      title: "CSS Grid Advanced Layouts",
      description:
        "Build complex responsive layouts with Grid areas and auto-placement.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Advanced Grid", "Grid Areas", "Auto-placement"],
      hint: "Use grid-template-areas and grid-auto-flow",
      icon: Layers,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "CSS Architecture (BEM)",
      description:
        "Organize CSS using BEM methodology for scalable and maintainable code.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["BEM", "Architecture", "Naming Convention"],
      hint: "Use Block__Element--Modifier naming pattern",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Responsive Navigation Menu",
      description:
        "Create a fully responsive navigation with mobile hamburger menu.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "60 min",
      topics: ["Navigation", "Responsive Design", "Flexbox"],
      hint: "Combine flexbox, media queries, and transitions",
      icon: Layout,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "CSS Card Components",
      description:
        "Design modern card components with shadows, hover effects, and layouts.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "35 min",
      topics: ["Components", "Box Shadow", "Hover Effects"],
      hint: "Use box-shadow, border-radius, and transitions",
      icon: Palette,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 17,
      title: "CSS Gradient Mastery",
      description:
        "Create beautiful linear and radial gradients for backgrounds.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["Gradients", "Linear Gradient", "Radial Gradient"],
      hint: "Use linear-gradient() and radial-gradient() functions",
      icon: Palette,
      color: "from-green-500 to-green-600",
    },
    {
      id: 18,
      title: "Dark Mode Implementation",
      description: "Implement a complete dark mode theme using CSS variables.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Dark Mode", "CSS Variables", "Theme Switching"],
      hint: "Use prefers-color-scheme and CSS custom properties",
      icon: Palette,
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
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Palette size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              CSS Exercises
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-6">
              Master styling, layouts, animations, and responsive design through
              practical exercises
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-cyan-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-cyan-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-cyan-100 text-sm">Progress</div>
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl"
              />
              <Search
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
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
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
                        <div className="flex items-center justify-end gap-2 text-blue-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/css/${exercise.id}`}
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
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Learning Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            CSS Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Palette className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Styling</h3>
              <p className="text-gray-600 text-sm">
                Colors, fonts, backgrounds, and visual properties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Layout className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Layout</h3>
              <p className="text-gray-600 text-sm">
                Flexbox, Grid, positioning, and responsive design.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Sparkles className="text-teal-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Animation
              </h3>
              <p className="text-gray-600 text-sm">
                Transitions, transforms, and keyframe animations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Smartphone className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Responsive
              </h3>
              <p className="text-gray-600 text-sm">
                Media queries and mobile-first design patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive CSS reference guide
          </p>
          <Link
            to="/cssreference"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg no-underline"
          >
            View Reference Guide
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CSS;
