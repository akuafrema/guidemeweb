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
  FileText,
  Layers,
  Repeat,
} from "lucide-react";
import { Link } from "react-router-dom";

function Python() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Python Basics & Syntax",
      description:
        "Learn Python fundamentals including variables, data types, operators, and basic input/output operations.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "20 min",
      topics: ["Variables", "Data Types", "Operators", "I/O"],
      hint: "Use print() for output and input() for user input. Remember Python is case-sensitive",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Conditional Statements",
      description:
        "Master if, elif, else statements and logical operators for decision-making in programs.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["If-Else", "Conditionals", "Boolean Logic"],
      hint: "Remember proper indentation in Python. Use and, or, not for complex conditions",
      icon: GitBranch,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Loops and Iteration",
      description:
        "Practice for loops, while loops, range(), break, continue, and nested loops.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["For Loop", "While Loop", "Range", "Iteration"],
      hint: "Use range(start, stop, step) for for loops. Be careful with infinite while loops",
      icon: Repeat,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Functions and Scope",
      description:
        "Create reusable code with functions, parameters, return values, and understand variable scope.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Functions", "Parameters", "Return", "Scope"],
      hint: "Use def to define functions. Functions can have default parameters and return multiple values",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Lists and Tuples",
      description:
        "Work with Python lists and tuples, including indexing, slicing, and common methods.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Lists", "Tuples", "Indexing", "Slicing"],
      hint: "Lists are mutable [1, 2, 3], tuples are immutable (1, 2, 3). Use append(), extend(), pop()",
      icon: Box,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Dictionaries and Sets",
      description:
        "Master dictionaries for key-value pairs and sets for unique collections.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Dictionaries", "Sets", "Key-Value", "Hash Tables"],
      hint: "Dictionaries use {key: value}, sets use {item1, item2}. Access dict values with dict[key]",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "String Manipulation",
      description:
        "Advanced string operations including formatting, methods, and regular expressions.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Strings", "String Methods", "Formatting", "RegEx"],
      hint: "Use f-strings for formatting: f'Hello {name}'. Explore split(), join(), replace()",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "List Comprehensions",
      description:
        "Write elegant, concise code using list, dictionary, and set comprehensions.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["List Comprehension", "Dict Comprehension", "Generators"],
      hint: "Syntax: [expression for item in iterable if condition]. More Pythonic than loops",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "File I/O Operations",
      description:
        "Read from and write to files, handle different file formats including CSV and JSON.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "45 min",
      topics: ["File Reading", "File Writing", "CSV", "JSON"],
      hint: "Use 'with open()' context manager. Modes: 'r' read, 'w' write, 'a' append",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Exception Handling",
      description:
        "Handle errors gracefully using try, except, finally, and custom exceptions.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Try-Except", "Error Handling", "Custom Exceptions"],
      hint: "Use try-except blocks to catch errors. Multiple except clauses for different exceptions",
      icon: Terminal,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Object-Oriented Programming",
      description:
        "Create classes and objects, understand inheritance, encapsulation, and polymorphism.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Classes", "Objects", "Inheritance", "OOP"],
      hint: "Define classes with class keyword. Use __init__ for constructor and self for instance",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "Lambda Functions & Map/Filter",
      description:
        "Use anonymous functions and functional programming with map(), filter(), and reduce().",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Lambda", "Map", "Filter", "Reduce"],
      hint: "Lambda syntax: lambda x: x * 2. Use map() to apply function to all items",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 13,
      title: "Decorators and Generators",
      description:
        "Master advanced Python features including decorators and generator functions.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Decorators", "Generators", "Yield", "Advanced Functions"],
      hint: "Decorators modify functions. Generators use yield and are memory efficient",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Modules and Packages",
      description:
        "Organize code into modules and packages, understand imports and namespace management.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Modules", "Packages", "Imports", "Namespace"],
      hint: "Create __init__.py for packages. Use 'from module import function' for specific imports",
      icon: Box,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Working with APIs",
      description:
        "Make HTTP requests, parse JSON responses, and interact with REST APIs using requests library.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "55 min",
      topics: ["APIs", "HTTP", "REST", "JSON"],
      hint: "Use requests.get() for API calls. Parse JSON with response.json()",
      icon: Database,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "Multithreading & Multiprocessing",
      description:
        "Implement concurrent programming using threads and processes for parallel execution.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "65 min",
      topics: ["Threading", "Multiprocessing", "Concurrency", "Parallel"],
      hint: "Use threading for I/O-bound tasks, multiprocessing for CPU-bound tasks",
      icon: Layers,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Context Managers & Magic Methods",
      description:
        "Understand context managers (with statement) and special dunder methods in Python.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Context Managers", "Magic Methods", "Dunder Methods"],
      hint: "Use __enter__ and __exit__ for context managers. __str__, __repr__ for string representation",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Testing with Pytest",
      description:
        "Write unit tests, fixtures, and test automation using the pytest framework.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Testing", "Pytest", "Unit Tests", "Fixtures"],
      hint: "Name test functions with test_ prefix. Use assert statements for test validation",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 19,
      title: "Data Classes & Type Hints",
      description:
        "Use modern Python features including dataclasses and type annotations for better code.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Dataclasses", "Type Hints", "Annotations", "Modern Python"],
      hint: "Use @dataclass decorator and type hints like def func(x: int) -> str:",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 20,
      title: "Build a Python CLI Application",
      description:
        "Create a complete command-line application with argument parsing, file handling, and user interaction.",
      difficulty: "advanced",
      points: 50,
      timeEstimate: "90 min",
      topics: ["CLI", "Project", "Argparse", "Application"],
      hint: "Use argparse for command-line arguments. Combine all Python concepts learned",
      icon: Terminal,
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
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Exercises
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Master Python programming from basics to advanced concepts
              including OOP, file handling, and modern Python features
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-blue-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-blue-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-blue-100 text-sm">Progress</div>
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-2xl"
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
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
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
                        <div className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-400 rounded text-sm text-gray-700">
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
                        href={`/exercise/python/${exercise.id}`}
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
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Python Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fundamentals
              </h3>
              <p className="text-gray-600 text-sm">
                Variables, data types, operators, and control flow structures.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Box className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Data Structures
              </h3>
              <p className="text-gray-600 text-sm">
                Lists, dictionaries, sets, tuples, and comprehensions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Layers className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">OOP</h3>
              <p className="text-gray-600 text-sm">
                Classes, objects, inheritance, and object-oriented design.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Zap className="text-indigo-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
              <p className="text-gray-600 text-sm">
                Decorators, generators, context managers, and modern features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Python Documentation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Access our comprehensive Python reference guide and documentation
          </p>
          <Link to="/pythonreference">
            <button className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Python;
