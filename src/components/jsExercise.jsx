import { useState } from "react";
import {
  Code,
  Zap,
  Database,
  Box,
  GitBranch,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Terminal,
  Cpu,
  Repeat,
} from "lucide-react";
import { Link } from "react-router-dom";
function JavaScript() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Variables and Data Types",
      description:
        "Practice declaring variables with var, let, const and working with different data types.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Variables", "Data Types", "Type Conversion"],
      hint: "Use typeof operator to check data types",
      icon: Database,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Basic Operators",
      description:
        "Master arithmetic, comparison, and logical operators in JavaScript.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "20 min",
      topics: ["Operators", "Arithmetic", "Comparison"],
      hint: "Remember operator precedence: * and / before + and -",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Conditional Statements",
      description:
        "Write if-else statements and use ternary operators for conditional logic.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["If-Else", "Switch", "Ternary Operator"],
      hint: "Use switch for multiple conditions on same variable",
      icon: GitBranch,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Loops and Iteration",
      description:
        "Practice for, while, and do-while loops with different iteration patterns.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["For Loop", "While Loop", "Break & Continue"],
      hint: "Use for...of for arrays, for...in for objects",
      icon: Repeat,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Functions Basics",
      description:
        "Create and invoke functions with parameters, return values, and scope.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Function Declaration", "Parameters", "Return"],
      hint: "Functions can return values using the return keyword",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Arrow Functions",
      description:
        "Learn modern arrow function syntax and understand lexical this binding.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Arrow Functions", "This Binding", "Implicit Return"],
      hint: "Use () => {} for arrow functions, omit {} for single expressions",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Array Methods",
      description:
        "Master map, filter, reduce, forEach and other essential array methods.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Map", "Filter", "Reduce", "Array Methods"],
      hint: "map transforms, filter selects, reduce accumulates",
      icon: Box,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "Object Manipulation",
      description:
        "Work with objects, access properties, and use destructuring.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Objects", "Destructuring", "Object Methods"],
      hint: "Use Object.keys(), Object.values(), Object.entries()",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "String Manipulation",
      description:
        "Practice string methods like split, slice, replace, and template literals.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["String Methods", "Template Literals", "RegEx"],
      hint: "Use template literals with ${} for string interpolation",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "DOM Manipulation",
      description:
        "Select and manipulate HTML elements using JavaScript DOM methods.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["querySelector", "Events", "DOM Methods"],
      hint: "Use querySelector for single element, querySelectorAll for multiple",
      icon: Terminal,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Event Handling",
      description:
        "Add event listeners and handle user interactions like clicks and input.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Event Listeners", "Event Object", "Event Delegation"],
      hint: "Use addEventListener() to attach events to elements",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "Async JavaScript Basics",
      description:
        "Understand callbacks, setTimeout, and asynchronous code execution.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Callbacks", "setTimeout", "Async Basics"],
      hint: "Callbacks are functions passed as arguments to other functions",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 13,
      title: "Promises",
      description:
        "Work with Promises, then/catch chains, and handle async operations.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Promises", "Then/Catch", "Promise Chaining"],
      hint: "Promises have three states: pending, fulfilled, rejected",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Async/Await",
      description:
        "Use modern async/await syntax for cleaner asynchronous code.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Async/Await", "Try/Catch", "Error Handling"],
      hint: "Use try/catch blocks to handle errors in async functions",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Fetch API",
      description:
        "Make HTTP requests using the Fetch API and handle JSON responses.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "55 min",
      topics: ["Fetch", "HTTP Requests", "JSON"],
      hint: "fetch returns a Promise that resolves to a Response object",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "ES6 Classes",
      description:
        "Create classes with constructors, methods, and inheritance.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["Classes", "Constructor", "Inheritance"],
      hint: "Use extends for inheritance and super() to call parent constructor",
      icon: Box,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Closures and Scope",
      description:
        "Understand closures, lexical scope, and function scope chains.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Closures", "Scope", "Lexical Environment"],
      hint: "Closures allow inner functions to access outer function variables",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Advanced Array Methods",
      description:
        "Master find, some, every, flat, flatMap and other advanced array operations.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["Find", "Some", "Every", "Flat"],
      hint: "some returns true if any element passes, every if all pass",
      icon: Box,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 19,
      title: "Regular Expressions",
      description:
        "Use regex patterns for string matching, validation, and manipulation.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "55 min",
      topics: ["RegEx", "Pattern Matching", "Validation"],
      hint: "Use test() to check matches, match() to extract matches",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 20,
      title: "Build a Complete Web App",
      description:
        "Combine all concepts to build a full interactive web application.",
      difficulty: "advanced",
      points: 50,
      timeEstimate: "90 min",
      topics: ["Full Stack", "DOM", "Events", "Fetch"],
      hint: "Break the project into smaller functions and test incrementally",
      icon: Cpu,
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
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Zap size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              JavaScript Exercises
            </h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-6">
              Master functions, arrays, objects, async programming, and DOM
              manipulation through hands-on coding
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-yellow-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-yellow-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-yellow-100 text-sm">Progress</div>
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-2xl"
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
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">
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
                        <div className="flex items-center justify-end gap-2 text-yellow-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/javascript/${exercise.id}`}
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
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            JavaScript Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Functions
              </h3>
              <p className="text-gray-600 text-sm">
                Reusable blocks of code with parameters and return values.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Box className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arrays</h3>
              <p className="text-gray-600 text-sm">
                Collections with powerful methods like map, filter, reduce.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Clock className="text-yellow-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Async</h3>
              <p className="text-gray-600 text-sm">
                Promises, async/await for handling asynchronous operations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Terminal className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">DOM</h3>
              <p className="text-gray-600 text-sm">
                Manipulate web pages dynamically with JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive JavaScript reference guide
          </p>
          <Link to="/javascript-reference">
            <button className="inline-block px-8 py-4 bg-white text-yellow-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View JS Reference
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default JavaScript;
