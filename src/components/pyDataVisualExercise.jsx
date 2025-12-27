import { useState } from "react";
import {
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Activity,
  Map,
  Layers,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Palette,
  Grid,
  Boxes,
} from "lucide-react";
import { Link } from "react-router-dom";
function PythonDataVisualization() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Matplotlib Basics",
      description:
        "Learn to create basic line plots, scatter plots, and bar charts using Matplotlib.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "25 min",
      topics: ["Matplotlib", "Line Plots", "Bar Charts"],
      hint: "Use plt.plot() for line plots and plt.bar() for bar charts",
      icon: LineChart,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Plot Customization",
      description:
        "Customize plots with titles, labels, colors, line styles, and legends.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Styling", "Labels", "Colors", "Legends"],
      hint: "Use plt.title(), plt.xlabel(), plt.ylabel(), and plt.legend()",
      icon: Palette,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Pandas Plotting",
      description:
        "Create visualizations directly from Pandas DataFrames using built-in plotting methods.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Pandas", "DataFrame", "Quick Plots"],
      hint: "Use df.plot() method with different kind parameters",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Histograms and Distributions",
      description:
        "Visualize data distributions using histograms and density plots.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Histograms", "Distributions", "Density Plots"],
      hint: "Use plt.hist() and add kde=True for density curves",
      icon: Activity,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Seaborn Introduction",
      description:
        "Get started with Seaborn for statistical visualizations and attractive plots.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Seaborn", "Statistical Plots", "Themes"],
      hint: "Import seaborn as sns and use sns.set_style() for themes",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Subplots and Layouts",
      description:
        "Create multiple plots in a single figure using subplots and grid layouts.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Subplots", "Grid Layout", "Figure Management"],
      hint: "Use plt.subplots() or fig.add_subplot() for multiple plots",
      icon: Grid,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Heatmaps and Correlation",
      description:
        "Visualize correlation matrices and create informative heatmaps.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Heatmaps", "Correlation", "Annotations"],
      hint: "Use sns.heatmap() with annot=True to show values",
      icon: Boxes,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "Box Plots and Violin Plots",
      description:
        "Display statistical summaries and distributions using box and violin plots.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Box Plots", "Violin Plots", "Statistical Summary"],
      hint: "Use sns.boxplot() and sns.violinplot() to show distributions",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "Time Series Visualization",
      description:
        "Plot and analyze time series data with proper date formatting.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Time Series", "Date Formatting", "Trends"],
      hint: "Use pd.to_datetime() and set dates as index for better plotting",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Scatter Plots and Relationships",
      description:
        "Explore relationships between variables using scatter plots and regression lines.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Scatter Plots", "Regression", "Relationships"],
      hint: "Use sns.regplot() or sns.lmplot() for scatter with regression",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Categorical Data Visualization",
      description:
        "Visualize categorical data using bar plots, count plots, and categorical plots.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Categorical Data", "Count Plots", "Bar Plots"],
      hint: "Use sns.countplot() and sns.catplot() for categorical variables",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "Plotly Interactive Charts",
      description:
        "Create interactive visualizations using Plotly for web-based dashboards.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "55 min",
      topics: ["Plotly", "Interactive Charts", "Dashboards"],
      hint: "Use plotly.express for quick interactive plots",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 13,
      title: "3D Visualizations",
      description: "Create 3D plots for multi-dimensional data representation.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["3D Plots", "Surface Plots", "Multi-dimensional"],
      hint: "Use Axes3D from mpl_toolkits.mplot3d for 3D plotting",
      icon: Boxes,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Geographic Data Visualization",
      description:
        "Create maps and visualize geographic data using Folium and GeoPandas.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "70 min",
      topics: ["Maps", "GeoData", "Folium", "GeoPandas"],
      hint: "Use folium for interactive maps and geopandas for spatial data",
      icon: Map,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Animation and Dynamic Plots",
      description:
        "Create animated visualizations to show data changes over time.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "75 min",
      topics: ["Animation", "Dynamic Plots", "FuncAnimation"],
      hint: "Use matplotlib.animation.FuncAnimation for animations",
      icon: Activity,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "Advanced Seaborn Styling",
      description:
        "Master advanced Seaborn features including FacetGrid and PairGrid.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "65 min",
      topics: ["FacetGrid", "PairGrid", "Advanced Styling"],
      hint: "Use sns.FacetGrid() and sns.PairGrid() for multi-plot layouts",
      icon: Grid,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Custom Color Palettes",
      description:
        "Create and apply custom color schemes for professional visualizations.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "50 min",
      topics: ["Color Palettes", "Custom Colors", "Design"],
      hint: "Use sns.color_palette() and matplotlib colormaps",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Dashboard Creation",
      description:
        "Build comprehensive data dashboards combining multiple visualization types.",
      difficulty: "advanced",
      points: 45,
      timeEstimate: "90 min",
      topics: ["Dashboards", "Plotly Dash", "Streamlit"],
      hint: "Use Streamlit or Plotly Dash for interactive dashboards",
      icon: Layers,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 19,
      title: "Statistical Annotations",
      description:
        "Add statistical information and annotations to enhance plot interpretability.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "60 min",
      topics: ["Annotations", "Statistical Info", "Text"],
      hint: "Use plt.annotate() and add statistical test results",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 20,
      title: "Publication-Ready Figures",
      description:
        "Create high-quality, publication-ready figures with proper formatting and export.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "75 min",
      topics: ["Publication Quality", "Export", "High Resolution"],
      hint: "Use plt.savefig() with high dpi and proper format (svg, pdf)",
      icon: PieChart,
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
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <BarChart3 size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Data Visualization
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-6">
              Master Matplotlib, Seaborn, Plotly and create stunning
              visualizations for data analysis and storytelling
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-purple-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-purple-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-purple-100 text-sm">Progress</div>
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-2xl"
              />
              <BarChart3
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                          <Sparkles size={16} />
                          <span>Show Hint</span>
                        </summary>
                        <div className="mt-2 p-3 bg-purple-50 border-l-4 border-purple-400 rounded text-sm text-gray-700">
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
                        <div className="flex items-center justify-end gap-2 text-purple-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/pyDataVisual/${exercise.id}`}
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
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Data Visualization Libraries
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <LineChart className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Matplotlib
              </h3>
              <p className="text-gray-600 text-sm">
                Foundation library for creating static, animated, and
                interactive plots.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingUp className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seaborn</h3>
              <p className="text-gray-600 text-sm">
                Statistical visualizations with beautiful default themes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Activity className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plotly</h3>
              <p className="text-gray-600 text-sm">
                Interactive charts perfect for dashboards and web apps.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <BarChart3 className="text-purple-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pandas Plot
              </h3>
              <p className="text-gray-600 text-sm">
                Quick visualizations directly from DataFrame objects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Visualization Inspiration?
          </h2>
          {/* <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Explore our gallery of data visualization examples and best practices
          </p> */}
          <Link to="/py-visual-reference">
            <button className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PythonDataVisualization;
