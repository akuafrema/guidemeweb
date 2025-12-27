import { useState } from "react";
import {
  Search,
  Lock,
  Shield,
  Key,
  Eye,
  CheckCircle,
  Code,
  BookOpen,
  ChevronRight,
  Trophy,
  Clock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
function Cryptography() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Caesar Cipher Encryption",
      description:
        "Implement a Caesar cipher that shifts each letter by a fixed number of positions in the alphabet.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Substitution Cipher", "String Manipulation"],
      hint: "Use modulo operation to wrap around the alphabet",
      solution:
        "Shift each character by the key value, wrapping around using mod 26",
      icon: Lock,
      color: "from-green-500 to-green-600",
      link: "/cryptography/caesar-cypher-encryption",
    },
    {
      id: 2,
      title: "Caesar Cipher Decryption",
      description:
        "Write a function to decrypt messages encrypted with Caesar cipher.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "15 min",
      topics: ["Substitution Cipher", "Decryption"],
      hint: "Decryption is just encryption with negative shift",
      solution: "Apply Caesar cipher with -key or 26-key as the shift",
      icon: Key,
      color: "from-green-500 to-green-600",
      link: "/cryptography/caesar-cypher-decryption",
    },
    {
      id: 3,
      title: "Frequency Analysis Attack",
      description:
        "Break a Caesar cipher by analyzing letter frequency in the encrypted text.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "30 min",
      topics: ["Cryptanalysis", "Statistical Analysis"],
      hint: "English letter 'E' is most common, compare with ciphertext",
      solution:
        "Count letter frequencies and compare with English language statistics",
      icon: Shield,
      color: "from-yellow-500 to-yellow-600",
      link: "/cryptography/frequency-analysis-attack",
    },
    {
      id: 4,
      title: "Vigenère Cipher",
      description:
        "Implement the Vigenère cipher using a keyword for polyalphabetic substitution.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Polyalphabetic Cipher", "Keywords"],
      hint: "Each letter uses a different Caesar shift based on the keyword",
      solution:
        "Use each keyword letter as a Caesar shift for corresponding plaintext letters",
      icon: Lock,
      color: "from-yellow-500 to-yellow-600",
      link: "/cryptography/cipher",
    },
    {
      id: 5,
      title: "Base64 Encoding",
      description:
        "Implement Base64 encoding algorithm from scratch without using libraries.",
      difficulty: "intermediate",
      points: 20,
      timeEstimate: "40 min",
      topics: ["Encoding", "Binary Operations"],
      hint: "Convert to binary, split into 6-bit chunks, map to Base64 alphabet",
      solution: "Group bits into 6-bit chunks and map to Base64 character set",
      icon: Code,
      color: "from-yellow-500 to-yellow-600",
      link: "/cryptography/base64-encoding",
    },
    {
      id: 6,
      title: "XOR Cipher",
      description:
        "Create an encryption system using XOR operation with a repeating key.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "20 min",
      topics: ["XOR Operation", "Bitwise Operations"],
      hint: "XOR each byte with the corresponding key byte (repeating the key)",
      solution: "XOR plaintext bytes with key bytes in a cycle",
      icon: Key,
      color: "from-green-500 to-green-600",
      link: "/cryptography/xor-cipher",
    },
    {
      id: 7,
      title: "One-Time Pad Implementation",
      description:
        "Implement a theoretically unbreakable one-time pad cipher with random key.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "35 min",
      topics: ["Perfect Security", "Random Keys"],
      hint: "Key must be truly random and as long as the message",
      solution: "XOR plaintext with a truly random key of equal length",
      icon: Shield,
      color: "from-yellow-500 to-yellow-600",
      link: "/cryptography/one-time-pad-templation",
    },
    {
      id: 8,
      title: "RSA Key Generation",
      description:
        "Generate RSA public and private key pairs using prime number selection.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "60 min",
      topics: [
        "Public Key Cryptography",
        "Prime Numbers",
        "Modular Arithmetic",
      ],
      hint: "Choose two large primes p and q, compute n = p*q and φ(n)",
      solution:
        "Select primes, compute totient, find e and d using extended Euclidean algorithm",
      icon: Key,
      color: "from-red-500 to-red-600",
      link: "/cryptography/rsa-key-generation",
    },
    {
      id: 9,
      title: "RSA Encryption & Decryption",
      description:
        "Implement RSA encryption and decryption using modular exponentiation.",
      difficulty: "advanced",
      points: 45,
      timeEstimate: "75 min",
      topics: ["RSA Algorithm", "Modular Exponentiation"],
      hint: "Use fast modular exponentiation to handle large numbers",
      solution: "C = M^e mod n for encryption, M = C^d mod n for decryption",
      icon: Lock,
      color: "from-red-500 to-red-600",
      link: "/cryptography/rsa-encryption-decryption",
    },
    {
      id: 10,
      title: "Hash Function (SHA-256 Basics)",
      description:
        "Understand and implement basic hashing operations and collision detection.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "50 min",
      topics: ["Hashing", "Collision Resistance"],
      hint: "Hash functions are one-way: easy to compute, hard to reverse",
      solution: "Use bitwise operations and rounds to create digest",
      icon: Shield,
      color: "from-red-500 to-red-600",
      link: "/cryptography/hash-function",
    },
    {
      id: 11,
      title: "Digital Signature Verification",
      description: "Create and verify digital signatures using RSA algorithm.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "60 min",
      topics: ["Digital Signatures", "Authentication"],
      hint: "Sign with private key, verify with public key",
      solution:
        "Hash message, encrypt hash with private key, decrypt with public key to verify",
      icon: Key,
      color: "from-red-500 to-red-600",
      link: "/cryptography/digital-signature-verification",
    },
    {
      id: 12,
      title: "Password Hashing with Salt",
      description: "Implement secure password storage using salted hashing.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "40 min",
      topics: ["Password Security", "Salting", "Hashing"],
      hint: "Add random salt before hashing to prevent rainbow table attacks",
      solution:
        "Generate random salt, concatenate with password, hash the result",
      icon: Lock,
      color: "from-yellow-500 to-yellow-600",
      link: "/cryptography/password-hashing",
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
        return "bg-yellow-100 text-yellow-700";
      case "advanced":
        return "bg-red-100 text-red-700";
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
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cryptography Exercises
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              Master encryption, decryption, and security algorithms through
              hands-on practice
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
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
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
                          <Eye size={16} />
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
                        href={`/exercise/cryptography/${exercise.id}`}
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
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Learning Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Cryptography Fundamentals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Lock className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Encryption
              </h3>
              <p className="text-gray-600 text-sm">
                Learn symmetric and asymmetric encryption algorithms to protect
                data confidentiality.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Key className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Key Management
              </h3>
              <p className="text-gray-600 text-sm">
                Master key generation, distribution, and secure storage
                techniques.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Shield className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Security Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Understand cryptanalysis and how to break weak encryption
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <BookOpen className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive cryptography reference guide
          </p>
          <Link
            to="/cryptography-reference"
            className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            View Reference Guide
          </Link>
          {/* <a
            to="/crptography-reference"
            className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg no-underline"
          >
            View Reference Guide
          </a> */}
        </div>
      </section>
    </div>
  );
}

export default Cryptography;
