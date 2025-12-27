import { useState } from "react";
import {
  Database,
  Table,
  Search,
  Lock,
  GitMerge,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Workflow,
  Filter,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
function SQLExercises() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "SQL Basics and SELECT Queries",
      description:
        "Learn fundamental SELECT statements, retrieve data from tables, and use WHERE clauses for filtering.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["SELECT", "WHERE", "Basic Queries", "Filtering"],
      hint: "Use SELECT column_name FROM table_name WHERE condition",
      icon: Search,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Sorting and Limiting Results",
      description:
        "Master ORDER BY for sorting data and LIMIT for controlling result set size.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["ORDER BY", "LIMIT", "ASC", "DESC"],
      hint: "Use ORDER BY column_name ASC/DESC and LIMIT n for top results",
      icon: Filter,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Aggregate Functions",
      description:
        "Use COUNT, SUM, AVG, MIN, MAX to perform calculations on data sets.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["COUNT", "SUM", "AVG", "MIN", "MAX"],
      hint: "Aggregate functions work on columns: SELECT COUNT(*), AVG(price) FROM table",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "GROUP BY and HAVING",
      description:
        "Group data and filter grouped results using GROUP BY and HAVING clauses.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "40 min",
      topics: ["GROUP BY", "HAVING", "Grouping", "Aggregation"],
      hint: "GROUP BY groups rows, HAVING filters groups (unlike WHERE which filters rows)",
      icon: Workflow,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "INNER JOIN Operations",
      description:
        "Combine data from multiple tables using INNER JOIN based on related columns.",
      difficulty: "beginner",
      points: 25,
      timeEstimate: "45 min",
      topics: ["INNER JOIN", "Joins", "Multiple Tables", "Relationships"],
      hint: "SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.foreign_key",
      icon: GitMerge,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "LEFT and RIGHT JOINs",
      description:
        "Master outer joins to include unmatched rows from one or both tables.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["LEFT JOIN", "RIGHT JOIN", "Outer Joins", "NULL Values"],
      hint: "LEFT JOIN includes all rows from left table, RIGHT JOIN from right table",
      icon: GitMerge,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Subqueries and Nested Queries",
      description:
        "Write queries within queries for complex data retrieval and filtering.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Subqueries", "Nested Queries", "IN", "EXISTS"],
      hint: "Use subqueries in WHERE: WHERE column IN (SELECT column FROM table)",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "INSERT, UPDATE, DELETE",
      description:
        "Modify database data with INSERT, UPDATE, and DELETE statements safely.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["INSERT", "UPDATE", "DELETE", "Data Modification"],
      hint: "Always use WHERE with UPDATE and DELETE to avoid modifying all rows",
      icon: Table,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "String Functions and Pattern Matching",
      description:
        "Use LIKE, wildcards, CONCAT, SUBSTRING, and other string manipulation functions.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["LIKE", "Wildcards", "String Functions", "Pattern Matching"],
      hint: "Use % for any characters, _ for single character in LIKE patterns",
      icon: Search,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Date and Time Functions",
      description:
        "Work with dates and times using DATE, NOW, DATEDIFF, and date formatting functions.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["DATE", "TIME", "DATETIME", "Date Functions"],
      hint: "Use NOW() for current timestamp, DATEDIFF() for date differences",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Creating Tables and Constraints",
      description:
        "Design and create tables with PRIMARY KEY, FOREIGN KEY, UNIQUE, and NOT NULL constraints.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "55 min",
      topics: ["CREATE TABLE", "Primary Key", "Foreign Key", "Constraints"],
      hint: "Define constraints during table creation for data integrity",
      icon: Table,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 12,
      title: "Indexes and Query Optimization",
      description:
        "Create indexes to improve query performance and understand query execution plans.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Indexes", "Performance", "Optimization", "EXPLAIN"],
      hint: "Create indexes on frequently queried columns, but avoid over-indexing",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 13,
      title: "Transactions and ACID Properties",
      description:
        "Manage transactions with BEGIN, COMMIT, ROLLBACK and understand database consistency.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Transactions", "COMMIT", "ROLLBACK", "ACID"],
      hint: "Use transactions to ensure data integrity across multiple operations",
      icon: Lock,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Views and Stored Procedures",
      description:
        "Create reusable views and stored procedures for complex queries and business logic.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Views", "Stored Procedures", "Functions", "Reusability"],
      hint: "Views are virtual tables, stored procedures are saved SQL code blocks",
      icon: Database,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Advanced SQL Project",
      description:
        "Design and implement a complete database with multiple tables, relationships, and complex queries.",
      difficulty: "advanced",
      points: 50,
      timeEstimate: "90 min",
      topics: [
        "Database Design",
        "Full Project",
        "Normalization",
        "Complex Queries",
      ],
      hint: "Plan schema first, normalize tables, then implement relationships and queries",
      icon: Workflow,
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
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Database size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SQL Database Exercises
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-6">
              Master SQL queries, joins, aggregations, database design, and
              advanced topics for efficient data management
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-emerald-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-emerald-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-emerald-100 text-sm">Progress</div>
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 shadow-2xl"
              />
              <Database
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
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                          <Sparkles size={16} />
                          <span>Show Hint</span>
                        </summary>
                        <div className="mt-2 p-3 bg-emerald-50 border-l-4 border-emerald-400 rounded text-sm text-gray-700">
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
                        <div className="flex items-center justify-end gap-2 text-emerald-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/sql/${exercise.id}`}
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
            <Database className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            SQL Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Search className="text-emerald-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Queries</h3>
              <p className="text-gray-600 text-sm">
                SELECT, WHERE, ORDER BY for retrieving and filtering data.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitMerge className="text-teal-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Joins</h3>
              <p className="text-gray-600 text-sm">
                Combine data from multiple tables with various join types.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <BarChart3 className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Aggregation
              </h3>
              <p className="text-gray-600 text-sm">
                GROUP BY with aggregate functions for data analysis.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Table className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Database Design
              </h3>
              <p className="text-gray-600 text-sm">
                Create tables, constraints, and optimize with indexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need SQL References?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Access SQL syntax guides, query examples, and database best
            practices
          </p>
          <Link to="/sql-reference">
            <button className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View SQL References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SQLExercises;
