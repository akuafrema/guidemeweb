// src/components/MultiLangTryIt.jsx
import { useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import PropTypes from "prop-types";

/*
  MultiLangTryIt
  - Languages supported: "javascript", "html", "css", "python"
  - Python runs via Pyodide (loaded dynamically)
  - JS/HTML/CSS run in a sandboxed iframe (srcdoc)
  - Basic output console is provided for Python and messages
*/

const SAMPLE = {
  javascript: `// JavaScript example
const el = document.createElement("div");
el.innerHTML = "<h2 style='color: #1f6feb'>Hello from JavaScript!</h2>";
document.body.appendChild(el);
console.log("JS executed");`,

  html: `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Preview</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 16px; }
  </style>
</head>
<body>
  <h1 style="color:#1f6feb">Hello HTML Preview</h1>
  <p>Edit the HTML on the left and press Run</p>
</body>
</html>`,

  css: `/* CSS only preview: styles will be injected into a simple HTML wrapper */
body { font-family: system-ui, sans-serif; padding: 16px; }
h1 { color: #f97316; }`,

  python: `# Python example
print("Hello from Pyodide (Python)!")
for i in range(3):
    print("Line", i+1)`,
};

export default function MultiLangTryIt({ defaultLanguage = "javascript" }) {
  const [language, setLanguage] = useState(defaultLanguage);
  const [code, setCode] = useState(SAMPLE[defaultLanguage] || "");
  const [output, setOutput] = useState("");
  const iframeRef = useRef(null);
  const pyodideRef = useRef(null);
  const [pyLoading, setPyLoading] = useState(false);
  const [editorKey, setEditorKey] = useState(0); // force editor re-mount when language changes

  // map language -> codemirror extension
  const extMap = {
    javascript: javascript(),
    html: html(),
    css: css(),
    python: python(),
  };

  // When language dropdown changes, load sample code and remount editor
  useEffect(() => {
    setCode(SAMPLE[language] || "");
    setEditorKey((k) => k + 1);
    setOutput("");
  }, [language]);

  // Utility: write preview content into iframe
  const postToPreview = (srcdoc) => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.srcdoc = srcdoc;
  };

  // Load Pyodide lazily (only when needed)
  const ensurePyodide = async () => {
    if (pyodideRef.current) return pyodideRef.current;
    setPyLoading(true);
    setOutput((o) => o + "Loading Python runtime (Pyodide)...\n");
    // Load from official CDN
    // loadPyodide is provided by the pyodide.js script; we dynamically import pyodide
    try {
      
      await new Promise((resolve, reject) => {
        if (window.loadPyodide) return resolve();
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        s.onload = () => resolve();
        s.onerror = reject;
        document.head.appendChild(s);
      });
      const pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
      });
      pyodideRef.current = pyodide;
      setOutput((o) => o + "Pyodide loaded.\n");
      setPyLoading(false);
      return pyodide;
    } catch (err) {
      setOutput((o) => o + "Failed to load Pyodide: " + err + "\n");
      setPyLoading(false);
      throw err;
    }
  };

 
  const handleRun = async () => {
    setOutput("");
    if (language === "javascript") {
      
      const htmlDoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JS Preview</title>
    <style>body{font-family:system-ui;padding:16px}</style>
  </head>
  <body>
    <div id="app"></div>
    <script>
      (function() {
        try {
          ${code}
        } catch (e) {
          const pre = document.createElement('pre');
          pre.style.color = 'red';
          pre.textContent = e.toString();
          document.body.appendChild(pre);
          console.error(e);
        }
      })();
    </script>
  </body>
</html>`;
      postToPreview(htmlDoc);
      setOutput("JavaScript executed in preview (console visible in browser devtools).");
      return;
    }

    if (language === "html") {
      
      postToPreview(code);
      setOutput("Rendered HTML in preview.");
      return;
    }

    if (language === "css") {
      
      const htmlDoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CSS Preview</title>
    <style>
      ${code}
    </style>
  </head>
  <body>
    <h1>CSS Preview</h1>
    <p>Edit CSS on the left to change styling here.</p>
  </body>
</html>`;
      postToPreview(htmlDoc);
      setOutput("Rendered CSS preview.");
      return;
    }

    if (language === "python") {
      try {
        const pyodide = await ensurePyodide();
        setOutput((o) => o + "Running Python...\n");

        
        const runWrapped = `
import sys, io
_old_stdout = sys.stdout
_old_stderr = sys.stderr
buf = io.StringIO()
sys.stdout = buf
sys.stderr = buf
try:
${code.split("\n").map((l) => "  " + l).join("\n")}
except Exception as e:
  import traceback
  traceback.print_exc()
finally:
  sys.stdout = _old_stdout
  sys.stderr = _old_stderr
buf.getvalue()
`;
        const result = await pyodide.runPythonAsync(runWrapped);
        setOutput(String(result || "").trim() || "(no output)");
      } catch (err) {
        setOutput("Python runtime error: " + String(err));
      }
      return;
    }

    setOutput("Language not supported");
  };

  
  const languageOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "python", label: "Python (Pyodide)" },
  ];

  return (
    <div className="min-h-[640px] bg-white rounded-lg shadow-md border border-gray-100 p-4">
      {/* header - language selector + run button */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded border px-2 py-1"
          >
            {languageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setCode(SAMPLE[language] || "");
              setOutput("");
            }}
            className="ml-2 text-sm px-2 py-1 border rounded"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs text-gray-500 mr-2">Output / Preview</div>
          <button
            onClick={handleRun}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded shadow hover:scale-[1.02] transition"
            disabled={pyLoading}
            title={pyLoading ? "Pyodide loading..." : "Run code"}
          >
            {pyLoading ? "Loading Python..." : "Run »"}
          </button>
        </div>
      </div>

      <div className="flex gap-4 h-[520px]">
        {/* Editor */}
        <div className="w-1/2 h-full border rounded">
          <CodeMirror
            key={editorKey}
            value={code}
            height="100%"
            theme={oneDark}
            extensions={[extMap[language]]}
            onChange={(value) => setCode(value)}
            style={{ borderRadius: 6 }}
          />
        </div>

        
        <div className="w-1/2 h-full flex flex-col gap-3">
          <div className="flex-1 border rounded overflow-hidden">
            <iframe
              ref={iframeRef}
              title="preview"
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          <div className="h-40 border rounded p-2 overflow-auto bg-black text-white">
            <div className="text-xs text-gray-300 mb-1">Console</div>
            <pre className="whitespace-pre-wrap text-sm">{output || "(no output yet)"}</pre>
          </div>
        </div>
      </div>

      
      <div className="mt-3 text-sm text-gray-500">
        <strong>Notes:</strong> Python runs using Pyodide in the browser. SQL, Git, and system-level tools like Kali cannot be executed inside the browser — they require server-side support or simulated labs. Cryptography examples can run either in JavaScript (Web Crypto API) or in Python under Pyodide.
      </div>
    </div>
  );
}
MultiLangTryIt.propTypes = {
  defaultLanguage: PropTypes.oneOf([
    "javascript",
    "html",
    "css",
    "python",
  ]),
};
