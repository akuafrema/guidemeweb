import AllExercises from "./allExercises";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function ExerciseDetail() {
  const { language, id } = useParams();

  const list = AllExercises[language];
  const exercise = list?.find((item) => item.id === Number(id));

  // NEW: textarea and output state
  const [userCode, setUserCode] = useState("");
  const [result, setResult] = useState("");

  // NEW: run code (JS only)
  const runUserCode = () => {
    try {
      const output = eval(userCode);
      setResult(String(output) || "Code ran successfully.");
    } catch (err) {
      setResult("Error: " + err.message);
    }
  };

  if (!exercise) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Exercise Not Found</h2>
        <Link to="/" className="text-blue-500 underline mt-2 inline-block">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">

        {/* Gradient Title */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          {exercise.title}
        </h1>

        <p className="text-gray-700 mt-3 text-lg">{exercise.description}</p>

        {/* Example Section */}
        <div className="mt-8 p-5 rounded-lg shadow-sm border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
          <h2 className="font-semibold text-xl text-blue-700">Example</h2>
          <p className="bg-white p-3 rounded mt-2 shadow-sm text-gray-700 border border-gray-200">
            {exercise.example}
          </p>
        </div>

        {/* Steps Section */}
        <div className="mt-8 p-5 rounded-lg shadow-sm border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-white">
          <h2 className="font-semibold text-xl text-orange-700">Steps</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            {exercise.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg shadow-lg p-5 overflow-auto">
          <h2 className="font-semibold text-xl mb-3 text-orange-300">
            Code Example
          </h2>
          <pre className="text-white text-sm overflow-x-auto whitespace-pre-wrap">
            <code>{exercise.code}</code>
          </pre>
        </div>

        {/* NEW: Try It Yourself Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-600">Try It Yourself</h2>
          <p className="text-gray-600 mt-1">Type the example and run it.</p>

          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Type your code here..."
            className="w-full h-48 mt-3 p-3 border rounded-lg font-mono text-sm"
          ></textarea>

          <button
            onClick={runUserCode}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Run Code
          </button>

          <div className="mt-4 p-3 bg-black text-white rounded-lg min-h-[80px]">
            <h3 className="text-orange-300 text-sm">Console Output:</h3>
            <pre className="whitespace-pre-wrap text-sm mt-1">{result}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
