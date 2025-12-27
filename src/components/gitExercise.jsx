import { useState } from "react";
import {
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Code,
  Layers,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
function Git() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Basic Git Setup",
      description:
        "Initialize a repository and configure your Git environment with proper user settings.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Configuration", "Init", "Setup"],
      hint: "Use git config to set user.name and user.email globally",
      icon: Terminal,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Committing Changes",
      description:
        "Learn to stage and commit changes effectively with meaningful commit messages.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["Staging", "Commit", "Git Log"],
      hint: "Use git add, git commit -m, and follow conventional commit format",
      icon: GitCommit,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Working with Branches",
      description:
        "Create, switch between, and manage branches in your Git repository.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "25 min",
      topics: ["Branches", "Checkout", "Branch Management"],
      hint: "Practice git branch, git checkout, and git switch commands",
      icon: GitBranch,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Understanding Git Status",
      description:
        "Master reading and interpreting git status output for better workflow.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Status", "Working Directory", "Staging Area"],
      hint: "Learn to identify tracked, untracked, and modified files",
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Merging Branches",
      description:
        "Practice merging branches and understand different merge strategies.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Merge", "Fast-forward", "Three-way Merge"],
      hint: "Understand when Git performs fast-forward vs three-way merges",
      icon: GitMerge,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 6,
      title: "Resolving Merge Conflicts",
      description:
        "Learn to identify and resolve merge conflicts when branches diverge.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Conflicts", "Resolution", "Merging"],
      hint: "Use git status to identify conflicts and edit conflict markers",
      icon: GitMerge,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Remote Repositories",
      description:
        "Connect to remote repositories and understand push/pull workflows.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "35 min",
      topics: ["Remote", "Push", "Pull", "Clone"],
      hint: "Practice git remote add, git push, and git pull commands",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "Pull Requests & Code Review",
      description:
        "Create pull requests and participate in collaborative code review.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Pull Requests", "Code Review", "Collaboration"],
      hint: "Push your branch and create a PR on GitHub/GitLab",
      icon: GitPullRequest,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "Git Stash Workflow",
      description: "Save work in progress without committing using git stash.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "25 min",
      topics: ["Stash", "Work in Progress", "Context Switching"],
      hint: "Use git stash, git stash pop, and git stash list",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Undoing Changes",
      description: "Master various techniques to undo changes in Git safely.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Reset", "Revert", "Checkout"],
      hint: "Learn differences between git reset, git revert, and git checkout",
      icon: Terminal,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Interactive Rebase",
      description:
        "Rewrite commit history using interactive rebasing techniques.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["Rebase", "History Rewriting", "Interactive"],
      hint: "Use git rebase -i to squash, reword, and reorder commits",
      icon: GitCommit,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 12,
      title: "Cherry Picking Commits",
      description:
        "Apply specific commits from one branch to another using cherry-pick.",
      difficulty: "advanced",
      points: 25,
      timeEstimate: "35 min",
      topics: ["Cherry-pick", "Selective Merging", "Commits"],
      hint: "Use git cherry-pick with commit hashes",
      icon: GitCommit,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 13,
      title: "Git Hooks & Automation",
      description: "Set up Git hooks to automate tasks in your workflow.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Hooks", "Automation", "Scripting"],
      hint: "Explore .git/hooks directory and create pre-commit hooks",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Advanced Git Log",
      description:
        "Master advanced git log options for powerful commit history analysis.",
      difficulty: "advanced",
      points: 25,
      timeEstimate: "40 min",
      topics: ["Git Log", "History", "Filtering"],
      hint: "Learn --graph, --oneline, --author, and --grep options",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Git Bisect Debugging",
      description: "Use binary search to find commits that introduced bugs.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "45 min",
      topics: ["Bisect", "Debugging", "Bug Hunting"],
      hint: "Use git bisect start, git bisect good, and git bisect bad",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "Submodules & Dependencies",
      description: "Manage external dependencies using Git submodules.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Submodules", "Dependencies", "Nested Repos"],
      hint: "Use git submodule add and git submodule update",
      icon: Layers,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Git Reflog Recovery",
      description: "Recover lost commits and branches using the reflog.",
      difficulty: "advanced",
      points: 30,
      timeEstimate: "40 min",
      topics: ["Reflog", "Recovery", "Lost Commits"],
      hint: "Use git reflog to find lost commits and git reset to recover",
      icon: GitBranch,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Branching Strategies",
      description:
        "Implement Git Flow, GitHub Flow, or trunk-based development.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "60 min",
      topics: ["Git Flow", "Strategy", "Workflow"],
      hint: "Learn feature branches, release branches, and hotfix patterns",
      icon: GitBranch,
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
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <GitBranch size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Git Exercises
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              Master version control, branching, merging, and collaborative
              workflows through hands-on practice
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
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-2xl"
              />
              <Terminal
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
                    ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg"
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
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700"
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
                        href={`/exercise/git/${exercise.id}`}
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
            <Terminal className="mx-auto text-gray-400 mb-4" size={64} />
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
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Git Core Concepts
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitCommit className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commits</h3>
              <p className="text-gray-600 text-sm">
                Save snapshots of your code with meaningful messages.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitBranch className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Branches</h3>
              <p className="text-gray-600 text-sm">
                Work on features independently without affecting main code.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitMerge className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Merging</h3>
              <p className="text-gray-600 text-sm">
                Combine changes from different branches seamlessly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitPullRequest className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-sm">
                Work with teams using pull requests and code reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive Git command reference guide
          </p>
          <Link to="/gitreference">
            <button className="inline-block px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View Git Reference
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Git;
