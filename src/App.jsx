import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";
import Exercise from "./layouts/Exercise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import References from "./layouts/References";
import Projects from "./layouts/Projects";
import About from "./layouts/About";
import AllExercises from "./layouts/allExercises";
import ExerciseDetail from "./layouts/ExerciseDetails";



// reference pages
import CryptoReference from "./components/cryptoRef";
import CSSReference from "./components/cssRef";
import GitReference from "./components/gitRef";
import HtmlReferences from "./components/htmlRef";
import JavaScriptReference from "./components/javascriptRef";
import KaliReference from "./components/kaliRef";
import PyVisualReference from "./components/pyDataVisualRef";
import MLReference from "./components/pyMachineLearningRef";
import PythonReference from "./components/pyReference";
import ReactReference from "./components/reactRef";
import SQLReference from "./components/sqlRef";

//exercise pages
// import CryptoExercise from "./components/cryptoExercise";
import CssExercise from "./components/cssExercise";
import GitExercise from "./components/gitExercise";
import HtmlExercise from "./components/htmlExercise";
import JSExercise from "./components/jsExercise";
import KaliExercise from "./components/kaliExercise";
import PyDataVisualExercise from "./components/pyDataVisualExercise";
import PyMachineLearningExercise from "./components/pyMachineLearningExercise";
import ReactExercise from "./components/reactExercise";
import SqlExercise from "./components/sqlExercise";
import PythonExercise from "./components/pyExercise";
import Cryptography from "./components/cryptoExercise";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/reference" element={<References />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/allexercises" element={<AllExercises />} />
        <Route path="/exercise/:language/:id" element={<ExerciseDetail />} />

        {/* REFERENCE PAGES */}
        <Route path="/cryptography-reference" element={<CryptoReference />} />
        <Route path="/cssreference" element={<CSSReference />} />
        <Route path="/gitreference" element={<GitReference />} />
        <Route path="/htmlreferences" element={<HtmlReferences />} />
        <Route path="/javascript-reference" element={<JavaScriptReference />} />
        <Route path="/kali-linux-reference" element={<KaliReference />} />
        <Route path="/py-visual-reference" element={<PyVisualReference />} />
        <Route path="/machine-learning-reference" element={<MLReference />} />
        <Route path="/pythonreference" element={<PythonReference />} />
        <Route path="/reactreference" element={<ReactReference />} />
        <Route path="/sql-reference" element={<SQLReference />} />

        {/* EXERCISE PAGES */}
        <Route path="/cryptography" element={<Cryptography />} />
        <Route path="/css" element={<CssExercise />} />
        <Route path="/git" element={<GitExercise />} />
        <Route path="/html" element={<HtmlExercise />} />
        <Route path="/javascript" element={<JSExercise />} />
        <Route path="/kali-linux" element={<KaliExercise />} />
        <Route path="/python-visualization" element={<PyDataVisualExercise />} />
        <Route path="/python" element={<PythonExercise />} />
        <Route path="/react" element={<ReactExercise />} />
        <Route path="/sql" element={<SqlExercise />} />
        <Route path="/python-ml" element={<PyMachineLearningExercise />} />
      </Routes>
    </Router>
  );
}

export default App;
