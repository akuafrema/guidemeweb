import { useState } from "react";
import {
  Brain,
  TrendingUp,
  Network,
  Target,
  Zap,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Cpu,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
function PythonMachineLearning() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Data Preprocessing & Feature Engineering",
      description:
        "Master data cleaning, handling missing values, feature scaling, encoding categorical variables, and feature selection techniques.",
      difficulty: "beginner",
      points: 25,
      timeEstimate: "60 min",
      topics: [
        "Data Cleaning",
        "Feature Scaling",
        "Encoding",
        "Feature Selection",
      ],
      hint: "Use sklearn.preprocessing for scaling and encoding, handle missing values with mean/median/mode",
      icon: Database,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Linear & Logistic Regression",
      description:
        "Build and evaluate linear regression models for continuous predictions and logistic regression for binary classification.",
      difficulty: "beginner",
      points: 30,
      timeEstimate: "75 min",
      topics: ["Linear Regression", "Logistic Regression", "Model Evaluation"],
      hint: "Use sklearn LinearRegression and LogisticRegression, evaluate with MSE, R², accuracy, and confusion matrix",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Decision Trees & Random Forests",
      description:
        "Implement decision tree classifiers and ensemble methods using random forests for improved accuracy and robustness.",
      difficulty: "intermediate",
      points: 35,
      timeEstimate: "90 min",
      topics: ["Decision Trees", "Random Forests", "Ensemble Methods"],
      hint: "Use DecisionTreeClassifier and RandomForestClassifier, tune max_depth and n_estimators",
      icon: Network,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 4,
      title: "Support Vector Machines (SVM)",
      description:
        "Apply SVM for classification and regression tasks, understanding kernels and hyperparameter tuning.",
      difficulty: "intermediate",
      points: 35,
      timeEstimate: "85 min",
      topics: ["SVM", "Kernels", "Classification", "Hyperparameters"],
      hint: "Experiment with different kernels (linear, rbf, poly) and tune C and gamma parameters",
      icon: Target,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 5,
      title: "K-Means Clustering & PCA",
      description:
        "Implement unsupervised learning with K-means clustering and dimensionality reduction using Principal Component Analysis.",
      difficulty: "intermediate",
      points: 35,
      timeEstimate: "80 min",
      topics: ["Clustering", "K-Means", "PCA", "Unsupervised Learning"],
      hint: "Use elbow method to find optimal K, apply PCA for dimensionality reduction and visualization",
      icon: Network,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 6,
      title: "Neural Networks with TensorFlow/Keras",
      description:
        "Build deep learning models using neural networks for complex pattern recognition and prediction tasks.",
      difficulty: "advanced",
      points: 45,
      timeEstimate: "120 min",
      topics: ["Neural Networks", "Deep Learning", "TensorFlow", "Keras"],
      hint: "Start with Sequential model, use Dense layers, apply activation functions, and compile with optimizer",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 7,
      title: "Natural Language Processing (NLP)",
      description:
        "Process text data, perform sentiment analysis, and build NLP models using techniques like TF-IDF and word embeddings.",
      difficulty: "advanced",
      points: 45,
      timeEstimate: "110 min",
      topics: [
        "NLP",
        "Text Processing",
        "Sentiment Analysis",
        "Word Embeddings",
      ],
      hint: "Use CountVectorizer, TfidfVectorizer, or word2vec for feature extraction from text",
      icon: Cpu,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 8,
      title: "Model Evaluation & Cross-Validation",
      description:
        "Master advanced evaluation techniques including cross-validation, grid search, and comprehensive model performance metrics.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "100 min",
      topics: [
        "Cross-Validation",
        "Grid Search",
        "Model Metrics",
        "Evaluation",
      ],
      hint: "Use cross_val_score, GridSearchCV, and metrics like precision, recall, F1-score, ROC-AUC",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 9,
      title: "Gradient Boosting & XGBoost",
      description:
        "Implement state-of-the-art gradient boosting algorithms including XGBoost for competition-level performance.",
      difficulty: "advanced",
      points: 45,
      timeEstimate: "115 min",
      topics: ["Gradient Boosting", "XGBoost", "Advanced Ensemble"],
      hint: "Install xgboost library, tune learning_rate, max_depth, n_estimators for optimal performance",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 10,
      title: "End-to-End ML Pipeline Project",
      description:
        "Build a complete machine learning pipeline from data collection to model deployment, including all preprocessing, training, and evaluation steps.",
      difficulty: "advanced",
      points: 60,
      timeEstimate: "180 min",
      topics: ["ML Pipeline", "Project", "Deployment", "Full Workflow"],
      hint: "Follow the complete ML workflow: data collection → preprocessing → model selection → training → evaluation → deployment",
      icon: Network,
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
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Brain size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Machine Learning
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-6">
              Master supervised and unsupervised learning, neural networks, and
              build production-ready ML models with scikit-learn and TensorFlow
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completedExercises.length}/{exercises.length}
                </div>
                <div className="text-indigo-100 text-sm">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-indigo-100 text-sm">Points Earned</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">
                  {completionPercentage}%
                </div>
                <div className="text-indigo-100 text-sm">Progress</div>
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
              <Brain
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
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Hint */}
                      <details className="group">
                        <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                          <Sparkles size={16} />
                          <span>Show Hint</span>
                        </summary>
                        <div className="mt-2 p-3 bg-indigo-50 border-l-4 border-indigo-400 rounded text-sm text-gray-700">
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
                        <div className="flex items-center justify-end gap-2 text-indigo-600">
                          <Trophy size={16} />
                          <span className="text-sm font-bold">
                            {exercise.points} pts
                          </span>
                        </div>
                      </div>
                      <a
                        href={`/exercise/pyML/${exercise.id}`}
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
            <Brain className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Machine Learning Fundamentals
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingUp className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Supervised
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from labeled data for classification and regression tasks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Network className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Unsupervised
              </h3>
              <p className="text-gray-600 text-sm">
                Discover patterns in unlabeled data through clustering and PCA.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Brain className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Deep Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Build neural networks for complex pattern recognition tasks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Target className="text-indigo-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Evaluation
              </h3>
              <p className="text-gray-600 text-sm">
                Assess model performance with proper metrics and validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build AI Models?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Access datasets, code templates, and ML resources to accelerate your
            learning
          </p>
          <Link to="/machine-learning-reference">
            <button className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View ML References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PythonMachineLearning;
