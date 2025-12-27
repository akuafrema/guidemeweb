import { useState } from "react";
import {
  Terminal,
  Shield,
  Lock,
  Search,
  Network,
  Bug,
  Wifi,
  Key,
  CheckCircle,
  Clock,
  Trophy,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Eye,
  Fingerprint,
} from "lucide-react";
import { Link } from "react-router-dom";
function Kali() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      title: "Kali Linux Basics",
      description:
        "Get familiar with Kali Linux environment, terminal commands, and file system navigation.",
      difficulty: "beginner",
      points: 10,
      timeEstimate: "20 min",
      topics: ["Terminal", "Navigation", "Basic Commands"],
      hint: "Practice ls, cd, pwd, mkdir, and file manipulation commands",
      icon: Terminal,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Network Scanning with Nmap",
      description:
        "Learn to scan networks and discover hosts, open ports, and running services.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "30 min",
      topics: ["Nmap", "Port Scanning", "Network Discovery"],
      hint: "Use nmap -sV for service detection and -sS for stealth scanning",
      icon: Network,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Information Gathering",
      description:
        "Collect information about targets using OSINT techniques and reconnaissance tools.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "35 min",
      topics: ["OSINT", "Reconnaissance", "Footprinting"],
      hint: "Use tools like whois, theHarvester, and Maltego for information gathering",
      icon: Search,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "WiFi Security Analysis",
      description:
        "Analyze wireless networks and understand WiFi security protocols.",
      difficulty: "beginner",
      points: 20,
      timeEstimate: "40 min",
      topics: ["WiFi", "Aircrack-ng", "Wireless Security"],
      hint: "Learn about monitor mode, packet capture, and WPA/WPA2 protocols",
      icon: Wifi,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Password Cracking Basics",
      description:
        "Introduction to password cracking techniques using John the Ripper and Hashcat.",
      difficulty: "beginner",
      points: 15,
      timeEstimate: "35 min",
      topics: ["Password Cracking", "John the Ripper", "Hashcat"],
      hint: "Understand hash types and dictionary attacks before brute force",
      icon: Key,
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Vulnerability Scanning",
      description:
        "Use automated tools to identify vulnerabilities in systems and applications.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Vulnerability Scanning", "OpenVAS", "Nessus"],
      hint: "Learn to interpret scan results and prioritize vulnerabilities by severity",
      icon: Bug,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Metasploit Framework",
      description:
        "Master the Metasploit framework for exploitation and post-exploitation tasks.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "60 min",
      topics: ["Metasploit", "Exploitation", "Payloads"],
      hint: "Use msfconsole, understand exploit modules, and practice payload generation",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 8,
      title: "Web Application Testing",
      description:
        "Test web applications for common vulnerabilities using Burp Suite and OWASP ZAP.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "55 min",
      topics: ["Web Security", "Burp Suite", "OWASP Top 10"],
      hint: "Focus on SQL injection, XSS, and CSRF vulnerabilities",
      icon: Search,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 9,
      title: "SQL Injection Attacks",
      description:
        "Learn to identify and exploit SQL injection vulnerabilities in web applications.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "50 min",
      topics: ["SQL Injection", "SQLMap", "Database Security"],
      hint: "Use SQLMap for automated exploitation and understand manual injection",
      icon: Bug,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 10,
      title: "Social Engineering Toolkit",
      description:
        "Practice social engineering attacks using SET and understand human vulnerability.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "45 min",
      topics: ["Social Engineering", "SET", "Phishing"],
      hint: "Focus on credential harvesting and phishing campaigns ethically",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 11,
      title: "Privilege Escalation",
      description:
        "Learn techniques to escalate privileges on Linux and Windows systems.",
      difficulty: "intermediate",
      points: 30,
      timeEstimate: "60 min",
      topics: ["Privilege Escalation", "Linux", "Windows"],
      hint: "Check for SUID binaries, kernel exploits, and misconfigured services",
      icon: Lock,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 12,
      title: "Network Traffic Analysis",
      description:
        "Analyze network traffic using Wireshark to detect suspicious activity.",
      difficulty: "intermediate",
      points: 25,
      timeEstimate: "50 min",
      topics: ["Wireshark", "Packet Analysis", "Network Forensics"],
      hint: "Learn to use filters, follow TCP streams, and identify protocols",
      icon: Network,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 13,
      title: "Advanced Exploitation",
      description:
        "Master buffer overflow attacks and advanced exploitation techniques.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "90 min",
      topics: ["Buffer Overflow", "Exploit Development", "Assembly"],
      hint: "Understand stack operations, shellcode, and exploit mitigations",
      icon: Bug,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 14,
      title: "Active Directory Attacks",
      description:
        "Attack and compromise Active Directory environments using various techniques.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "90 min",
      topics: ["Active Directory", "Domain Attacks", "Kerberos"],
      hint: "Learn Pass-the-Hash, Golden Ticket, and Kerberoasting attacks",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 15,
      title: "Post-Exploitation",
      description:
        "Maintain access, gather credentials, and move laterally in compromised networks.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "75 min",
      topics: ["Post-Exploitation", "Lateral Movement", "Persistence"],
      hint: "Use Mimikatz for credential dumping and establish persistence mechanisms",
      icon: Key,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 16,
      title: "Wireless Penetration Testing",
      description:
        "Advanced WiFi attacks including WPS cracking and evil twin attacks.",
      difficulty: "advanced",
      points: 35,
      timeEstimate: "80 min",
      topics: ["WiFi Hacking", "WPS", "Evil Twin"],
      hint: "Use Reaver for WPS attacks and hostapd for rogue access points",
      icon: Wifi,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 17,
      title: "Reverse Engineering",
      description:
        "Analyze and reverse engineer malware and compiled binaries.",
      difficulty: "advanced",
      points: 40,
      timeEstimate: "90 min",
      topics: ["Reverse Engineering", "Ghidra", "IDA Pro"],
      hint: "Learn assembly language basics and use debuggers effectively",
      icon: Fingerprint,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 18,
      title: "Red Team Operations",
      description:
        "Conduct full penetration testing engagement from reconnaissance to reporting.",
      difficulty: "advanced",
      points: 50,
      timeEstimate: "120 min",
      topics: ["Penetration Testing", "Red Team", "Full Engagement"],
      hint: "Follow proper methodology: reconnaissance, exploitation, post-exploitation, reporting",
      icon: AlertTriangle,
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
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kali Linux Exercises
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Master penetration testing, vulnerability assessment, and ethical
              hacking with Kali Linux tools
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
              <Terminal
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          </div>

          {/* Warning Badge */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={20}
                  className="text-red-300 flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-red-100">
                  <strong>Ethical Use Only:</strong> These exercises are for
                  educational purposes. Only practice on systems you own or have
                  explicit permission to test.
                </p>
              </div>
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
                        href={`/exercise/kali/${exercise.id}`}
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
            Kali Linux Core Skills
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Network className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Reconnaissance
              </h3>
              <p className="text-gray-600 text-sm">
                Gather intelligence and map target infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Bug className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Exploitation
              </h3>
              <p className="text-gray-600 text-sm">
                Identify and exploit vulnerabilities in systems.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Lock className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Post-Exploitation
              </h3>
              <p className="text-gray-600 text-sm">
                Maintain access and extract valuable information.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Shield className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Defense</h3>
              <p className="text-gray-600 text-sm">
                Understand security measures and countermeasures.
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
            Ready to Start Practicing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Set up your own lab environment to practice these techniques safely
            and legally
          </p>
          <Link to="/kali-linux-reference">
            <button className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View References
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Kali;
