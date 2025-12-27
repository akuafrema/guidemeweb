const AllExercises = {
  python: [
    {
      id: 1,
      title: "Python Basics & Syntax",
      description: "Intro to variables, types, basic input/output and simple expressions.",
      example: "Assign a variable and print it.",
      steps: ["Declare a variable", "Use print() to show value", "Try different data types"],
      code: `x = 42
print("Value:", x)`
    },
    {
      id: 2,
      title: "Conditional Statements",
      description: "Use if / elif / else to make decisions in code.",
      example: "Check if a number is positive, negative or zero.",
      steps: ["Write an if condition", "Add elif for other cases", "Add else for fallback"],
      code: `n = 3
if n > 0:
    print("positive")
elif n < 0:
    print("negative")
else:
    print("zero")`
    },
    {
      id: 3,
      title: "Loops and Iteration",
      description: "Repeat tasks using for and while loops and control flow keywords.",
      example: "Loop through numbers 0-4 and print them.",
      steps: ["Choose for or while", "Use range() for sequences", "Use break/continue as needed"],
      code: `for i in range(5):
    print(i)`
    },
    {
      id: 4,
      title: "Functions and Scope",
      description: "Create reusable functions and understand local vs global scope.",
      example: "Define a function that returns the square of a number.",
      steps: ["Define a function with def", "Return values with return", "Call the function with arguments"],
      code: `def square(x):
    return x * x

print(square(5))`
    },
    {
      id: 5,
      title: "Lists and Tuples",
      description: "Work with ordered collections: mutable lists and immutable tuples.",
      example: "Create a list, append an item, slice it.",
      steps: ["Create list/tuple", "Index and slice", "Use list methods like append/pop"],
      code: `fruits = ["apple", "banana"]
fruits.append("orange")
print(fruits[0:2])`
    },
    {
      id: 6,
      title: "Dictionaries and Sets",
      description: "Use dictionaries for key/value storage and sets for unique items.",
      example: "Create a dict and access a value by key.",
      steps: ["Create dict or set", "Access items safely", "Iterate over keys/values"],
      code: `person = {"name": "Ada", "age": 30}
print(person["name"])`
    },
    {
      id: 7,
      title: "String Manipulation",
      description: "Format and transform strings using methods and f-strings.",
      example: "Use an f-string to include variables inside text.",
      steps: ["Explore common methods (split, join, replace)", "Use f-strings for formatting", "Practice slicing strings"],
      code: `name = "Ada"
print(f"Hello, {name}!")`
    },
    {
      id: 8,
      title: "List Comprehensions",
      description: "Write concise expressions to create lists from iterables.",
      example: "Make squares of numbers 0–4 with a comprehension.",
      steps: ["Write basic comprehension", "Add conditional filter", "Use for nested comprehensions sparingly"],
      code: `squares = [x*x for x in range(5)]
print(squares)`
    },
    {
      id: 9,
      title: "File I/O Operations",
      description: "Read and write files safely using context managers.",
      example: "Write a line to a text file and read it back.",
      steps: ["Open files with with open()", "Use modes 'r','w','a'", "Handle exceptions if needed"],
      code: `with open("demo.txt","w") as f:
    f.write("Hello\\n")

with open("demo.txt","r") as f:
    print(f.read())`
    },
    {
      id: 10,
      title: "Exception Handling",
      description: "Catch and handle runtime errors using try/except/finally.",
      example: "Catch ValueError from int() on bad input.",
      steps: ["Wrap risky code in try", "Handle specific exceptions", "Use finally for cleanup"],
      code: `try:
    n = int("abc")
except ValueError:
    print("Not a number")`
    },
    {
      id: 11,
      title: "Object-Oriented Programming",
      description: "Define classes, create objects, and use methods and inheritance.",
      example: "Create a simple class with init and a method.",
      steps: ["Define class with __init__", "Add methods", "Instantiate and call methods"],
      code: `class Person:
    def __init__(self, name):
        self.name = name

print(Person("Ada").name)`
    },
    {
      id: 12,
      title: "Lambda Functions & Map/Filter",
      description: "Use anonymous lambda functions with map, filter and reduce patterns.",
      example: "Double a list of numbers using map and lambda.",
      steps: ["Write a lambda", "Apply map/filter", "Convert results back to list"],
      code: `nums = [1,2,3]
doubled = list(map(lambda x: x*2, nums))
print(doubled)`
    },
    {
      id: 13,
      title: "Decorators and Generators",
      description: "Learn function decorators and generator functions with yield.",
      example: "Simple generator that yields numbers 0–2.",
      steps: ["Write a generator with yield", "Iterate over generator", "Read about decorators for wrapping functions"],
      code: `def gen():
    for i in range(3):
        yield i

for v in gen():
    print(v)`
    },
    {
      id: 14,
      title: "Modules and Packages",
      description: "Organize code into modules and import reusable functions.",
      example: "Create a module file and import a function from it.",
      steps: ["Create a .py module", "Use import or from ... import", "Use __init__.py for packages"],
      code: `# utils.py
def add(a,b): return a+b

# in another file
# from utils import add
print("example:", 2 + 3)`
    },
    {
      id: 15,
      title: "Working with APIs",
      description: "Make HTTP requests and parse JSON responses (client-side example).",
      example: "Use requests.get() then response.json() (requires requests library).",
      steps: ["Install requests (if needed)", "Call an API in a safe environment", "Parse JSON and handle errors"],
      code: `# requires 'requests' package
# import requests
# r = requests.get("https://api.example.com/data")
# print(r.json())`
    },
    {
      id: 16,
      title: "Multithreading & Multiprocessing",
      description: "Understand concurrency basics: threads vs processes for I/O/CPU work.",
      example: "Use threading to run two simple tasks concurrently.",
      steps: ["Learn when to use threading vs multiprocessing", "Use Thread or Process classes", "Manage shared state carefully"],
      code: `import threading
def t(): print("run")
threading.Thread(target=t).start()`
    },
    {
      id: 17,
      title: "Context Managers & Magic Methods",
      description: "Create custom context managers and implement dunder methods.",
      example: "Use __enter__ / __exit__ in a custom context manager.",
      steps: ["Implement __enter__/__exit__", "Use with statement", "Explore __str__ and __repr__"],
      code: `class C:
    def __enter__(self): print("enter")
    def __exit__(self,*e): print("exit")

with C():
    pass`
    },
    {
      id: 18,
      title: "Testing with Pytest",
      description: "Write simple unit tests and assertions using pytest conventions.",
      example: "A test function named test_add() that asserts expected output.",
      steps: ["Install pytest", "Create functions prefixed with test_", "Run pytest and interpret results"],
      code: `def add(a,b): return a+b

def test_add():
    assert add(2,3) == 5`
    },
    {
      id: 19,
      title: "Data Classes & Type Hints",
      description: "Use @dataclass for concise classes and add type annotations for clarity.",
      example: "Define a simple dataclass for a point.",
      steps: ["Import dataclass", "Annotate fields", "Use type hints in functions"],
      code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

print(Point(1,2))`
    },
    {
      id: 20,
      title: "Build a Python CLI Application",
      description: "Create a small command-line app using argparse for argument parsing.",
      example: "Simple CLI that greets a name passed as argument.",
      steps: ["Plan CLI arguments", "Use argparse to parse", "Handle errors and help text"],
      code: `import argparse
p = argparse.ArgumentParser()
p.add_argument("--name")
args = p.parse_args()
print("Hello", args.name or "friend")`
    }
  ],

  javascript: [
    {
      id: 1,
      title: "Variables and Data Types",
      description: "Learn var/let/const and JS primitive types.",
      example: "Declare let x = 5 and typeof x.",
      steps: ["Try var/let/const", "Check types with typeof", "Experiment with coercion"],
      code: `let x = 5;
console.log(typeof x);`
    },
    {
      id: 2,
      title: "Basic Operators",
      description: "Work with arithmetic, comparison and logical operators.",
      example: "Compute 2 + 3 and compare values.",
      steps: ["Use arithmetic operators", "Try comparison operators", "Use logical operators to combine checks"],
      code: `console.log(2 + 3);
console.log(5 > 3);`
    },
    {
      id: 3,
      title: "Conditional Statements",
      description: "Make decisions with if / else / switch and ternary operator.",
      example: "Use a ternary to pick a string based on a condition.",
      steps: ["Write if/else", "Try ternary ?: for inline conditions", "Use switch for multi-case logic"],
      code: `const n = 4;
console.log(n % 2 === 0 ? "even" : "odd");`
    },
    {
      id: 4,
      title: "Loops and Iteration",
      description: "Use for, while, for...of and for...in to iterate collections.",
      example: "Loop over an array and log each item.",
      steps: ["Use for loop", "Try for...of for arrays", "Avoid infinite while loops"],
      code: `const arr = [1,2,3];
for (const x of arr) console.log(x);`
    },
    {
      id: 5,
      title: "Functions Basics",
      description: "Declare and call functions, understand parameters and return values.",
      example: "Function that adds two numbers and returns result.",
      steps: ["Define function declaration/expression", "Call with args", "Return values"],
      code: `function add(a,b){ return a+b; }
console.log(add(2,3));`
    },
    {
      id: 6,
      title: "Arrow Functions",
      description: "Use concise arrow function syntax and learn lexical this behavior.",
      example: "Convert a function to an arrow function.",
      steps: ["Write simple arrow functions", "Observe lexical this", "Use implicit returns for one-liners"],
      code: `const square = x => x*x;
console.log(square(4));`
    },
    {
      id: 7,
      title: "Array Methods",
      description: "Use map, filter, reduce and other array helpers for functional-style code.",
      example: "Double array values with map.",
      steps: ["Try map/filter/reduce", "Chain methods carefully", "Avoid side-effects in callbacks"],
      code: `const nums = [1,2,3];
console.log(nums.map(n => n*2));`
    },
    {
      id: 8,
      title: "Object Manipulation",
      description: "Create and update objects, use destructuring and spread syntax.",
      example: "Destructure properties from an object.",
      steps: ["Create objects", "Use destructuring", "Use spread for shallow copies"],
      code: `const user = {name:'Ada', age:30};
const {name} = user;
console.log(name);`
    },
    {
      id: 9,
      title: "String Manipulation",
      description: "Use common string methods and template literals.",
      example: "Use template literal to build a sentence.",
      steps: ["Use split/join/replace", "Use template literals", "Learn RegExp basics for patterns"],
      code: `` + "`const who='Ada'; console.log(`Hello ${who}`);`"
    },
    {
      id: 10,
      title: "DOM Manipulation",
      description: "Select DOM elements and update content/styles safely.",
      example: "Change text content of an element by id.",
      steps: ["Select with querySelector", "Modify properties (textContent/style)", "Attach event listeners responsibly"],
      code: `// in browser console
// document.querySelector('#el').textContent = 'Updated'`
    },
    {
      id: 11,
      title: "Event Handling",
      description: "Listen for user actions and respond to events.",
      example: "Attach a click listener to a button.",
      steps: ["Use addEventListener", "Use event object for details", "Debounce/throttle expensive handlers"],
      code: `// btn.addEventListener('click', () => console.log('clicked'));`
    },
    {
      id: 12,
      title: "Async JavaScript Basics",
      description: "Understand callbacks, the event loop and asynchronous execution.",
      example: "Use setTimeout to delay a function.",
      steps: ["Write a callback", "Observe event loop behavior", "Avoid callback hell with structured code"],
      code: `setTimeout(() => console.log('later'), 1000);`
    },
    {
      id: 13,
      title: "Promises",
      description: "Work with Promises and .then/.catch chains for async flows.",
      example: "Create a Promise that resolves after a timeout.",
      steps: ["Create and return Promises", "Chain with then/catch", "Handle rejection cases"],
      code: `new Promise(resolve => setTimeout(()=>resolve('ok'), 500)).then(console.log);`
    },
    {
      id: 14,
      title: "Async/Await",
      description: "Use async/await to write cleaner asynchronous code.",
      example: "Await a Promise inside an async function.",
      steps: ["Mark function async", "Await Promises", "Use try/catch to handle errors"],
      code: `async function run(){
  const v = await Promise.resolve(1);
  console.log(v);
}
run();`
    },
    {
      id: 15,
      title: "Fetch API",
      description: "Make HTTP requests from the browser using fetch and handle JSON.",
      example: "Fetch JSON and log it (use safe public API).",
      steps: ["Call fetch()", "Await response.json()", "Handle network errors"],
      code: `// async function example
// const r = await fetch('/api/data'); const data = await r.json();`
    },
    {
      id: 16,
      title: "ES6 Classes",
      description: "Use class syntax for objects and inheritance patterns.",
      example: "Define a base class and extend it.",
      steps: ["Define class with constructor", "Add methods", "Extend using extends and super()"],
      code: `class A{ constructor(x){this.x=x} }
class B extends A{}
console.log(new B(1))`
    },
    {
      id: 17,
      title: "Closures and Scope",
      description: "Understand closures and how functions capture variables.",
      example: "Return a function that remembers a captured value.",
      steps: ["Write nested functions", "Return inner function", "Observe captured variables"],
      code: `function outer(x){ return ()=>x; }
const f = outer(5); console.log(f());`
    },
    {
      id: 18,
      title: "Advanced Array Methods",
      description: "Use find, some, every, flat and other advanced array helpers.",
      example: "Use find() to locate an object in an array.",
      steps: ["Try find/some/every", "Use flat/flatMap for nested arrays", "Read docs for edge cases"],
      code: `const found = [1,2,3].find(n => n>1);
console.log(found);`
    },
    {
      id: 19,
      title: "Regular Expressions",
      description: "Use regex for pattern matching and basic validation tasks.",
      example: "Test if a string contains only digits.",
      steps: ["Write a simple pattern", "Use test()/match()", "Avoid overly complex regex without tests"],
      code: `const re = /^\\d+$/;
console.log(re.test('123'))`
    },
    {
      id: 20,
      title: "Build a Complete Web App",
      description: "Bring together JS, DOM, and fetch to build a small interactive app.",
      example: "Simple app that fetches and displays a list from an API.",
      steps: ["Plan components/features", "Build incrementally", "Test and refactor often"],
      code: `// Architect your app with modules and small functions`
    }
  ],

  react: [
    {
      id: 1,
      title: "JSX and Components Basics",
      description: "Create functional components and use JSX to describe UI.",
      example: "Simple component that returns an h1.",
      steps: ["Create function component", "Return JSX", "Render it in App.js"],
      code: `function Hello(){ return <h1>Hello</h1>; }`
    },
    {
      id: 2,
      title: "Props and Component Communication",
      description: "Pass data to child components with props for reusable UI.",
      example: "<Greeting name='Ada'/> shows a personalized message.",
      steps: ["Define props in child", "Pass values from parent", "Use destructuring for clarity"],
      code: `function G({name}){ return <div>Hello {name}</div>; }`
    },
    {
      id: 3,
      title: "State with useState Hook",
      description: "Manage component-local state using useState.",
      example: "A counter increments when a button is clicked.",
      steps: ["Import useState", "Initialize state", "Update state with setter"],
      code: `const [count,setCount]=useState(0);
<button onClick={()=>setCount(c=>c+1)}>{count}</button>`
    },
    {
      id: 4,
      title: "Event Handling",
      description: "Attach event handlers for interactivity (onClick, onChange).",
      example: "Handle a form submit to capture input.",
      steps: ["Define handler function", "Attach via JSX prop", "Prevent default when needed"],
      code: `function handle(e){ e.preventDefault(); console.log('submit'); }`
    },
    {
      id: 5,
      title: "Conditional Rendering",
      description: "Render UI conditionally using ternaries or && patterns.",
      example: "{isLoggedIn ? <Logout/> : <Login/>}",
      steps: ["Decide condition", "Use ternary or &&", "Keep JSX readable"],
      code: `{isOpen && <Modal/>}`
    },
    {
      id: 6,
      title: "Lists and Keys",
      description: "Render arrays with map and provide stable keys.",
      example: "Render list of names with unique keys.",
      steps: ["Use map to render", "Provide key prop", "Avoid using index as key when mutable"],
      code: `{items.map(i=> <li key={i.id}>{i.name}</li>)}` 
    },
    {
      id: 7,
      title: "Forms and Controlled Components",
      description: "Use React state as single source of truth for input values.",
      example: "A controlled input with value and onChange.",
      steps: ["Bind value to state", "Update state in onChange", "Validate before submit"],
      code: `const [v,setV]=useState('');
<input value={v} onChange={e=>setV(e.target.value)} />`
    },
    {
      id: 8,
      title: "useEffect Hook and Side Effects",
      description: "Run side effects like data fetching using useEffect.",
      example: "Fetch data once on component mount.",
      steps: ["Import useEffect", "Provide dependency array", "Cleanup effects when needed"],
      code: `useEffect(()=>{ fetchData(); }, []);`
    },
    {
      id: 9,
      title: "Custom Hooks",
      description: "Extract reusable logic into custom hooks starting with 'use'.",
      example: "useWindowWidth returns current window width.",
      steps: ["Create function starting with use", "Use built-in hooks inside", "Return the reusable API"],
      code: `function useCount(){ const [c,setC]=useState(0); return [c,setC]; }`
    },
    {
      id: 10,
      title: "Context API for State Management",
      description: "Share state across the tree using Context and Provider.",
      example: "Theme context providing light/dark value to children.",
      steps: ["Create Context", "Wrap Provider around app", "Consume with useContext"],
      code: `const Theme = React.createContext('light');`
    },
    {
      id: 11,
      title: "React Router Navigation",
      description: "Use react-router to create multi-page single-page apps.",
      example: "<Link to='/about'>About</Link> for client routing.",
      steps: ["Install react-router", "Define Routes", "Use Link/ useNavigate for navigation"],
      code: `// <Route path="/ex/:id" element={<ExerciseDetail/>} />`
    },
    {
      id: 12,
      title: "useReducer and Complex State",
      description: "Manage complex state transitions with useReducer pattern.",
      example: "Counter reducer with increment/decrement actions.",
      steps: ["Define reducer function", "Initialize useReducer", "Dispatch actions to update state"],
      code: `const [s,dispatch]=useReducer(r,0);`
    },
    {
      id: 13,
      title: "Performance Optimization",
      description: "Use memoization and lazy loading to speed up components.",
      example: "Wrap expensive component with React.memo.",
      steps: ["Identify slow renders", "Use React.memo/useMemo/useCallback", "Code-split with lazy/Suspense"],
      code: `const MemoComp = React.memo(Comp);`
    },
    {
      id: 14,
      title: "API Integration and Data Fetching",
      description: "Fetch and manage remote data responsibly in React apps.",
      example: "Fetch list of items and render with loading state.",
      steps: ["Track loading/error states", "Fetch in useEffect", "Clean up subscriptions"],
      code: `useEffect(()=>{ fetch('/api').then(r=>r.json()).then(setData) },[])`
    },
    {
      id: 15,
      title: "Build a Complete React App",
      description: "Combine routing, state, and data fetching into a full app scaffold.",
      example: "A small CRUD app with routes and API calls.",
      steps: ["Plan routes and state", "Build components incrementally", "Test flows and edge cases"],
      code: `// Start small: App -> Routes -> Pages`
    }
  ],

  sql: [
    {
      id: 1,
      title: "SQL Basics and SELECT Queries",
      description: "Retrieve rows with SELECT and filter with WHERE.",
      example: "SELECT id, name FROM users WHERE active = 1;",
      steps: ["Select columns", "Filter with WHERE", "Use LIMIT for samples"],
      code: `SELECT id, name FROM users WHERE active = 1;`
    },
    {
      id: 2,
      title: "Sorting and Limiting Results",
      description: "Order query results with ORDER BY and restrict count with LIMIT.",
      example: "SELECT * FROM products ORDER BY price DESC LIMIT 5;",
      steps: ["Use ORDER BY column ASC/DESC", "Combine with LIMIT", "Test on sample data"],
      code: `SELECT * FROM products ORDER BY price DESC LIMIT 5;`
    },
    {
      id: 3,
      title: "Aggregate Functions",
      description: "Use COUNT, SUM, AVG, MIN, MAX to summarize data.",
      example: "SELECT COUNT(*) FROM users;",
      steps: ["Apply aggregate on columns", "Combine with GROUP BY when needed", "Use HAVING to filter groups"],
      code: `SELECT AVG(price) FROM sales;`
    },
    {
      id: 4,
      title: "GROUP BY and HAVING",
      description: "Group rows by columns and filter grouped results.",
      example: "SELECT category, COUNT(*) FROM items GROUP BY category;",
      steps: ["Group by desired column(s)", "Use aggregates in SELECT", "Filter groups with HAVING"],
      code: `SELECT category, COUNT(*) FROM items GROUP BY category HAVING COUNT(*)>1;`
    },
    {
      id: 5,
      title: "INNER JOIN Operations",
      description: "Combine related rows from two tables using INNER JOIN.",
      example: "SELECT o.id, u.name FROM orders o INNER JOIN users u ON o.user_id=u.id;",
      steps: ["Identify join keys", "Choose JOIN type", "Select necessary columns"],
      code: `SELECT o.id, u.name FROM orders o JOIN users u ON o.user_id = u.id;`
    },
    {
      id: 6,
      title: "LEFT and RIGHT JOINs",
      description: "Include unmatched rows from one side using outer joins.",
      example: "LEFT JOIN keeps all left-table rows even if right is null.",
      steps: ["Decide which side to keep", "Use LEFT/RIGHT accordingly", "Handle NULLs in results"],
      code: `SELECT a.*, b.* FROM a LEFT JOIN b ON a.id=b.a_id;`
    },
    {
      id: 7,
      title: "Subqueries and Nested Queries",
      description: "Nest queries to perform multi-step data retrieval.",
      example: "SELECT * FROM products WHERE id IN (SELECT prod_id FROM sales WHERE qty>10);",
      steps: ["Write inner query first", "Test inner query standalone", "Use IN/EXISTS for conditions"],
      code: `SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total>100);`
    },
    {
      id: 8,
      title: "INSERT, UPDATE, DELETE",
      description: "Modify data safely using parameterized statements when available.",
      example: "INSERT INTO table(col) VALUES('value');",
      steps: ["Back up or work on sample DB", "Use WHERE for updates/deletes", "Prefer transactions for multi-step changes"],
      code: `INSERT INTO contacts(name,email) VALUES('Ada','ada@example.com');`
    },
    {
      id: 9,
      title: "String Functions and Pattern Matching",
      description: "Use LIKE, CONCAT and substring functions for text manipulation.",
      example: "SELECT * FROM users WHERE email LIKE '%@example.com';",
      steps: ["Use LIKE with % and _", "Try string functions like SUBSTR/CONCAT", "Test patterns on sample strings"],
      code: `SELECT * FROM users WHERE email LIKE '%@example.com';`
    },
    {
      id: 10,
      title: "Date and Time Functions",
      description: "Work with DATE/TIME columns and common functions like NOW().",
      example: "SELECT DATE(created_at) FROM events;",
      steps: ["Inspect date column types", "Use date functions to format/compare", "Consider timezone implications"],
      code: `SELECT DATE(created_at) FROM events;`
    },
    {
      id: 11,
      title: "Creating Tables and Constraints",
      description: "Design tables with PRIMARY KEY, UNIQUE and NOT NULL constraints for integrity.",
      example: "CREATE TABLE users (id INT PRIMARY KEY, email TEXT UNIQUE);",
      steps: ["Plan schema and keys", "Define appropriate constraints", "Migrate/test on sample DB"],
      code: `CREATE TABLE users (id INT PRIMARY KEY, name TEXT NOT NULL);`
    },
    {
      id: 12,
      title: "Indexes and Query Optimization",
      description: "Add indexes on frequently queried columns to speed up reads.",
      example: "CREATE INDEX idx_users_email ON users(email);",
      steps: ["Identify slow queries", "Create appropriate indexes", "Measure performance and avoid over-indexing"],
      code: `CREATE INDEX idx_users_email ON users(email);`
    },
    {
      id: 13,
      title: "Transactions and ACID Properties",
      description: "Use transactions to group operations and maintain consistency.",
      example: "BEGIN; UPDATE a; UPDATE b; COMMIT;",
      steps: ["Wrap multi-step changes in transactions", "Use COMMIT and ROLLBACK", "Test failure paths"],
      code: `BEGIN;
UPDATE accounts SET balance=balance-10 WHERE id=1;
COMMIT;`
    },
    {
      id: 14,
      title: "Views and Stored Procedures",
      description: "Create views for reusable queries and stored procedures for encapsulated logic.",
      example: "CREATE VIEW active_users AS SELECT * FROM users WHERE active=1;",
      steps: ["Define view or proc purpose", "Implement and test on sample data", "Document usage and parameters"],
      code: `CREATE VIEW active_users AS SELECT * FROM users WHERE active=1;`
    },
    {
      id: 15,
      title: "Advanced SQL Project",
      description: "Design and implement a small normalized database schema and queries.",
      example: "Plan tables for users, posts and comments and run sample queries.",
      steps: ["Design schema", "Create tables and sample data", "Write queries to fulfill feature requirements"],
      code: `-- Plan tables first, then implement`
    }
  ],

  cryptography: [
    {
      id: 1,
      title: "Caesar Cipher Encryption",
      description: "Simple substitution cipher shifting letters by a fixed key.",
      example: "Shift 'abc' by 3 -> 'def'.",
      steps: ["Map letters to numeric positions", "Add key modulo 26", "Convert back to letters"],
      code: `def caesar(s,k):
    return ''.join(chr((ord(c)-97+k)%26+97) if c.isalpha() else c for c in s.lower())`
    },
    {
      id: 2,
      title: "Caesar Cipher Decryption",
      description: "Reverse the Caesar shift to recover plaintext.",
      example: "Shift back by key to decrypt.",
      steps: ["Apply negative shift", "Handle non-letters", "Test with known plaintexts"],
      code: `# use caesar(text, -k) from above`
    },
    {
      id: 3,
      title: "Frequency Analysis Attack",
      description: "Study letter frequency to guess simple substitution keys (educational only).",
      example: "Count occurrences of each letter in ciphertext.",
      steps: ["Count letter frequencies", "Compare with expected frequencies", "Form hypotheses about mapping"],
      code: `from collections import Counter
Counter("sample text".replace(" ",""))`
    },
    {
      id: 4,
      title: "Vigenère Cipher",
      description: "Polyalphabetic cipher using a repeating keyword (study conceptually).",
      example: "Encrypt using keyword shifts per letter.",
      steps: ["Align keyword with plaintext", "Apply Caesar shifts per position", "Test with short examples"],
      code: `# educational pseudocode: apply varying shifts from keyword`
    },
    {
      id: 5,
      title: "Base64 Encoding",
      description: "Encode binary data into ASCII-safe Base64 representation.",
      example: "Encode 'hi' -> 'aGk='",
      steps: ["Convert bytes -> 6-bit groups", "Map to Base64 alphabet", "Add padding as needed"],
      code: `import base64
print(base64.b64encode(b"hi"))`
    },
    {
      id: 6,
      title: "XOR Cipher",
      description: "Simple byte-wise XOR with a repeating key (illustrative).",
      example: "XOR bytes with key to get ciphertext (symmetric).",
      steps: ["XOR each byte with key byte", "Repeat key as needed", "XOR again to decrypt"],
      code: `def xor(b,k): return bytes([c^k[i%len(k)] for i,c in enumerate(b)])`
    },
    {
      id: 7,
      title: "One-Time Pad Implementation",
      description: "Concept of one-time pad: perfect secrecy if key is truly random and single-use.",
      example: "XOR plaintext with a same-length random key (theoretical).",
      steps: ["Understand key requirements", "Use in controlled, theoretical labs only", "Never reuse key"],
      code: `# theoretical only: ensure truly random key of equal length`
    },
    {
      id: 8,
      title: "RSA Key Generation",
      description: "High-level process for public-key generation using large primes (mathematical overview).",
      example: "Choose primes p, q and compute n = p*q and totient.",
      steps: ["Select primes", "Compute n and φ(n)", "Choose e and compute d as modular inverse"],
      code: `# high-level math; use established libraries (cryptography) in real apps`
    },
    {
      id: 9,
      title: "RSA Encryption & Decryption",
      description: "Use public/private key operations conceptually; prefer libraries for real use.",
      example: "Encrypt with public key, decrypt with private key.",
      steps: ["Use library APIs", "Never implement from scratch for production", "Protect private keys"],
      code: `# use library like 'cryptography' to encrypt/decrypt securely`
    },
    {
      id: 10,
      title: "Hash Function (SHA-256 Basics)",
      description: "One-way hashing for data integrity and fingerprinting.",
      example: "Compute SHA-256 digest of a message.",
      steps: ["Use standard library hash functions", "Do not use for reversible storage", "Use salting for passwords"],
      code: `import hashlib
print(hashlib.sha256(b"hello").hexdigest())`
    },
    {
      id: 11,
      title: "Digital Signature Verification",
      description: "Sign data with private key and verify with public key (concept and safe libraries).",
      example: "Verify signature with public key using a crypto library.",
      steps: ["Use established libs", "Keep private key secret", "Verify signatures before trusting data"],
      code: `# use cryptography.hazmat.primitives for signing and verification`
    },
    {
      id: 12,
      title: "Password Hashing with Salt",
      description: "Store passwords securely using salted hashes like bcrypt or scrypt.",
      example: "Generate salted hash and verify on login.",
      steps: ["Generate random salt per password", "Use adaptive hashing (bcrypt)", "Never store plaintext"],
      code: `# use bcrypt library: bcrypt.hashpw(password, bcrypt.gensalt())`
    }
  ],

  css: [
    {
      id: 1,
      title: "Basic Text Styling",
      description: "Style text with font-size, weight, color and decorations.",
      example: "Set font-size and color for a heading.",
      steps: ["Select element", "Apply font and color properties", "Adjust spacing as needed"],
      code: `h1{ font-size:24px; color:#222; }`
    },
    {
      id: 2,
      title: "Box Model Mastery",
      description: "Understand content, padding, border and margin for layout.",
      example: "Add padding and border to a box.",
      steps: ["Inspect element box model", "Adjust padding/margin", "Use box-sizing if needed"],
      code: `.card{ padding:16px; border:1px solid #ddd; }`
    },
    {
      id: 3,
      title: "CSS Selectors Challenge",
      description: "Use class, id, attribute and pseudo-selectors to target elements.",
      example: "Select links with [target='_blank'].",
      steps: ["Try simple selectors", "Combine selectors for specificity", "Use pseudo-classes for states"],
      code: `a[target='_blank']{ text-decoration:underline; }`
    },
    {
      id: 4,
      title: "Flexbox Layout",
      description: "Create responsive single-axis layouts with Flexbox.",
      example: "Center items horizontally and vertically.",
      steps: ["Set display:flex", "Use justify-content and align-items", "Control flex-basis/grow/shrink"],
      code: `.row{ display:flex; align-items:center; justify-content:center; }`
    },
    {
      id: 5,
      title: "CSS Grid System",
      description: "Build two-dimensional layouts using CSS Grid.",
      example: "Define a 3-column grid and place items.",
      steps: ["Define grid-template-columns", "Place grid items", "Use grid-gap for spacing"],
      code: `.grid{ display:grid; grid-template-columns: repeat(3,1fr); gap:16px; }`
    },
    {
      id: 6,
      title: "Responsive Design with Media Queries",
      description: "Adapt layouts for different screen sizes using media queries.",
      example: "Switch to single-column layout on narrow screens.",
      steps: ["Choose breakpoints", "Write @media rules", "Test on multiple device sizes"],
      code: `@media (max-width:600px){ .grid{ grid-template-columns:1fr; } }`
    },
    {
      id: 7,
      title: "CSS Animations",
      description: "Animate properties smoothly using @keyframes and animation property.",
      example: "Fade in an element on load.",
      steps: ["Define keyframes", "Apply animation with duration", "Prefer transform/opacity for performance"],
      code: `@keyframes fade{ from{opacity:0} to{opacity:1} } .box{ animation:fade .5s; }`
    },
    {
      id: 8,
      title: "CSS Transitions & Transforms",
      description: "Use transitions and transform properties for smooth UI interactions.",
      example: "Scale element on hover.",
      steps: ["Define transition property", "Use transform for 2D/3D effects", "Keep animations performant"],
      code: `.btn{ transition: transform .2s } .btn:hover{ transform:scale(1.05) }`
    },
    {
      id: 9,
      title: "Custom CSS Variables",
      description: "Create reusable values with CSS custom properties (--var).",
      example: "Define a primary color variable and use it.",
      steps: ["Declare variables on :root", "Use var() to reference", "Change values for themes"],
      code: `:root{ --primary:#06f; } .btn{ background:var(--primary); }`
    },
    {
      id: 10,
      title: "Advanced Positioning",
      description: "Use static/relative/absolute/fixed/sticky positioning correctly.",
      example: "Create a sticky header that sticks to the top.",
      steps: ["Understand normal flow", "Use positioning intentionally", "Manage z-index for stacking"],
      code: `header{ position:sticky; top:0; }`
    },
    {
      id: 11,
      title: "CSS Pseudo-elements",
      description: "Add decorative content with ::before and ::after without extra HTML.",
      example: "Add an icon before headings.",
      steps: ["Use content property", "Style pseudo-elements", "Keep semantics intact"],
      code: `h2::before{ content:'• '; color:#06f; }`
    },
    {
      id: 12,
      title: "Complex Selectors & Combinators",
      description: "Use combinators and :not() to craft precise selectors.",
      example: "Select direct child items only.",
      steps: ["Learn descendant/child/adjacent selectors", "Use :not() to exclude cases", "Test specificity"],
      code: `.parent > .child{ }`
    },
    {
      id: 13,
      title: "CSS Grid Advanced Layouts",
      description: "Use grid-template-areas and auto-placement for complex layouts.",
      example: "Define named grid areas for header/main/sidebar.",
      steps: ["Design area map", "Assign grid-area to items", "Use auto-placement for flow"],
      code: `grid-template-areas: "hd hd" "sb main";`
    },
    {
      id: 14,
      title: "CSS Architecture (BEM)",
      description: "Organize CSS with BEM naming for scalable and maintainable styles.",
      example: "Use block__element--modifier naming.",
      steps: ["Define block names", "Use element/modifier conventions", "Keep CSS modular"],
      code: `/* .card__title--large */`
    },
    {
      id: 15,
      title: "Responsive Navigation Menu",
      description: "Build a navigation that adapts to mobile with a hamburger menu.",
      example: "Show collapsed menu on small screens.",
      steps: ["Create nav structure", "Hide/show with media queries", "Add accessible controls"],
      code: `/* Toggle classes to show/hide menu */`
    },
    {
      id: 16,
      title: "CSS Card Components",
      description: "Design reusable card components with shadow, padding, and layout.",
      example: "Card with image, title and description.",
      steps: ["Define base card styles", "Add hover states", "Make responsive"],
      code: `.card{ border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,.06); }`
    },
    {
      id: 17,
      title: "CSS Gradient Mastery",
      description: "Create linear and radial gradients for backgrounds and overlays.",
      example: "Use linear-gradient for subtle background.",
      steps: ["Experiment with color stops", "Use gradients with overlays", "Combine with transparency"],
      code: `background: linear-gradient(90deg,#06f,#906);`
    },
    {
      id: 18,
      title: "Dark Mode Implementation",
      description: "Implement a theme switch using CSS variables and prefers-color-scheme.",
      example: "Switch variables when user prefers dark mode.",
      steps: ["Define light/dark variables", "Use media query prefers-color-scheme", "Provide toggle for manual switch"],
      code: `@media (prefers-color-scheme: dark){ :root{ --bg:#111 } }`
    }
  ],

  git: [
    {
      id: 1,
      title: "Basic Git Setup",
      description: "Initialize a repo and configure username/email for commits.",
      example: "git init then git config user.name/email.",
      steps: ["Run git init in project", "Configure user.name and user.email", "Make initial commit"],
      code: `// git init
// git config user.name "Your Name"`
    },
    {
      id: 2,
      title: "Committing Changes",
      description: "Stage files and write meaningful commit messages.",
      example: "git add file && git commit -m 'feat: add example'.",
      steps: ["Stage with git add", "Commit with clear message", "Use git status to inspect changes"],
      code: `// git add . && git commit -m "message"`
    },
    {
      id: 3,
      title: "Working with Branches",
      description: "Create and switch branches to isolate work.",
      example: "git checkout -b feature/my-feature",
      steps: ["Create branch for feature", "Switch and work on branch", "Merge back when ready"],
      code: `// git checkout -b feature/name`
    },
    {
      id: 4,
      title: "Understanding Git Status",
      description: "Use git status to inspect working directory and staging area.",
      example: "git status shows untracked/modified files.",
      steps: ["Run git status often", "Interpret staged vs unstaged", "Use git diff for changes"],
      code: `// git status`
    },
    {
      id: 5,
      title: "Merging Branches",
      description: "Bring changes from one branch into another and resolve conflicts.",
      example: "git merge feature-branch into main.",
      steps: ["Switch to target branch", "Run git merge source", "Resolve conflicts and commit"],
      code: `// git checkout main
// git merge feature/name`
    },
    {
      id: 6,
      title: "Resolving Merge Conflicts",
      description: "Identify and fix conflicting changes during merges.",
      example: "Open conflict markers and choose correct code.",
      steps: ["Run git status to see conflicts", "Edit files to resolve markers", "git add and commit the resolution"],
      code: `// Edit files, then:
 // git add resolved-file
 // git commit`
    },
    {
      id: 7,
      title: "Remote Repositories",
      description: "Connect local repos to remote hosts (GitHub/GitLab) and push/pull changes.",
      example: "git remote add origin <url> then git push -u origin main.",
      steps: ["Add remote URL", "Push branches", "Pull updates from remote regularly"],
      code: `// git remote add origin https://...`
    },
    {
      id: 8,
      title: "Pull Requests & Code Review",
      description: "Use pull requests to propose changes and collect peer reviews.",
      example: "Open PR from feature branch into main and add reviewers.",
      steps: ["Push branch to remote", "Open PR on platform", "Address review feedback"],
      code: `// Create branch, push, open PR in GitHub UI`
    },
    {
      id: 9,
      title: "Git Stash Workflow",
      description: "Temporarily store uncommitted changes with git stash.",
      example: "git stash save 'WIP' then git stash pop to restore.",
      steps: ["Run git stash to save WIP", "Switch branches to work elsewhere", "Apply stash when ready"],
      code: `// git stash
// git stash pop`
    },
    {
      id: 10,
      title: "Undoing Changes",
      description: "Safely undo mistakes using reset, checkout and revert.",
      example: "git revert <commit> to create a reversing commit.",
      steps: ["Understand difference between reset and revert", "Use checkout for local file undo", "Use revert for public history"],
      code: `// git revert <commit-hash>`
    },
    {
      id: 11,
      title: "Interactive Rebase",
      description: "Edit commit history locally with git rebase -i (use carefully).",
      example: "Squash multiple commits into one for a cleaner history.",
      steps: ["Run git rebase -i <base>", "Mark commits to squash/reword", "Force-push if history changed and remote accepts it"],
      code: `// git rebase -i HEAD~3`
    },
    {
      id: 12,
      title: "Cherry Picking Commits",
      description: "Apply a single commit from another branch using cherry-pick.",
      example: "git cherry-pick <commit-hash> to bring that change over.",
      steps: ["Identify commit hash", "Run git cherry-pick", "Resolve conflicts if any"],
      code: `// git cherry-pick <hash>`
    },
    {
      id: 13,
      title: "Git Hooks & Automation",
      description: "Run scripts automatically at Git lifecycle events using hooks.",
      example: "Use pre-commit hooks to run linters before commit.",
      steps: ["Explore .git/hooks", "Create scripts for desired events", "Keep hooks lightweight and documented"],
      code: `// create .git/hooks/pre-commit executable script`
    },
    {
      id: 14,
      title: "Advanced Git Log",
      description: "Use git log options for insightful commit history views.",
      example: "git log --oneline --graph shows compact graph view.",
      steps: ["Try --graph,--oneline,--author", "Use grep to find commits", "Format output for readability"],
      code: `// git log --oneline --graph`
    },
    {
      id: 15,
      title: "Git Bisect Debugging",
      description: "Use binary search to find commits that introduced a bug (diagnostic workflow).",
      example: "Start bisect and mark good/bad until the offending commit is found.",
      steps: ["Run git bisect start", "Mark good and bad states", "Narrow down to problematic commit"],
      code: `// git bisect start
// git bisect good <commit>
 // git bisect bad <commit>`
    },
    {
      id: 16,
      title: "Submodules & Dependencies",
      description: "Include external repositories as submodules for modular projects.",
      example: "git submodule add <repo> path/to/module",
      steps: ["Add submodule", "Update with submodule update --init", "Document usage for team"],
      code: `// git submodule add <repo> path`
    },
    {
      id: 17,
      title: "Git Reflog Recovery",
      description: "Recover lost commits using git reflog as a safety net.",
      example: "Find lost commit hash via reflog and reset to it.",
      steps: ["Run git reflog to list recent HEAD moves", "Reset to desired commit", "Create a branch to preserve recovered state"],
      code: `// git reflog
// git reset --hard <hash>`
    },
    {
      id: 18,
      title: "Branching Strategies",
      description: "Learn common workflows like Git Flow, GitHub Flow or trunk-based development.",
      example: "Use feature branches and PRs for collaborative work.",
      steps: ["Choose a branching model", "Document rules for merges/releases", "Automate CI on main branch"],
      code: `// Documented workflow in repo README`
    }
  ],

  html: [
    {
      id: 1,
      title: "Basic HTML Structure",
      description: "Create an HTML document with doctype, head, and body.",
      example: "<!DOCTYPE html><html><head>...</head><body>...</body></html>",
      steps: ["Start with <!DOCTYPE html>", "Include meta and title in head", "Place content inside body"],
      code: `<!DOCTYPE html>
<html><head><title>Demo</title></head><body>Hello</body></html>`
    },
    {
      id: 2,
      title: "Text Formatting Elements",
      description: "Use headings, paragraphs and semantic text tags.",
      example: "<h1>Heading</h1><p>Paragraph</p>",
      steps: ["Use appropriate heading levels", "Use <p> for paragraphs", "Use <strong>/<em> for emphasis"],
      code: `<h1>Title</h1><p>Some text</p>`
    },
    {
      id: 3,
      title: "Creating Lists",
      description: "Build ordered and unordered lists for structured content.",
      example: "<ul><li>Item</li></ul>",
      steps: ["Use <ul> or <ol>", "Nest lists for subitems", "Use semantic lists for data"],
      code: `<ul><li>One</li><li>Two</li></ul>`
    },
    {
      id: 4,
      title: "Working with Links",
      description: "Create internal and external links with anchor tags.",
      example: `<a href="https://example.com" target="_blank" rel="noopener">Visit</a>`,
      steps: ["Set href attribute", "Use target and rel for external links", "Use meaningful link text"],
      code: `<a href="/about">About</a>`
    },
    {
      id: 5,
      title: "Images and Media",
      description: "Embed images with alt text and responsive sizing.",
      example: `<img src="photo.jpg" alt="Description" width="300">`,
      steps: ["Always add alt text", "Use width/height or CSS for sizing", "Provide multiple sources for responsiveness"],
      code: `<img src="pic.jpg" alt="pic">`
    },
    {
      id: 6,
      title: "HTML Tables",
      description: "Create tables with thead, tbody, tr, th and td for tabular data.",
      example: "<table><thead>...</thead><tbody>...</tbody></table>",
      steps: ["Use <th> for headers", "Group rows with thead/tbody", "Avoid tables for layout"],
      code: `<table><tr><th>Name</th><td>Ada</td></tr></table>`
    },
    {
      id: 7,
      title: "HTML Forms",
      description: "Build forms using input, select, textarea and button elements.",
      example: "<form><input name='email' type='email' /></form>",
      steps: ["Use labels for accessibility", "Validate input types", "Handle form submission"],
      code: `<form><label>Email<input type="email" /></label></form>`
    },
    {
      id: 8,
      title: "Semantic HTML",
      description: "Use semantic tags like header, nav, main, article and footer.",
      example: "<header>Site header</header><main>Main content</main>",
      steps: ["Choose semantic tags instead of generic divs", "Improve accessibility and SEO", "Structure content logically"],
      code: `<main><article><h2>Topic</h2></article></main>`
    },
    {
      id: 9,
      title: "HTML5 Audio & Video",
      description: "Embed audio and video elements with controls and multiple sources.",
      example: `<video controls><source src="vid.mp4" type="video/mp4" /></video>`,
      steps: ["Provide controls attribute", "Offer multiple formats if possible", "Include captions for accessibility"],
      code: `<video controls src="sample.mp4"></video>`
    },
    {
      id: 10,
      title: "Meta Tags & SEO",
      description: "Add meta tags for viewport, description and Open Graph for sharing.",
      example: `<meta name="description" content="Short site description">`,
      steps: ["Add viewport for responsive design", "Provide meaningful description", "Add OG tags for social sharing"],
      code: `<meta name="viewport" content="width=device-width,initial-scale=1">`
    },
    {
      id: 11,
      title: "Responsive Images",
      description: "Serve appropriate image sizes with srcset and picture elements.",
      example: `<img srcset="small.jpg 480w, large.jpg 1200w" src="large.jpg" alt="">`,
      steps: ["Provide multiple source sizes", "Use sizes/srcset correctly", "Test on different resolutions"],
      code: `<img srcset="a.jpg 480w, b.jpg 800w" src="b.jpg" alt="">`
    },
    {
      id: 12,
      title: "HTML Entities & Symbols",
      description: "Use entities for reserved HTML characters and special symbols.",
      example: "Use &lt; &gt; &amp; for < > & respectively.",
      steps: ["Use named or numeric entities", "Escape user-provided content", "Use entities for special symbols"],
      code: `&lt;div&gt; &amp; &copy;`
    },
    {
      id: 13,
      title: "Accessible Forms",
      description: "Improve form accessibility with labels, fieldsets and ARIA attributes.",
      example: "<label for='email'>Email</label><input id='email'/>",
      steps: ["Associate labels with inputs", "Group related fields with fieldset/legend", "Use ARIA where necessary"],
      code: `<label for="q">Query</label><input id="q">`
    },
    {
      id: 14,
      title: "Data Attributes",
      description: "Store custom data on elements using data-* attributes for JS integration.",
      example: `<div data-id="123"></div>`,
      steps: ["Use data-* for small metadata", "Access via dataset in JS", "Avoid overloading DOM with large data blobs"],
      code: `<div data-user="42"></div>`
    },
    {
      id: 15,
      title: "Microdata & Schema.org",
      description: "Add structured data for search engines using schema.org attributes.",
      example: `<div itemscope itemtype="http://schema.org/Person">...</div>`,
      steps: ["Choose appropriate schema types", "Add itemprop for fields", "Validate with structured data tools"],
      code: `<!-- use microdata markup per schema.org docs -->`
    },
    {
      id: 16,
      title: "Complete Landing Page",
      description: "Build a cohesive landing page combining header, hero, features and footer.",
      example: "A hero section with CTA and features beneath.",
      steps: ["Plan sections", "Implement semantic markup", "Style responsively and test UX"],
      code: `<!-- Skeleton: header, main.hero, section.features, footer -->`
    },
    {
      id: 17,
      title: "Inline SVG Graphics",
      description: "Embed SVG directly in HTML for scalable vector graphics and styling.",
      example: `<svg width="24" height="24"><circle cx="12" cy="12" r="10"/></svg>`,
      steps: ["Place inline SVG in markup", "Style via CSS or attributes", "Keep accessibility with role/title"],
      code: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`
    },
    {
      id: 18,
      title: "Progressive Web App Manifest",
      description: "Create manifest.json to make a web app installable with icons and metadata.",
      example: `"start_url": "/", "display": "standalone"`,
      steps: ["Create manifest.json", "Link it in HTML head", "Provide icons and theme color"],
      code: `// link rel="manifest" href="/manifest.json"`
    }
  ],

  kali: [
    {
      id: 1,
      title: "Kali Linux Basics",
      description: "Familiarize with Kali environment and safe lab workflows (use isolated lab VMs).",
      example: "Explore filesystem layout and basic shell commands in a sandbox.",
      steps: ["Use an isolated lab VM", "Learn basic shell navigation", "Avoid experimenting on production networks"],
      code: `# Use a controlled lab environment for practice`
    },
    {
      id: 2,
      title: "Network Scanning with Nmap",
      description: "Concepts of network discovery and port/service enumeration (study defensively).",
      example: "Learn what open ports mean on your own lab machine.",
      steps: ["Study TCP/UDP fundamentals", "Practice only in lab environments you own", "Interpret scan results responsibly"],
      code: `// Educational: interpret scan output rather than run on external targets`
    },
    {
      id: 3,
      title: "Information Gathering",
      description: "OSINT and reconnaissance concepts for defensive assessments and research.",
      example: "Collect publicly available data about a sample domain you own.",
      steps: ["Use ethical, legal OSINT methods", "Document findings", "Respect privacy and laws"],
      code: `// Use responsible OSINT tools and legal scope`
    },
    {
      id: 4,
      title: "WiFi Security Analysis",
      description: "Learn WiFi security concepts, protocols and safe testing practices in lab setups.",
      example: "Understand differences between WEP/WPA/WPA2/WPA3 (theory).",
      steps: ["Study WiFi encryption and authentication", "Set up test SSIDs for experimentation", "Respect others' networks"],
      code: `// Study protocols and secure configurations`
    },
    {
      id: 5,
      title: "Password Cracking Basics",
      description: "Understand password hashing, salt and how to defend against cracking (do not attempt illegal cracking).",
      example: "Learn difference between hashed and salted passwords.",
      steps: ["Study hashing algorithms and salting", "Use strong hashing for storage", "Educate on password policies"],
      code: `# Use bcrypt for hashing: bcrypt.hashpw(password, bcrypt.gensalt())`
    },
    {
      id: 6,
      title: "Vulnerability Scanning",
      description: "High-level overview of automated scanners and how to prioritize remediations.",
      example: "Run scanners only against systems you own and interpret results.",
      steps: ["Scan only allowed systems", "Triangulate scanner findings manually", "Prioritize fixes by risk"],
      code: `// Use scanners responsibly in permitted scope`
    },
    {
      id: 7,
      title: "Metasploit Framework",
      description: "Conceptual overview of exploitation frameworks for research and defense; use only in labs.",
      example: "Study how payloads and modules are structured (theory).",
      steps: ["Learn framework architecture", "Use in isolated VMs", "Focus on detection and mitigation"],
      code: `// Research and defensive study only`
    },
    {
      id: 8,
      title: "Web Application Testing",
      description: "Learn common web vulnerabilities and secure coding practices (ethical testing only).",
      example: "Understand OWASP Top 10 categories and how to fix them.",
      steps: ["Study OWASP Top 10", "Test on intentionally vulnerable lab apps", "Learn fixes and secure patterns"],
      code: `// Practice on DVWA or similar intentionally vulnerable lab apps`
    },
    {
      id: 9,
      title: "SQL Injection Attacks",
      description: "Learn how SQL injection works and — importantly — how to prevent it (use safe examples).",
      example: "Use parameterized queries to prevent injection.",
      steps: ["Understand input sanitization and parameterization", "Never test on systems you don't own", "Learn secure query patterns"],
      code: `// Safe pattern (parameterized):
// db.query("SELECT * FROM users WHERE id = ?", [id])`
    },
    {
      id: 10,
      title: "Social Engineering Toolkit",
      description: "Study human factors in security and defensive countermeasures (ethical awareness).",
      example: "Design awareness training showing common phishing patterns.",
      steps: ["Learn common social engineering tactics", "Train users to spot phishing", "Implement technical mitigations like MFA"],
      code: `// Focus on awareness and defense, not exploitation`
    },
    {
      id: 11,
      title: "Privilege Escalation",
      description: "Understand how privilege escalation happens and how to mitigate it on systems you administer.",
      example: "Audit sudoers and file permissions in a lab environment.",
      steps: ["Check privileges and misconfigurations", "Patch and harden systems", "Use least-privilege principles"],
      code: `# Apply secure permissions and patch management`
    },
    {
      id: 12,
      title: "Network Traffic Analysis",
      description: "Analyze network captures for anomalies and defensive monitoring techniques.",
      example: "Open a sample pcap in Wireshark and filter by protocol.",
      steps: ["Capture traffic in a lab", "Use filters to focus on flows", "Look for unusual patterns and indicators"],
      code: `# Use Wireshark on sample capture files in lab`
    },
    {
      id: 13,
      title: "Advanced Exploitation",
      description: "High-level study of exploit mitigations and how modern defenses prevent attacks (no exploit instructions).",
      example: "Learn about ASLR and DEP and how they affect exploits.",
      steps: ["Study mitigation techniques", "Understand memory safety concepts", "Apply defensive coding and hardening"],
      code: `// Focus on mitigation and secure design`
    },
    {
      id: 14,
      title: "Active Directory Attacks",
      description: "Overview of AD concepts and defensive controls to protect domain environments.",
      example: "Learn how delegation and Kerberos policies affect security.",
      steps: ["Harden AD principals and permissions", "Monitor for abnormal authentication", "Follow least privilege"],
      code: `// Use lab AD to practice defenses only`
    },
    {
      id: 15,
      title: "Post-Exploitation",
      description: "Study how attackers maintain access and, importantly, how to detect and remove persistence.",
      example: "Audit autoruns and scheduled tasks for persistence indicators.",
      steps: ["Detect persistence mechanisms", "Remove and remediate", "Improve monitoring to detect reoccurrence"],
      code: `// Focus on detection and cleanup`
    },
    {
      id: 16,
      title: "Wireless Penetration Testing",
      description: "Learn wireless security concepts and how to defend WiFi networks (practice in lab only).",
      example: "Understand WPA2 vs WPA3 and secure configuration best practices.",
      steps: ["Configure secure WiFi in lab", "Test signal and throughput", "Use strong authentication and encryption"],
      code: `// Use secure configuration and monitoring`
    },
    {
      id: 17,
      title: "Reverse Engineering",
      description: "Intro to analyzing binaries for defense and malware analysis in controlled environments.",
      example: "Open a sample binary in a disassembler to inspect strings (lab only).",
      steps: ["Use lab VM and offline samples", "Study static vs dynamic analysis", "Respect legality and ethics"],
      code: `// Use IDA/Ghidra in isolated lab for learning`
    },
    {
      id: 18,
      title: "Red Team Operations",
      description: "High-level overview of full-scope assessments and defending against them (policy, detection).",
      example: "Plan assessment scope and create a defensive response playbook.",
      steps: ["Define clear legal scope", "Coordinate with stakeholders", "Focus on detection and remediation"],
      code: `// Emphasize planning, legal scope and defensive measures`
    }
  ],

  pyDataVisual: [
    {
      id: 1,
      title: "Matplotlib Basics",
      description: "Create basic line, bar and scatter charts with matplotlib.",
      example: "Plot y=[1,3,2] vs x=[0,1,2].",
      steps: ["Import matplotlib.pyplot as plt", "Create data arrays", "Call plt.plot/plt.show()"],
      code: `import matplotlib.pyplot as plt
plt.plot([0,1,2],[1,3,2]); plt.show()`
    },
    {
      id: 2,
      title: "Plot Customization",
      description: "Add titles, labels and legends to make plots informative.",
      example: "Add xlabel, ylabel and title to a chart.",
      steps: ["Set labels/titles", "Add legend", "Adjust layout and DPI"],
      code: `plt.title("Sample"); plt.xlabel("x"); plt.ylabel("y")`
    },
    {
      id: 3,
      title: "Pandas Plotting",
      description: "Use DataFrame.plot() for quick visualizations from pandas.",
      example: "df.plot(kind='bar') on a small DataFrame.",
      steps: ["Prepare DataFrame", "Call df.plot with kind", "Customize axes/labels"],
      code: `# df.plot(kind='bar')`
    },
    {
      id: 4,
      title: "Histograms and Distributions",
      description: "Visualize value distributions using histograms and KDE.",
      example: "plt.hist(data, bins=20)",
      steps: ["Choose bins", "Overlay KDE if needed", "Compare distributions visually"],
      code: `plt.hist(data, bins=20)`
    },
    {
      id: 5,
      title: "Seaborn Introduction",
      description: "Use Seaborn for attractive statistical plots and themes.",
      example: "sns.barplot(x='col', y='val', data=df)",
      steps: ["Import seaborn as sns", "Set style with sns.set()", "Use high-level plotting functions"],
      code: `import seaborn as sns
sns.set()`
    },
    {
      id: 6,
      title: "Subplots and Layouts",
      description: "Arrange multiple plots in a single figure using subplots.",
      example: "fig,axes = plt.subplots(1,2)",
      steps: ["Create subplots grid", "Plot into each axis", "Adjust spacing with tight_layout()"],
      code: `fig,axes = plt.subplots(1,2); axes[0].plot([1,2])`
    },
    {
      id: 7,
      title: "Heatmaps and Correlation",
      description: "Visualize correlation matrices and heatmaps for overview insights.",
      example: "sns.heatmap(df.corr(), annot=True)",
      steps: ["Compute correlation", "Plot heatmap", "Annotate for readability"],
      code: `sns.heatmap(df.corr(), annot=True)`
    },
    {
      id: 8,
      title: "Box Plots and Violin Plots",
      description: "Use box/violin plots to show distribution summaries and density.",
      example: "sns.boxplot(data=df, x='col')",
      steps: ["Choose categorical axis", "Draw plot", "Compare groups"],
      code: `sns.boxplot(x='group', y='value', data=df)`
    },
    {
      id: 9,
      title: "Time Series Visualization",
      description: "Plot time series with proper date parsing and formatting.",
      example: "df.set_index('date').plot()",
      steps: ["Convert to datetime", "Set index to dates", "Plot and format x-axis"],
      code: `df['date']=pd.to_datetime(df.date); df.set_index('date').plot()`
    },
    {
      id: 10,
      title: "Scatter Plots and Relationships",
      description: "Plot scatter and add regression lines to inspect relationships.",
      example: "sns.regplot(x='x', y='y', data=df)",
      steps: ["Plot scatter", "Fit/plot trendline", "Check outliers and leverage points"],
      code: `sns.regplot(x='x', y='y', data=df)`
    },
    {
      id: 11,
      title: "Categorical Data Visualization",
      description: "Visualize counts and distributions for categorical features.",
      example: "sns.countplot(x='category', data=df)",
      steps: ["Choose appropriate plot (count/bar)", "Annotate with percentages", "Compare groups"],
      code: `sns.countplot(x='category', data=df)`
    },
    {
      id: 12,
      title: "Plotly Interactive Charts",
      description: "Create interactive charts with plotly.express for web dashboards.",
      example: "px.scatter(df, x='x', y='y')",
      steps: ["Import plotly.express as px", "Create fig and show", "Configure hover and layout"],
      code: `import plotly.express as px
# px.scatter(df, x='a', y='b')`
    },
    {
      id: 13,
      title: "3D Visualizations",
      description: "Plot 3D surfaces or scatter plots for multi-dimensional data.",
      example: "Use mpl_toolkits.mplot3d Axes3D for 3D plots.",
      steps: ["Create 3D axes", "Plot surface/points", "Rotate to inspect shape"],
      code: `# from mpl_toolkits.mplot3d import Axes3D (example setup)`
    },
    {
      id: 14,
      title: "Geographic Data Visualization",
      description: "Map data geographically using folium or geopandas for spatial plotting.",
      example: "Create a folium map and add markers (use sample data).",
      steps: ["Prepare geo-data", "Choose folium or geopandas", "Plot and save interactive map"],
      code: `# import folium; folium.Map(location=[0,0])`
    },
    {
      id: 15,
      title: "Animation and Dynamic Plots",
      description: "Animate plot updates to show changing data over time.",
      example: "Use FuncAnimation for simple time series animation.",
      steps: ["Define update function", "Use FuncAnimation", "Export gif or display inline"],
      code: `# from matplotlib.animation import FuncAnimation`
    },
    {
      id: 16,
      title: "Advanced Seaborn Styling",
      description: "Use FacetGrid and PairGrid for multi-plot layouts and comparisons.",
      example: "sns.pairplot(df) to view pairwise relationships.",
      steps: ["Choose grid function", "Map plotting functions to facets", "Adjust aesthetics and legend"],
      code: `sns.pairplot(df)`
    },
    {
      id: 17,
      title: "Custom Color Palettes",
      description: "Create and apply coherent color palettes for professional visuals.",
      example: "sns.color_palette('viridis', n_colors=5)",
      steps: ["Explore built-in palettes", "Create custom palette", "Use consistently across plots"],
      code: `sns.color_palette("viridis", 5)`
    },
    {
      id: 18,
      title: "Dashboard Creation",
      description: "Combine multiple visualizations into a dashboard using Streamlit or Dash.",
      example: "Simple Streamlit app showing a chart and a filter widget.",
      steps: ["Design layout", "Build interactive widgets", "Deploy locally or to a service"],
      code: `# streamlit: st.write(df); st.line_chart(df['col'])`
    },
    {
      id: 19,
      title: "Statistical Annotations",
      description: "Add annotations like mean, median lines and p-values to plots.",
      example: "Annotate mean value on a histogram.",
      steps: ["Compute statistics", "Add annotations/text to plot", "Explain interpretation"],
      code: `plt.axvline(df['col'].mean(), label='mean')`
    },
    {
      id: 20,
      title: "Publication-Ready Figures",
      description: "Export high-resolution plots with proper labels, fonts and format.",
      example: "Use plt.savefig('figure.svg', dpi=300) for publication quality.",
      steps: ["Set figsize and DPI", "Use clear labels and legends", "Export appropriate format (svg/pdf)"],
      code: `plt.savefig("figure.png", dpi=300)`
    }
  ],

  pyML: [
    {
      id: 1,
      title: "Data Preprocessing & Feature Engineering",
      description: "Clean data, encode categoricals and scale features for models.",
      example: "Use StandardScaler to scale numeric columns.",
      steps: ["Handle missing values", "Encode categorical variables", "Scale/normalize features"],
      code: `from sklearn.preprocessing import StandardScaler
# scaler = StandardScaler(); X_scaled = scaler.fit_transform(X)`
    },
    {
      id: 2,
      title: "Linear & Logistic Regression",
      description: "Train linear models for regression and logistic for classification.",
      example: "Fit LogisticRegression and evaluate accuracy.",
      steps: ["Split data", "Fit model", "Evaluate with appropriate metrics"],
      code: `from sklearn.linear_model import LogisticRegression
# model = LogisticRegression().fit(X_train,y_train)`
    },
    {
      id: 3,
      title: "Decision Trees & Random Forests",
      description: "Use tree-based models and ensembles for robust predictions.",
      example: "Train RandomForestClassifier and inspect feature importances.",
      steps: ["Train tree-based model", "Tune hyperparameters", "Assess feature importance"],
      code: `from sklearn.ensemble import RandomForestClassifier
# clf = RandomForestClassifier().fit(X,y)`
    },
    {
      id: 4,
      title: "Support Vector Machines (SVM)",
      description: "Apply SVMs for classification/regression with kernel options.",
      example: "Train SVM with rbf kernel on small dataset.",
      steps: ["Select kernel and hyperparams", "Scale inputs", "Use cross-validation"],
      code: `from sklearn.svm import SVC
# SVC(kernel='rbf').fit(X,y)`
    },
    {
      id: 5,
      title: "K-Means Clustering & PCA",
      description: "Perform unsupervised clustering and PCA for dimensionality reduction.",
      example: "Use KMeans to find cluster centers and PCA to visualize.",
      steps: ["Preprocess data", "Run KMeans", "Use PCA to visualize clusters"],
      code: `from sklearn.cluster import KMeans
# KMeans(n_clusters=3).fit(X)`
    },
    {
      id: 6,
      title: "Neural Networks with TensorFlow/Keras",
      description: "Build simple feedforward networks using Keras Sequential API.",
      example: "A small dense network for classification.",
      steps: ["Define model architecture", "Compile with loss/optimizer", "Train and evaluate"],
      code: `from tensorflow import keras
# model = keras.Sequential([keras.layers.Dense(10,activation='relu')])`
    },
    {
      id: 7,
      title: "Natural Language Processing (NLP)",
      description: "Text preprocessing, vectorization and simple models for NLP tasks.",
      example: "Use TfidfVectorizer with a logistic regression classifier.",
      steps: ["Tokenize and clean text", "Convert to numeric features", "Train and evaluate models"],
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
# TfidfVectorizer().fit_transform(corpus)`
    },
    {
      id: 8,
      title: "Model Evaluation & Cross-Validation",
      description: "Use cross-validation and metrics like precision, recall and ROC-AUC.",
      example: "Use cross_val_score to evaluate a classifier.",
      steps: ["Choose metric", "Use cross-validation", "Interpret results and variance"],
      code: `from sklearn.model_selection import cross_val_score
# cross_val_score(model,X,y,cv=5)`
    },
    {
      id: 9,
      title: "Gradient Boosting & XGBoost",
      description: "Train boosting models for high-performance tabular tasks (use libraries).",
      example: "Fit an XGBoost model with default params.",
      steps: ["Prepare data", "Fit gradient boosting model", "Tune key hyperparameters"],
      code: `# import xgboost as xgb
# xgb.XGBClassifier().fit(X,y)`
    },
    {
      id: 10,
      title: "End-to-End ML Pipeline Project",
      description: "Build a full pipeline from preprocessing to deployment-ready model.",
      example: "Combine cleaning, training, evaluation and export steps.",
      steps: ["Plan pipeline stages", "Implement and test each stage", "Save model and document usage"],
      code: `# pipeline: preprocess -> train -> evaluate -> save`
    }
  ]
};

export default AllExercises;
