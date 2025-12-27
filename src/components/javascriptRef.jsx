import { useState } from 'react';
import { Search, Code, Zap, Database, Box, Hash, ChevronDown, ChevronRight, Layers, Filter, RefreshCw } from 'lucide-react';

export default function JavaScriptReference() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const referenceData = [
    {
      id: 'variables',
      title: 'Variables & Data Types',
      icon: Database,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        {
          name: 'let',
          syntax: 'let variableName = value;',
          description: 'Declares a block-scoped variable (ES6+)',
          example: 'let name = "John";\nlet age = 25;\nlet isActive = true;',
          use: 'Preferred for variables that will be reassigned, block-scoped'
        },
        {
          name: 'const',
          syntax: 'const CONSTANT_NAME = value;',
          description: 'Declares a block-scoped constant that cannot be reassigned',
          example: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";',
          use: 'Use for values that won\'t change, best practice for most declarations'
        },
        {
          name: 'var',
          syntax: 'var variableName = value;',
          description: 'Declares a function-scoped variable (legacy)',
          example: 'var count = 0;\nvar message = "Hello";',
          use: 'Avoid in modern code, use let or const instead'
        },
        {
          name: 'typeof',
          syntax: 'typeof value',
          description: 'Returns the type of a value as a string',
          example: 'typeof 42  // "number"\ntypeof "text"  // "string"\ntypeof true  // "boolean"',
          use: 'Check variable types at runtime'
        },
        {
          name: 'Number',
          syntax: 'Number(value)',
          description: 'Converts value to number or creates number',
          example: 'Number("42")  // 42\nNumber("3.14")  // 3.14\nparseInt("10")  // 10',
          use: 'Type conversion, integer and float operations'
        },
        {
          name: 'String',
          syntax: 'String(value) or "text" or `template`',
          description: 'Text data enclosed in quotes',
          example: 'const name = "Alice";\nconst greeting = `Hello ${name}`;',
          use: 'Template literals with ${} for interpolation'
        }
      ]
    },
    {
      id: 'operators',
      title: 'Operators',
      icon: Hash,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Arithmetic',
          syntax: '+ - * / % **',
          description: 'Mathematical operations',
          example: '5 + 3  // 8\n10 - 4  // 6\n2 ** 3  // 8 (exponent)',
          use: 'Basic math, modulo (%), exponentiation (**)'
        },
        {
          name: 'Assignment',
          syntax: '= += -= *= /= %=',
          description: 'Assign and compound assignment operators',
          example: 'let x = 10;\nx += 5;  // x = 15\nx *= 2;  // x = 30',
          use: 'Assign values and modify in place'
        },
        {
          name: 'Comparison',
          syntax: '== === != !== < > <= >=',
          description: 'Compare values and return boolean',
          example: '5 === 5  // true\n"5" === 5  // false\n10 > 5  // true',
          use: 'Always use === and !== (strict equality)'
        },
        {
          name: 'Logical',
          syntax: '&& || !',
          description: 'Boolean logic operators',
          example: 'true && false  // false\ntrue || false  // true\n!true  // false',
          use: 'Combine conditions, short-circuit evaluation'
        },
        {
          name: 'Ternary',
          syntax: 'condition ? valueIfTrue : valueIfFalse',
          description: 'Conditional operator (shorthand if-else)',
          example: 'const status = age >= 18 ? "adult" : "minor";\nconst result = score > 60 ? "pass" : "fail";',
          use: 'Inline conditional expressions'
        },
        {
          name: 'Nullish Coalescing',
          syntax: '??',
          description: 'Returns right side if left is null/undefined',
          example: 'const value = null ?? "default";  // "default"\nconst num = 0 ?? 10;  // 0',
          use: 'Provide defaults only for null/undefined (not 0 or "")'
        },
        {
          name: 'Optional Chaining',
          syntax: '?.',
          description: 'Safely access nested properties',
          example: 'const name = user?.profile?.name;\nconst result = obj?.method?.();',
          use: 'Avoid errors when accessing potentially undefined properties'
        }
      ]
    },
    {
      id: 'functions',
      title: 'Functions',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'Function Declaration',
          syntax: 'function name(params) { }',
          description: 'Named function that can be hoisted',
          example: 'function greet(name) {\n  return `Hello, ${name}!`;\n}',
          use: 'Traditional function syntax, hoisted to top of scope'
        },
        {
          name: 'Arrow Function',
          syntax: '(params) => expression',
          description: 'Concise function syntax with lexical this',
          example: 'const add = (a, b) => a + b;\nconst square = x => x * x;\nconst greet = name => `Hello ${name}`;',
          use: 'Modern, concise syntax. Implicit return for single expressions'
        },
        {
          name: 'Function Expression',
          syntax: 'const name = function(params) { }',
          description: 'Function assigned to variable',
          example: 'const multiply = function(a, b) {\n  return a * b;\n};',
          use: 'Not hoisted, can be anonymous'
        },
        {
          name: 'Default Parameters',
          syntax: 'function(param = defaultValue)',
          description: 'Provide default values for parameters',
          example: 'function greet(name = "Guest") {\n  return `Hello, ${name}`;\n}',
          use: 'Set defaults when arguments not provided'
        },
        {
          name: 'Rest Parameters',
          syntax: 'function(...args)',
          description: 'Collect remaining arguments into array',
          example: 'function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}',
          use: 'Handle variable number of arguments'
        },
        {
          name: 'Destructuring Parameters',
          syntax: 'function({prop1, prop2})',
          description: 'Extract properties from object parameters',
          example: 'function display({name, age}) {\n  console.log(name, age);\n}',
          use: 'Cleaner access to object properties in parameters'
        }
      ]
    },
    {
      id: 'arrays',
      title: 'Array Methods',
      icon: Box,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'map()',
          syntax: 'array.map(callback)',
          description: 'Creates new array by transforming each element',
          example: 'const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\n// [2, 4, 6]',
          use: 'Transform array elements, returns new array'
        },
        {
          name: 'filter()',
          syntax: 'array.filter(callback)',
          description: 'Creates new array with elements that pass test',
          example: 'const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\n// [2, 4]',
          use: 'Select subset of array based on condition'
        },
        {
          name: 'reduce()',
          syntax: 'array.reduce(callback, initialValue)',
          description: 'Reduces array to single value',
          example: 'const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, n) => acc + n, 0);\n// 10',
          use: 'Accumulate values, sum, product, or complex transformations'
        },
        {
          name: 'forEach()',
          syntax: 'array.forEach(callback)',
          description: 'Executes function for each element',
          example: 'const nums = [1, 2, 3];\nnums.forEach(n => console.log(n));',
          use: 'Iterate with side effects, doesn\'t return new array'
        },
        {
          name: 'find()',
          syntax: 'array.find(callback)',
          description: 'Returns first element that matches condition',
          example: 'const users = [{id: 1}, {id: 2}];\nconst user = users.find(u => u.id === 2);',
          use: 'Find single element in array'
        },
        {
          name: 'some() / every()',
          syntax: 'array.some(callback) / array.every(callback)',
          description: 'Test if some/all elements pass condition',
          example: 'const nums = [1, 2, 3];\nnums.some(n => n > 2);  // true\nnums.every(n => n > 0);  // true',
          use: 'Boolean tests on array elements'
        },
        {
          name: 'sort()',
          syntax: 'array.sort(compareFunction)',
          description: 'Sorts array in place',
          example: 'const nums = [3, 1, 2];\nnums.sort((a, b) => a - b);  // [1, 2, 3]',
          use: 'Sort numerically with compare function'
        },
        {
          name: 'push() / pop()',
          syntax: 'array.push(item) / array.pop()',
          description: 'Add/remove from end of array',
          example: 'const arr = [1, 2];\narr.push(3);  // [1, 2, 3]\narr.pop();  // [1, 2]',
          use: 'Stack operations, modify original array'
        }
      ]
    },
    {
      id: 'objects',
      title: 'Objects',
      icon: Layers,
      color: 'from-teal-500 to-teal-600',
      items: [
        {
          name: 'Object Literal',
          syntax: '{ key: value }',
          description: 'Create object with properties',
          example: 'const person = {\n  name: "Alice",\n  age: 30,\n  greet() { return "Hi"; }\n};',
          use: 'Most common way to create objects'
        },
        {
          name: 'Object.keys()',
          syntax: 'Object.keys(obj)',
          description: 'Returns array of object\'s keys',
          example: 'const obj = {a: 1, b: 2};\nObject.keys(obj);  // ["a", "b"]',
          use: 'Get all property names as array'
        },
        {
          name: 'Object.values()',
          syntax: 'Object.values(obj)',
          description: 'Returns array of object\'s values',
          example: 'const obj = {a: 1, b: 2};\nObject.values(obj);  // [1, 2]',
          use: 'Get all property values as array'
        },
        {
          name: 'Object.entries()',
          syntax: 'Object.entries(obj)',
          description: 'Returns array of [key, value] pairs',
          example: 'const obj = {a: 1, b: 2};\nObject.entries(obj);  // [["a", 1], ["b", 2]]',
          use: 'Iterate over key-value pairs'
        },
        {
          name: 'Destructuring',
          syntax: 'const { prop } = obj',
          description: 'Extract properties from object',
          example: 'const {name, age} = person;\nconst {x, y} = {x: 10, y: 20};',
          use: 'Clean way to extract multiple properties'
        },
        {
          name: 'Spread Operator',
          syntax: '{ ...obj }',
          description: 'Copy or merge objects',
          example: 'const copy = {...original};\nconst merged = {...obj1, ...obj2};',
          use: 'Clone objects, merge properties'
        },
        {
          name: 'Object.assign()',
          syntax: 'Object.assign(target, source)',
          description: 'Copy properties to target object',
          example: 'const target = {a: 1};\nObject.assign(target, {b: 2});  // {a: 1, b: 2}',
          use: 'Merge objects, clone (use spread instead)'
        }
      ]
    },
    {
      id: 'strings',
      title: 'String Methods',
      icon: Filter,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'length',
          syntax: 'string.length',
          description: 'Returns length of string',
          example: 'const text = "Hello";\ntext.length;  // 5',
          use: 'Get number of characters'
        },
        {
          name: 'toUpperCase() / toLowerCase()',
          syntax: 'string.toUpperCase() / string.toLowerCase()',
          description: 'Convert case of string',
          example: '"hello".toUpperCase();  // "HELLO"\n"WORLD".toLowerCase();  // "world"',
          use: 'Case conversion for comparison or display'
        },
        {
          name: 'slice()',
          syntax: 'string.slice(start, end)',
          description: 'Extract portion of string',
          example: '"Hello World".slice(0, 5);  // "Hello"\n"text".slice(-2);  // "xt"',
          use: 'Substring extraction, negative indices allowed'
        },
        {
          name: 'split()',
          syntax: 'string.split(separator)',
          description: 'Split string into array',
          example: '"a,b,c".split(",");  // ["a", "b", "c"]\n"hello".split("");  // ["h", "e", "l", "l", "o"]',
          use: 'Convert string to array by delimiter'
        },
        {
          name: 'includes()',
          syntax: 'string.includes(substring)',
          description: 'Check if string contains substring',
          example: '"Hello World".includes("World");  // true\n"text".includes("x");  // true',
          use: 'Search for substring, returns boolean'
        },
        {
          name: 'trim()',
          syntax: 'string.trim()',
          description: 'Remove whitespace from both ends',
          example: '"  hello  ".trim();  // "hello"\n" text\\n".trim();  // "text"',
          use: 'Clean up user input, remove spaces'
        },
        {
          name: 'replace()',
          syntax: 'string.replace(search, replacement)',
          description: 'Replace first occurrence in string',
          example: '"Hello World".replace("World", "JS");  // "Hello JS"\n"aaa".replaceAll("a", "b");  // "bbb"',
          use: 'Text substitution, use replaceAll() for all occurrences'
        }
      ]
    },
    {
      id: 'async',
      title: 'Async & Promises',
      icon: RefreshCw,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'Promise',
          syntax: 'new Promise((resolve, reject) => {})',
          description: 'Represents eventual completion of async operation',
          example: 'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Done"), 1000);\n});',
          use: 'Handle async operations, use then/catch or async/await'
        },
        {
          name: 'async/await',
          syntax: 'async function() { await promise }',
          description: 'Cleaner syntax for working with promises',
          example: 'async function fetchData() {\n  const response = await fetch(url);\n  return response.json();\n}',
          use: 'Modern way to handle async code, looks synchronous'
        },
        {
          name: 'then()',
          syntax: 'promise.then(callback)',
          description: 'Handle promise resolution',
          example: 'fetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data));',
          use: 'Chain promises, handle success'
        },
        {
          name: 'catch()',
          syntax: 'promise.catch(callback)',
          description: 'Handle promise rejection',
          example: 'fetch(url)\n  .then(res => res.json())\n  .catch(err => console.error(err));',
          use: 'Error handling in promise chains'
        },
        {
          name: 'Promise.all()',
          syntax: 'Promise.all([promises])',
          description: 'Wait for all promises to complete',
          example: 'const [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts()\n]);',
          use: 'Run multiple async operations in parallel'
        },
        {
          name: 'setTimeout()',
          syntax: 'setTimeout(callback, ms)',
          description: 'Execute code after delay',
          example: 'setTimeout(() => {\n  console.log("After 2 seconds");\n}, 2000);',
          use: 'Delayed execution, debouncing'
        },
        {
          name: 'setInterval()',
          syntax: 'setInterval(callback, ms)',
          description: 'Execute code repeatedly at intervals',
          example: 'const id = setInterval(() => {\n  console.log("Every second");\n}, 1000);\nclearInterval(id);',
          use: 'Periodic execution, clear with clearInterval()'
        }
      ]
    },
    {
      id: 'dom',
      title: 'DOM Manipulation',
      icon: Zap,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'querySelector()',
          syntax: 'document.querySelector(selector)',
          description: 'Select first matching element',
          example: 'const btn = document.querySelector(".button");\nconst div = document.querySelector("#main");',
          use: 'CSS selector to find single element'
        },
        {
          name: 'querySelectorAll()',
          syntax: 'document.querySelectorAll(selector)',
          description: 'Select all matching elements',
          example: 'const items = document.querySelectorAll(".item");\nitems.forEach(item => console.log(item));',
          use: 'Returns NodeList of all matching elements'
        },
        {
          name: 'addEventListener()',
          syntax: 'element.addEventListener(event, callback)',
          description: 'Attach event handler to element',
          example: 'btn.addEventListener("click", () => {\n  console.log("Clicked!");\n});',
          use: 'Handle user interactions (click, input, submit, etc.)'
        },
        {
          name: 'innerHTML',
          syntax: 'element.innerHTML = html',
          description: 'Get or set HTML content',
          example: 'div.innerHTML = "<p>New content</p>";\nconst html = div.innerHTML;',
          use: 'Set HTML content (be careful with user input)'
        },
        {
          name: 'textContent',
          syntax: 'element.textContent = text',
          description: 'Get or set text content',
          example: 'div.textContent = "Plain text";\nconst text = div.textContent;',
          use: 'Safer than innerHTML, doesn\'t parse HTML'
        },
        {
          name: 'classList',
          syntax: 'element.classList.add/remove/toggle',
          description: 'Manipulate element classes',
          example: 'div.classList.add("active");\ndiv.classList.remove("hidden");\ndiv.classList.toggle("open");',
          use: 'Add, remove, or toggle CSS classes'
        },
        {
          name: 'createElement()',
          syntax: 'document.createElement(tagName)',
          description: 'Create new HTML element',
          example: 'const div = document.createElement("div");\ndiv.textContent = "Hello";\nparent.appendChild(div);',
          use: 'Dynamically create DOM elements'
        }
      ]
    }
  ];

  const filteredData = referenceData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.syntax.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Zap size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              JavaScript Reference
            </h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-6">
              Complete guide to JavaScript syntax, methods, operators, and modern ES6+ features
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search JavaScript methods and features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {filteredData.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.has(section.id);
            
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} items</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-400" size={24} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={24} />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200">
                    <div className="p-6 space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-yellow-500 transition-colors">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          
                          <div className="bg-gray-50 rounded-lg p-4 mb-3 font-mono text-sm">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Syntax</p>
                            <code className="text-purple-700">{item.syntax}</code>
                          </div>
                          
                          <div className="bg-gray-900 rounded-lg p-4 mb-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Example</p>
                            <pre className="text-sm font-mono text-green-400 overflow-x-auto">
                              <code>{item.example}</code>
                            </pre>
                          </div>

                          <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                            <p className="text-xs font-semibold text-yellow-600 uppercase mb-1">Usage</p>
                            <p className="text-sm text-yellow-700">{item.use}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No results found
            </h3>
            <p className="text-gray-500 mb-6">
              Try a different search term
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Quick Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            JavaScript Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Modern Syntax</h3>
              <p className="text-gray-600 text-sm">
                Prefer const/let over var, arrow functions, and template literals for cleaner code.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <RefreshCw className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Async/Await</h3>
              <p className="text-gray-600 text-sm">
                Use async/await instead of callbacks for more readable asynchronous code.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Box className="text-yellow-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Immutable Data</h3>
              <p className="text-gray-600 text-sm">
                Use array methods like map/filter that return new arrays instead of mutating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}