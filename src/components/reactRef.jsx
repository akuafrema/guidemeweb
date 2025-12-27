import { useState } from 'react';
import { Search, Code, Zap, Package, Layout, Database, Box } from 'lucide-react';

export default function ReactReference() {
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
      id: 'basics',
      title: 'React Basics',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      items: [
        {
          name: 'JSX Syntax',
          syntax: 'const element = <h1>Hello</h1>',
          description: 'JavaScript XML - write HTML-like code in JavaScript',
          example: 'const name = "Alice";\nconst element = <h1>Hello, {name}!</h1>;\n\n// Expressions in JSX\nconst result = <p>{2 + 2}</p>; // <p>4</p>\n\n// Attributes (camelCase)\nconst img = <img src={url} alt="Photo" className="big" />;\n\n// Children\nconst card = (\n  <div className="card">\n    <h2>{title}</h2>\n    <p>{description}</p>\n  </div>\n);',
          use: 'Use {} for JavaScript expressions. className instead of class. camelCase for attributes (onClick, onChange)'
        },
        {
          name: 'Components',
          syntax: 'function Component() { return <div>...</div> }',
          description: 'Reusable pieces of UI built as functions or classes',
          example: '// Function component\nfunction Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// Arrow function\nconst Greeting = ({ name }) => <h1>Hi, {name}!</h1>;\n\n// Usage\n<Welcome name="Alice" />\n\n// Component with children\nfunction Card({ title, children }) {\n  return (\n    <div className="card">\n      <h2>{title}</h2>\n      {children}\n    </div>\n  );\n}\n\n<Card title="My Card">\n  <p>Content here</p>\n</Card>',
          use: 'Always capitalize component names. Use props for data. Return single root element or fragment <>'
        },
        {
          name: 'Props',
          syntax: 'function Component({ prop1, prop2 }) {}',
          description: 'Pass data from parent to child components',
          example: '// Passing props\n<UserCard name="Alice" age={30} isActive={true} />\n\n// Receiving props\nfunction UserCard({ name, age, isActive }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>Age: {age}</p>\n      {isActive && <span>✓ Active</span>}\n    </div>\n  );\n}\n\n// Default props\nfunction Button({ text = "Click me", type = "button" }) {\n  return <button type={type}>{text}</button>;\n}\n\n// Spread props\nconst props = { name: "Bob", age: 25 };\n<UserCard {...props} />',
          use: 'Props are read-only. Destructure in params. Use default values. Spread operator for multiple props'
        },
        {
          name: 'Conditional Rendering',
          syntax: '{condition && <Component />}',
          description: 'Show different UI based on conditions',
          example: '// && operator\n{isLoggedIn && <Dashboard />}\n\n// Ternary\n{isLoggedIn ? <Dashboard /> : <Login />}\n\n// Variable\nlet content;\nif (isLoading) {\n  content = <Spinner />;\n} else if (error) {\n  content = <Error message={error} />;\n} else {\n  content = <Data items={items} />;\n}\nreturn <div>{content}</div>;\n\n// Early return\nif (!user) return <Login />;\nreturn <Dashboard user={user} />;',
          use: 'Use && for simple conditionals. Ternary for if-else. Variables for complex logic'
        }
      ]
    },
    {
      id: 'hooks',
      title: 'Hooks',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      items: [
        {
          name: 'useState',
          syntax: 'const [state, setState] = useState(initial)',
          description: 'Add state to functional components',
          example: '// Counter\nconst [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>\n  Count: {count}\n</button>\n\n// Multiple states\nconst [name, setName] = useState("");\nconst [age, setAge] = useState(0);\n\n// Object state\nconst [user, setUser] = useState({ name: "", age: 0 });\nsetUser({ ...user, name: "Alice" });\n\n// Array state\nconst [items, setItems] = useState([]);\nsetItems([...items, newItem]);\n\n// Function updater\nsetCount(prev => prev + 1);',
          use: 'Never mutate state directly. Use updater function when new state depends on old state'
        },
        {
          name: 'useEffect',
          syntax: 'useEffect(() => { /* effect */ }, [deps])',
          description: 'Side effects: data fetching, subscriptions, DOM updates',
          example: '// Run once on mount\nuseEffect(() => {\n  fetchData();\n}, []);\n\n// Run when dependency changes\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);\n\n// Cleanup\nuseEffect(() => {\n  const timer = setInterval(() => {\n    console.log("Tick");\n  }, 1000);\n  \n  return () => clearInterval(timer);\n}, []);\n\n// Multiple effects\nuseEffect(() => { /* effect 1 */ }, [dep1]);\nuseEffect(() => { /* effect 2 */ }, [dep2]);',
          use: 'Empty [] runs once. Include all dependencies. Return cleanup function to prevent memory leaks'
        },
        {
          name: 'useRef',
          syntax: 'const ref = useRef(initialValue)',
          description: 'Access DOM elements or persist values without re-render',
          example: '// DOM reference\nconst inputRef = useRef(null);\n\nconst focusInput = () => {\n  inputRef.current.focus();\n};\n\n<input ref={inputRef} />\n<button onClick={focusInput}>Focus</button>\n\n// Persist value\nconst countRef = useRef(0);\n\nuseEffect(() => {\n  countRef.current += 1;\n  console.log(`Rendered ${countRef.current} times`);\n});\n\n// Previous value\nconst prevValue = useRef();\nuseEffect(() => {\n  prevValue.current = value;\n}, [value]);',
          use: 'Use for DOM access, intervals, or values that don\'t trigger re-renders. .current holds the value'
        },
        {
          name: 'useContext',
          syntax: 'const value = useContext(Context)',
          description: 'Share data across component tree without props',
          example: '// Create context\nconst ThemeContext = createContext("light");\n\n// Provider\nfunction App() {\n  const [theme, setTheme] = useState("dark");\n  \n  return (\n    <ThemeContext.Provider value={theme}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\n// Consumer\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return (\n    <button className={theme}>\n      Click me\n    </button>\n  );\n}',
          use: 'Avoid prop drilling. Good for themes, auth, language. Provider at top level'
        },
        {
          name: 'useReducer',
          syntax: 'const [state, dispatch] = useReducer(reducer, initial)',
          description: 'Complex state logic with actions',
          example: 'const reducer = (state, action) => {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    case "reset":\n      return { count: 0 };\n    default:\n      return state;\n  }\n};\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  \n  return (\n    <div>\n      <p>{state.count}</p>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n    </div>\n  );\n}',
          use: 'Use for complex state with multiple sub-values or when next state depends on previous'
        }
      ]
    },
    {
      id: 'events',
      title: 'Events & Forms',
      icon: Box,
      color: 'from-green-500 to-emerald-600',
      items: [
        {
          name: 'Event Handling',
          syntax: 'onClick={() => handleClick()}',
          description: 'Handle user interactions',
          example: '// Click handler\nconst handleClick = () => {\n  alert("Clicked!");\n};\n<button onClick={handleClick}>Click</button>\n\n// With parameter\n<button onClick={() => handleClick(id)}>Click</button>\n\n// Event object\nconst handleClick = (e) => {\n  e.preventDefault();\n  console.log(e.target);\n};\n\n// Common events\n<input onChange={handleChange} />\n<form onSubmit={handleSubmit} />\n<div onMouseEnter={handleHover} />\n<input onKeyDown={handleKeyPress} />',
          use: 'Event names are camelCase. Pass function reference, not call. Use arrow functions for parameters'
        },
        {
          name: 'Form Handling',
          syntax: '<input value={state} onChange={handleChange} />',
          description: 'Controlled components for form inputs',
          example: 'function Form() {\n  const [form, setForm] = useState({ name: "", email: "" });\n  \n  const handleChange = (e) => {\n    setForm({ ...form, [e.target.name]: e.target.value });\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(form);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name="name"\n        value={form.name}\n        onChange={handleChange}\n      />\n      <input\n        name="email"\n        value={form.email}\n        onChange={handleChange}\n      />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}',
          use: 'Controlled: value + onChange. Name attribute for multiple inputs. Prevent default on submit'
        }
      ]
    },
    {
      id: 'lists',
      title: 'Lists & Keys',
      icon: Layout,
      color: 'from-orange-500 to-red-600',
      items: [
        {
          name: 'Rendering Lists',
          syntax: 'items.map(item => <Component key={item.id} />)',
          description: 'Render arrays of components with map()',
          example: '// Basic list\nconst numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map(num => (\n  <li key={num}>{num}</li>\n));\n\n// Component list\nconst users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" }\n];\n\nreturn (\n  <ul>\n    {users.map(user => (\n      <UserCard key={user.id} user={user} />\n    ))}\n  </ul>\n);\n\n// With index (avoid if possible)\nitems.map((item, index) => (\n  <div key={index}>{item}</div>\n));',
          use: 'Always use unique keys. Prefer IDs over index. Keys help React identify changed items'
        }
      ]
    },
    {
      id: 'styling',
      title: 'Styling',
      icon: Package,
      color: 'from-pink-500 to-rose-600',
      items: [
        {
          name: 'Inline Styles',
          syntax: 'style={{ property: value }}',
          description: 'Style components with JavaScript objects',
          example: '// Inline styles\nconst divStyle = {\n  color: "blue",\n  backgroundColor: "lightgray",\n  padding: "10px",\n  fontSize: "16px"\n};\n\n<div style={divStyle}>Styled</div>\n\n// Dynamic styles\n<div style={{ color: isActive ? "green" : "red" }}>\n  Status\n</div>\n\n// Multiple styles\n<div style={{ ...baseStyle, ...customStyle }}>Text</div>',
          use: 'Use camelCase for properties. Values are strings. Prefer CSS classes for static styles'
        },
        {
          name: 'CSS Classes',
          syntax: 'className="class-name"',
          description: 'Apply CSS classes to elements',
          example: '// Static class\n<div className="card">Content</div>\n\n// Conditional classes\n<div className={isActive ? "active" : "inactive"}>\n  Status\n</div>\n\n// Multiple classes\n<div className={`card ${isLarge ? "large" : "small"}`}>\n  Content\n</div>\n\n// Template literals\n<button className={`btn btn-${variant} ${disabled ? "disabled" : ""}`}>\n  Click\n</button>',
          use: 'Use className, not class. Template literals for dynamic classes. Consider classnames library'
        }
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: Zap,
      color: 'from-yellow-500 to-amber-600',
      items: [
        {
          name: 'useMemo',
          syntax: 'const value = useMemo(() => compute(), [deps])',
          description: 'Memoize expensive calculations',
          example: 'function Component({ items }) {\n  // Expensive calculation\n  const sortedItems = useMemo(() => {\n    return items.sort((a, b) => a.value - b.value);\n  }, [items]);\n  \n  return <List items={sortedItems} />;\n}\n\n// Without useMemo (recalculates every render)\nconst sortedItems = items.sort((a, b) => a.value - b.value);',
          use: 'Use for expensive computations. Only recalculates when dependencies change'
        },
        {
          name: 'useCallback',
          syntax: 'const fn = useCallback(() => {}, [deps])',
          description: 'Memoize function references',
          example: 'function Parent() {\n  const [count, setCount] = useState(0);\n  \n  // Memoized function\n  const handleClick = useCallback(() => {\n    console.log("Clicked");\n  }, []);\n  \n  return <Child onClick={handleClick} />;\n}\n\n// Child won\'t re-render unnecessarily\nconst Child = React.memo(({ onClick }) => {\n  return <button onClick={onClick}>Click</button>;\n});',
          use: 'Use when passing callbacks to optimized child components. Prevents unnecessary re-renders'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              React Reference Guide
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-6">
              Complete reference for React components, hooks, events, and best practices
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search React concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-2xl"
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
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} topics</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? "▼" : "▶"}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-200 p-6 space-y-6">
                    {section.items.map((item, index) => (
                      <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-blue-500 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        
                        <div className="bg-gray-50 rounded-lg p-4 mb-3 font-mono text-sm">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Syntax</p>
                          <code className="text-blue-700">{item.syntax}</code>
                        </div>
                        
                        <div className="bg-gray-900 rounded-lg p-4 mb-3">
                          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Example</p>
                          <pre className="text-sm font-mono text-green-400 overflow-x-auto">
                            <code>{item.example}</code>
                          </pre>
                        </div>

                        <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                          <p className="text-xs font-semibold text-cyan-600 uppercase mb-1">Usage Tips</p>
                          <p className="text-sm text-cyan-700">{item.use}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">Try a different search term</p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Best Practices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">React Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Component Design</h3>
              <p className="text-gray-600 text-sm">
                Keep components small and focused. Extract reusable logic into custom hooks. Use prop destructuring for clarity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">State Management</h3>
              <p className="text-gray-600 text-sm">
                Lift state up when needed. Use Context for global state. Keep state as local as possible. Avoid unnecessary re-renders.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Database className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">
                Use keys properly in lists. Memoize expensive calculations. Profile before optimizing. Code splitting for large apps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}