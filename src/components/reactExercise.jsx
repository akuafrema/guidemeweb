import { useState } from "react";
import {
  Code,
  Zap,
  Database,
  Box,
  Layers,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  RefreshCw,
  Workflow,
  Component,
} from "lucide-react";
import { Link } from "react-router-dom";
function ReactExercises() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "JSX and Components Basics",
      description:
        "Learn JSX syntax, create functional components, and understand the component structure in React.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["JSX", "Components", "Props", "Basic Syntax"],
      hint: "Components are JavaScript functions that return JSX. Use props to pass data",
      icon: Component,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Props and Component Communication",
      description:
        "Master passing data between components using props and understanding data flow in React.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Props", "Data Flow", "Parent-Child", "Props Destructuring"],
      hint: "Props flow down from parent to child. Use destructuring for cleaner code",
      icon: Workflow,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "State with useState Hook",
      description:
        "Learn to manage component state using the useState hook for interactive components.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "40 min",
      topics: ["useState", "State Management", "Hooks", "Re-rendering"],
      hint: "const [state, setState] = useState(initialValue). State changes trigger re-renders",
      icon: Database,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Event Handling",
      description:
        "Handle user interactions with onClick, onChange, onSubmit and other event handlers.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Events", "onClick", "onChange", "Event Handlers"],
      hint: "Use arrow functions or bind to preserve context: onClick={() => handleClick()}",
      icon: Zap,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Conditional Rendering",
      description:
        "Display different UI based on conditions using ternary operators, && operator, and if statements.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Conditional Rendering", "Ternary", "Logic", "UI States"],
      hint: "Use {condition ? <A /> : <B />} or {condition && <Component />}",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Lists and Keys",
      description:
        "Render dynamic lists using map() and understand the importance of keys for performance.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Lists", "Map", "Keys", "Dynamic Rendering"],
      hint: "Use array.map() to render lists. Keys should be unique and stable identifiers",
      icon: Box,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Forms and Controlled Components",
      description:
        "Build forms with controlled inputs where React state is the single source of truth.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: [
        "Forms",
        "Controlled Inputs",
        "Input Handling",
        "Form Submission",
      ],
      hint: "Controlled: value={state} onChange={(e) => setState(e.target.value)}",
      icon: Component,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "useEffect Hook and Side Effects",
      description:
        "Manage side effects like data fetching, subscriptions, and DOM manipulation with useEffect.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "50 min",
      topics: ["useEffect", "Side Effects", "Lifecycle", "Dependencies"],
      hint: "useEffect runs after render. Use dependency array to control when it runs",
      icon: RefreshCw,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "Custom Hooks",
      description:
        "Create reusable custom hooks to extract component logic and share it across components.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "55 min",
      topics: [
        "Custom Hooks",
        "Reusability",
        "Logic Extraction",
        "Hook Patterns",
      ],
      hint: "Custom hooks start with 'use' and can use other hooks inside them",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Context API for State Management",
      description:
        "Manage global state and avoid prop drilling using React Context API.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "55 min",
      topics: ["Context API", "Global State", "Provider", "Consumer"],
      hint: "Create context with createContext(), provide with Provider, consume with useContext",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "React Router Navigation",
      description:
        "Implement client-side routing with React Router for multi-page applications.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["React Router", "Routing", "Navigation", "URL Parameters"],
      hint: "Use BrowserRouter, Routes, Route, Link, and useNavigate for navigation",
      icon: Workflow,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 12,
      title: "useReducer and Complex State",
      description:
        "Manage complex state logic using useReducer hook with actions and reducers.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["useReducer", "Reducers", "Actions", "Complex State"],
      hint: "useReducer is better for complex state logic. Dispatch actions to update state",
      icon: Database,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 13,
      title: "Performance Optimization",
      description:
        "Optimize React apps using React.memo, useMemo, useCallback, and lazy loading.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "70 min",
      topics: ["Performance", "Memoization", "Optimization", "Lazy Loading"],
      hint: "Use React.memo for components, useMemo for values, useCallback for functions",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "API Integration and Data Fetching",
      description:
        "Fetch data from APIs, handle loading states, errors, and implement real-world data patterns.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "75 min",
      topics: ["API", "Fetch", "Axios", "Loading States", "Error Handling"],
      hint: "Use useEffect for fetching. Manage loading, error, and success states",
      icon: RefreshCw,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Build a Complete React App",
      description:
        "Create a full-featured application combining routing, state management, API calls, and best practices.",
      difficulty: "advanced",
      points: 50,
      timeEstimate: "120 min",
      topics: ["Full Project", "Integration", "Best Practices", "Real App"],
      hint: "Plan component structure, state management, and routing before coding",
      icon: Component,
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
      <section className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Component size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ReactJS Exercises
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-6">
              Master React fundamentals, hooks, state management, routing, and
              build modern component-based applications
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
              <Component
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
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
                          <Sparkles size={16} />
                          <span>Show Hint</span>
                        </summary>
                        <div className="mt-2 p-3 bg-cyan-50 border-l-4 border-cyan-400 rounded text-sm text-gray-700">
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
                        <div className="flex items-center justify-end gap-2 text-cyan-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/react/${exercise.id}`}
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
            <Component className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            React Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Component className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Components
              </h3>
              <p className="text-gray-600 text-sm">
                Build reusable UI pieces with props and composition.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Database className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                State & Hooks
              </h3>
              <p className="text-gray-600 text-sm">
                Manage component data with useState and other hooks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <RefreshCw className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Side Effects
              </h3>
              <p className="text-gray-600 text-sm">
                Handle lifecycle events and side effects with useEffect.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Workflow className="text-cyan-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Routing</h3>
              <p className="text-gray-600 text-sm">
                Navigate between pages with React Router.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need React Documentation?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Access official React docs, hooks reference, and best practices
          </p>
          <Link to="/reactreference">
            <button className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View React References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ReactExercises;
