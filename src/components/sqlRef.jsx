import { Database, Table, Binary, ListTree, Search, Key, BookOpen } from "lucide-react";

export default function SqlReference() {
  const sections = [
    {
      title: "Basic SQL Commands",
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { name: "SELECT", desc: "Retrieve data from a table", syntax: "SELECT column1, column2 FROM table;" },
        { name: "WHERE", desc: "Filter records", syntax: "SELECT * FROM table WHERE condition;" },
        { name: "ORDER BY", desc: "Sort result set", syntax: "SELECT * FROM table ORDER BY column ASC|DESC;" },
        { name: "LIMIT", desc: "Limit number of results", syntax: "SELECT * FROM table LIMIT 10;" }
      ]
    },
    {
      title: "Table Operations",
      icon: Table,
      gradient: "from-purple-500 to-pink-500",
      items: [
        { name: "CREATE TABLE", desc: "Create a new table", syntax: "CREATE TABLE users (id INT, name VARCHAR(50));" },
        { name: "DROP TABLE", desc: "Delete a table", syntax: "DROP TABLE users;" },
        { name: "ALTER TABLE", desc: "Modify table structure", syntax: "ALTER TABLE users ADD COLUMN age INT;" },
        { name: "TRUNCATE", desc: "Delete all rows", syntax: "TRUNCATE TABLE users;" }
      ]
    },
    {
      title: "Insert, Update & Delete",
      icon: Binary,
      gradient: "from-green-500 to-emerald-500",
      items: [
        { name: "INSERT", desc: "Add new rows", syntax: "INSERT INTO users (name, age) VALUES ('John', 25);" },
        { name: "UPDATE", desc: "Modify existing rows", syntax: "UPDATE users SET age=30 WHERE id=1;" },
        { name: "DELETE", desc: "Remove rows", syntax: "DELETE FROM users WHERE id=1;" }
      ]
    },
    {
      title: "Joins",
      icon: ListTree,
      gradient: "from-orange-500 to-red-500",
      items: [
        { name: "INNER JOIN", desc: "Return matching rows", syntax: "SELECT * FROM a INNER JOIN b ON a.id=b.a_id;" },
        { name: "LEFT JOIN", desc: "Include all from left table", syntax: "SELECT * FROM a LEFT JOIN b ON a.id=b.a_id;" },
        { name: "RIGHT JOIN", desc: "Include all from right table", syntax: "SELECT * FROM a RIGHT JOIN b ON a.id=b.a_id;" },
        { name: "FULL JOIN", desc: "Include rows from both sides", syntax: "SELECT * FROM a FULL JOIN b ON a.id=b.a_id;" }
      ]
    },
    {
      title: "Searching & Filtering",
      icon: Search,
      gradient: "from-indigo-500 to-purple-500",
      items: [
        { name: "LIKE", desc: "Pattern matching", syntax: "SELECT * FROM users WHERE name LIKE 'J%';" },
        { name: "IN", desc: "Match multiple values", syntax: "SELECT * FROM users WHERE id IN (1, 2, 3);" },
        { name: "BETWEEN", desc: "Search between values", syntax: "SELECT * FROM products WHERE price BETWEEN 10 AND 50;" },
        { name: "IS NULL", desc: "Check empty values", syntax: "SELECT * FROM users WHERE email IS NULL;" }
      ]
    },
    {
      title: "Keys & Constraints",
      icon: Key,
      gradient: "from-yellow-500 to-orange-500",
      items: [
        { name: "PRIMARY KEY", desc: "Unique identifier for rows", syntax: "id INT PRIMARY KEY" },
        { name: "FOREIGN KEY", desc: "Link between tables", syntax: "FOREIGN KEY (user_id) REFERENCES users(id)" },
        { name: "UNIQUE", desc: "Values must be unique", syntax: "email VARCHAR(50) UNIQUE" },
        { name: "CHECK", desc: "Validate data", syntax: "age INT CHECK (age >= 18)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Database className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent mb-3">
            SQL Reference Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete reference for SQL queries, table operations, joins, filtering, and database concepts.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.gradient} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                </div>

                {/* Items */}
                <div className="p-6 space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-l-4 border-gray-200 hover:border-indigo-400 pl-4 py-2 transition-colors duration-200">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                      <code className="block text-xs bg-gray-50 text-gray-800 p-2 rounded font-mono overflow-x-auto">
                        {item.syntax}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 mt-1">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Quick Tips</h3>
              <ul className="space-y-2 text-indigo-50">
                <li>• Always use PRIMARY KEY for unique identification</li>
                <li>• Use JOINs to combine tables efficiently</li>
                <li>• Normalize data to reduce redundancy</li>
                <li>• Use indexing to speed up searches</li>
                <li>• Avoid SELECT * in large tables — select only needed columns</li>
                <li>• Use LIMIT during testing to avoid huge result sets</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>SQL {new Date().getFullYear()} • Comprehensive Reference Guide</p>
        </div>
      </div>
    </div>
  );
}
