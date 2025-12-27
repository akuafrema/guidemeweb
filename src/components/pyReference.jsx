import { useState } from 'react';
import { Search, Code, Database, Zap, ChevronDown, ChevronRight, FileText, Box, Package, Layout } from 'lucide-react';

export default function PythonReference() {
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
      title: 'Python Basics',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Variables & Types',
          syntax: 'variable = value',
          description: 'Define variables and understand basic data types',
          example: '# Numbers\nnum = 42\nfloat_num = 3.14\n\n# Strings\nname = "Python"\nmultiline = """This is\na multiline\nstring"""\n\n# Boolean\nis_active = True\n\n# Type checking\nprint(type(num))  # <class \'int\'>\nprint(isinstance(num, int))  # True\n\n# Type conversion\nstr_num = str(42)  # "42"\nint_str = int("42")  # 42',
          use: 'Dynamic typing - no need to declare types. Use type() to check type, isinstance() to verify'
        },
        {
          name: 'String Operations',
          syntax: 'string.method()',
          description: 'Common string manipulation methods',
          example: 'text = "  Hello, World!  "\n\n# Case methods\nprint(text.lower())  # "  hello, world!  "\nprint(text.upper())  # "  HELLO, WORLD!  "\nprint(text.title())  # "  Hello, World!  "\n\n# Whitespace\nprint(text.strip())  # "Hello, World!"\nprint(text.lstrip())  # "Hello, World!  "\n\n# Finding/replacing\nprint(text.replace("World", "Python"))  # "  Hello, Python!  "\nprint(text.find("World"))  # 9\nprint("World" in text)  # True\n\n# Splitting/joining\nwords = text.strip().split(", ")  # ["Hello", "World!"]\njoined = "-".join(words)  # "Hello-World!"',
          use: 'Strings are immutable. Methods return new strings. Use f-strings for formatting: f"Hello {name}"'
        },
        {
          name: 'f-Strings (Formatted Strings)',
          syntax: 'f"text {variable}"',
          description: 'Modern string formatting with embedded expressions',
          example: 'name = "Alice"\nage = 30\npi = 3.14159\n\n# Basic formatting\nprint(f"Hello, {name}!")  # "Hello, Alice!"\n\n# Expressions\nprint(f"{name} is {age} years old")  # "Alice is 30 years old"\nprint(f"Next year: {age + 1}")  # "Next year: 31"\n\n# Formatting numbers\nprint(f"Pi: {pi:.2f}")  # "Pi: 3.14"\nprint(f"Large number: {1000000:,}")  # "Large number: 1,000,000"\n\n# Alignment\nprint(f"{name:>10}")  # "     Alice" (right-aligned)\nprint(f"{name:<10}")  # "Alice     " (left-aligned)\nprint(f"{name:^10}")  # "  Alice   " (centered)',
          use: 'Preferred over .format() and %. Use :.2f for decimals, :, for thousands separator'
        },
        {
          name: 'Lists',
          syntax: 'list = [item1, item2, ...]',
          description: 'Ordered, mutable collection of items',
          example: 'fruits = ["apple", "banana", "cherry"]\n\n# Accessing\nprint(fruits[0])  # "apple"\nprint(fruits[-1])  # "cherry" (last item)\n\n# Modifying\nfruits.append("orange")  # Add to end\nfruits.insert(1, "mango")  # Insert at index\nfruits.remove("banana")  # Remove by value\npopped = fruits.pop()  # Remove and return last\n\n# Slicing\nprint(fruits[1:3])  # Items from index 1 to 2\nprint(fruits[:2])  # First 2 items\nprint(fruits[::2])  # Every other item\n\n# Other operations\nprint(len(fruits))  # Length\nprint("apple" in fruits)  # True\nfruits.sort()  # Sort in place\nsorted_fruits = sorted(fruits)  # Return sorted copy',
          use: 'Most versatile collection type. Use .append() for single items, .extend() for multiple'
        },
        {
          name: 'Dictionaries',
          syntax: 'dict = {key: value}',
          description: 'Key-value pairs for fast lookups',
          example: 'person = {\n    "name": "Alice",\n    "age": 30,\n    "city": "New York"\n}\n\n# Accessing\nprint(person["name"])  # "Alice"\nprint(person.get("age"))  # 30\nprint(person.get("phone", "N/A"))  # "N/A" (default)\n\n# Modifying\nperson["age"] = 31  # Update\nperson["email"] = "alice@email.com"  # Add new key\ndel person["city"]  # Delete key\n\n# Iterating\nfor key in person:\n    print(f"{key}: {person[key]}")\n\nfor key, value in person.items():\n    print(f"{key}: {value}")\n\n# Methods\nprint(person.keys())  # dict_keys([...])\nprint(person.values())  # dict_values([...])',
          use: 'Fast O(1) lookups. Keys must be immutable (strings, numbers, tuples). Use .get() to avoid KeyError'
        },
        {
          name: 'Tuples & Sets',
          syntax: 'tuple = (item1, item2); set = {item1, item2}',
          description: 'Tuples are immutable lists, sets are unordered unique items',
          example: '# Tuples - immutable\npoint = (10, 20)\nx, y = point  # Unpacking\nprint(x, y)  # 10 20\n\n# Tuples are great for returning multiple values\ndef get_coords():\n    return (10, 20)\n\nx, y = get_coords()\n\n# Sets - unique items, no order\nfruits = {"apple", "banana", "cherry", "apple"}\nprint(fruits)  # {"apple", "banana", "cherry"}\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1 | set2)  # Union: {1, 2, 3, 4, 5}\nprint(set1 & set2)  # Intersection: {3}\nprint(set1 - set2)  # Difference: {1, 2}\n\nfruits.add("orange")\nfruits.remove("banana")',
          use: 'Tuples for immutable data. Sets for removing duplicates and membership testing (fast O(1))'
        }
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'If-Elif-Else',
          syntax: 'if condition: ... elif condition: ... else: ...',
          description: 'Conditional execution based on boolean expressions',
          example: 'age = 18\n\n# Basic if-else\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")\n\n# Multiple conditions\nif age < 13:\n    print("Child")\nelif age < 18:\n    print("Teenager")\nelse:\n    print("Adult")\n\n# Inline if (ternary)\nstatus = "Adult" if age >= 18 else "Minor"\n\n# Multiple conditions\nif age >= 18 and age < 65:\n    print("Working age")\n\nif age < 18 or age > 65:\n    print("Dependent")\n\n# Truthy/Falsy\nif []:  # Empty list is falsy\n    print("Never prints")\n\nif [1, 2]:  # Non-empty is truthy\n    print("Prints")',
          use: 'Use elif, not else if. Falsy values: None, False, 0, "", [], {}, set(). Everything else is truthy'
        },
        {
          name: 'For Loops',
          syntax: 'for item in iterable:',
          description: 'Iterate over sequences and iterables',
          example: '# Iterate over list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Iterate with index\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")\n\n# Range\nfor i in range(5):  # 0 to 4\n    print(i)\n\nfor i in range(2, 10, 2):  # 2, 4, 6, 8\n    print(i)\n\n# Iterate over dictionary\nperson = {"name": "Alice", "age": 30}\nfor key, value in person.items():\n    print(f"{key}: {value}")\n\n# List comprehension (compact for loop)\nsquares = [x**2 for x in range(10)]\neven_squares = [x**2 for x in range(10) if x % 2 == 0]',
          use: 'Use enumerate() for index. range(n) for numbers. List comprehensions for transforming lists'
        },
        {
          name: 'While Loops',
          syntax: 'while condition:',
          description: 'Repeat while condition is true',
          example: '# Basic while loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# With break\nwhile True:\n    user_input = input("Enter \'quit\' to exit: ")\n    if user_input == "quit":\n        break\n    print(f"You entered: {user_input}")\n\n# With continue\ni = 0\nwhile i < 10:\n    i += 1\n    if i % 2 == 0:\n        continue  # Skip even numbers\n    print(i)  # Only prints odd\n\n# While-else (rarely used)\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1\nelse:\n    print("Loop completed normally")',
          use: 'Use for loops when you know iterations. Use while for unknown iterations or user input loops'
        },
        {
          name: 'Break, Continue, Pass',
          syntax: 'break / continue / pass',
          description: 'Control loop execution flow',
          example: '# Break - exit loop immediately\nfor i in range(10):\n    if i == 5:\n        break  # Stops at 5\n    print(i)  # Prints 0-4\n\n# Continue - skip to next iteration\nfor i in range(5):\n    if i == 2:\n        continue  # Skips 2\n    print(i)  # Prints 0, 1, 3, 4\n\n# Pass - do nothing (placeholder)\nfor i in range(5):\n    if i == 2:\n        pass  # Placeholder for future code\n    print(i)  # Prints all\n\n# Pass in function definition\ndef future_function():\n    pass  # TODO: implement later\n\n# Nested loops with break\nfor i in range(3):\n    for j in range(3):\n        if j == 1:\n            break  # Only breaks inner loop\n        print(f"{i}, {j}")',
          use: 'break exits loop. continue skips current iteration. pass does nothing (placeholder)'
        },
        {
          name: 'Try-Except (Error Handling)',
          syntax: 'try: ... except ExceptionType: ...',
          description: 'Handle exceptions and errors gracefully',
          example: '# Basic try-except\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n\n# Multiple exceptions\ntry:\n    value = int("abc")\nexcept ValueError:\n    print("Invalid number")\nexcept TypeError:\n    print("Wrong type")\n\n# Catch any exception\ntry:\n    risky_operation()\nexcept Exception as e:\n    print(f"Error: {e}")\n\n# Finally (always executes)\ntry:\n    file = open("data.txt")\n    # process file\nexcept FileNotFoundError:\n    print("File not found")\nfinally:\n    print("Cleanup code here")\n\n# Else (runs if no exception)\ntry:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print(f"Success: {result}")',
          use: 'Catch specific exceptions first. Use finally for cleanup. Avoid bare except (catches everything)'
        }
      ]
    },
    {
      id: 'functions',
      title: 'Functions & Lambda',
      icon: Box,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'Function Definition',
          syntax: 'def function_name(parameters):',
          description: 'Define reusable blocks of code',
          example: '# Basic function\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))  # "Hello, Alice!"\n\n# Multiple parameters\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # 8\n\n# Default parameters\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet("Bob"))  # "Hello, Bob!"\nprint(greet("Bob", "Hi"))  # "Hi, Bob!"\n\n# Multiple return values\ndef get_stats(numbers):\n    return min(numbers), max(numbers), sum(numbers)\n\nmin_val, max_val, total = get_stats([1, 2, 3, 4, 5])\n\n# Docstrings\ndef multiply(a, b):\n    """Multiply two numbers and return the result."""\n    return a * b',
          use: 'Use descriptive names. Default params must come after regular params. Use docstrings to document'
        },
        {
          name: 'Args and Kwargs',
          syntax: '*args, **kwargs',
          description: 'Variable number of arguments',
          example: '# *args - variable positional arguments\ndef sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3))  # 6\nprint(sum_all(1, 2, 3, 4, 5))  # 15\n\n# **kwargs - variable keyword arguments\ndef print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nprint_info(name="Alice", age=30, city="NYC")\n\n# Combining all\ndef flexible(a, b, *args, **kwargs):\n    print(f"a={a}, b={b}")\n    print(f"args={args}")\n    print(f"kwargs={kwargs}")\n\nflexible(1, 2, 3, 4, x=5, y=6)\n# a=1, b=2\n# args=(3, 4)\n# kwargs={\'x\': 5, \'y\': 6}\n\n# Unpacking\nnums = [1, 2, 3]\nprint(sum_all(*nums))  # Unpacks list',
          use: '*args for variable positional args (tuple). **kwargs for variable keyword args (dict). Order: regular, *args, **kwargs'
        },
        {
          name: 'Lambda Functions',
          syntax: 'lambda parameters: expression',
          description: 'Anonymous single-expression functions',
          example: '# Basic lambda\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# Multiple parameters\nadd = lambda a, b: a + b\nprint(add(3, 4))  # 7\n\n# With map()\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # [1, 4, 9, 16, 25]\n\n# With filter()\neven = list(filter(lambda x: x % 2 == 0, numbers))\nprint(even)  # [2, 4]\n\n# With sorted()\npeople = [(\'Alice\', 30), (\'Bob\', 25), (\'Charlie\', 35)]\nsorted_by_age = sorted(people, key=lambda x: x[1])\nprint(sorted_by_age)  # [(\'Bob\', 25), (\'Alice\', 30), (\'Charlie\', 35)]\n\n# In list comprehension alternative\nsquared = [x**2 for x in numbers]  # Preferred over map',
          use: 'Use for simple one-line functions. Common with map(), filter(), sorted(). For complex logic, use def'
        },
        {
          name: 'Decorators',
          syntax: '@decorator',
          description: 'Modify or enhance functions',
          example: '# Basic decorator\ndef my_decorator(func):\n    def wrapper():\n        print("Before function")\n        func()\n        print("After function")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()\n# Before function\n# Hello!\n# After function\n\n# Decorator with arguments\ndef repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f"Hello {name}")\n\ngreet("Alice")\n# Prints "Hello Alice" 3 times\n\n# Common built-in decorators\nclass MyClass:\n    @staticmethod\n    def static_method():\n        print("No self needed")\n    \n    @classmethod\n    def class_method(cls):\n        print(f"Class: {cls}")',
          use: 'Common uses: logging, timing, authentication. @property for getters/setters. @staticmethod/@classmethod in classes'
        },
        {
          name: 'Map, Filter, Reduce',
          syntax: 'map(func, iterable)',
          description: 'Functional programming tools for transforming iterables',
          example: 'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\n# Map - apply function to each item\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # [1, 4, 9, 16, 25]\n\n# Map with multiple iterables\na = [1, 2, 3]\nb = [4, 5, 6]\nsums = list(map(lambda x, y: x + y, a, b))\nprint(sums)  # [5, 7, 9]\n\n# Filter - keep items that match condition\neven = list(filter(lambda x: x % 2 == 0, numbers))\nprint(even)  # [2, 4]\n\n# Reduce - combine items into single value\ntotal = reduce(lambda x, y: x + y, numbers)\nprint(total)  # 15\n\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # 120\n\n# List comprehension alternatives (often preferred)\nsquared = [x**2 for x in numbers]\neven = [x for x in numbers if x % 2 == 0]',
          use: 'map() transforms, filter() selects, reduce() combines. List comprehensions often more Pythonic'
        }
      ]
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      icon: Package,
      color: 'from-cyan-500 to-cyan-600',
      items: [
        {
          name: 'Classes & Objects',
          syntax: 'class ClassName:',
          description: 'Define custom types with attributes and methods',
          example: '# Basic class\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hello, I\'m {self.name}"\n    \n    def birthday(self):\n        self.age += 1\n\n# Create objects\nperson1 = Person("Alice", 30)\nperson2 = Person("Bob", 25)\n\nprint(person1.greet())  # "Hello, I\'m Alice"\nperson1.birthday()\nprint(person1.age)  # 31\n\n# Class variables (shared by all instances)\nclass Dog:\n    species = "Canis familiaris"  # Class variable\n    \n    def __init__(self, name):\n        self.name = name  # Instance variable\n\ndog1 = Dog("Buddy")\ndog2 = Dog("Max")\nprint(dog1.species)  # "Canis familiaris"\nprint(Dog.species)  # "Canis familiaris"',
          use: '__init__ is constructor. self refers to instance. Use class variables for shared data'
        },
        {
          name: 'Inheritance',
          syntax: 'class Child(Parent):',
          description: 'Create specialized classes from base classes',
          example: '# Base class\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\n# Derived classes\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\ndog = Dog("Buddy")\ncat = Cat("Whiskers")\n\nprint(dog.speak())  # "Buddy says Woof!"\nprint(cat.speak())  # "Whiskers says Meow!"\n\n# Calling parent methods\nclass Bird(Animal):\n    def __init__(self, name, can_fly):\n        super().__init__(name)  # Call parent __init__\n        self.can_fly = can_fly\n    \n    def speak(self):\n        return f"{self.name} says Tweet!"\n\nbird = Bird("Tweety", True)',
          use: 'Child inherits parent attributes/methods. Use super() to call parent methods. Override to customize'
        },
        {
          name: 'Magic Methods (Dunder)',
          syntax: '__method__(self)',
          description: 'Special methods for operator overloading and behavior',
          example: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    # String representation\n    def __str__(self):\n        return f"Point({self.x}, {self.y})"\n    \n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"\n    \n    # Operator overloading\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n    \n    # Length\n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n\np1 = Point(1, 2)\np2 = Point(3, 4)\n\nprint(p1)  # Point(1, 2) - uses __str__\np3 = p1 + p2  # Point(4, 6) - uses __add__\nprint(p1 == p2)  # False - uses __eq__\nprint(len(p1))  # 2 - uses __len__',
          use: '__str__ for readable string, __repr__ for debugging. __add__, __sub__, __mul__ for operators'
        },
        {
          name: 'Properties & Getters/Setters',
          syntax: '@property',
          description: 'Control attribute access with methods',
          example: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    # Getter\n    @property\n    def celsius(self):\n        return self._celsius\n    \n    # Setter\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n    \n    # Computed property\n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n    \n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._celsius = (value - 32) * 5/9\n\ntemp = Temperature(25)\nprint(temp.celsius)  # 25\nprint(temp.fahrenheit)  # 77.0\n\ntemp.fahrenheit = 100\nprint(temp.celsius)  # 37.78',
          use: '@property makes methods accessible like attributes. Use for validation, computed values, backwards compatibility'
        },
        {
          name: 'Class Methods & Static Methods',
          syntax: '@classmethod / @staticmethod',
          description: 'Methods that operate on class or are independent',
          example: 'class Date:\n    def __init__(self, year, month, day):\n        self.year = year\n        self.month = month\n        self.day = day\n    \n    # Class method - has access to class\n    @classmethod\n    def from_string(cls, date_string):\n        year, month, day = map(int, date_string.split(\'-\'))\n        return cls(year, month, day)\n    \n    @classmethod\n    def today(cls):\n        import datetime\n        now = datetime.date.today()\n        return cls(now.year, now.month, now.day)\n    \n    # Static method - no access to instance or class\n    @staticmethod\n    def is_leap_year(year):\n        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)\n    \n    def __str__(self):\n        return f"{self.year}-{self.month:02d}-{self.day:02d}"\n\n# Usage\ndate1 = Date(2024, 1, 15)\ndate2 = Date.from_string("2024-03-20")\nprint(Date.is_leap_year(2024))  # True',
          use: '@classmethod for alternative constructors, access class state. @staticmethod for utilities'
        }
      ]
    },
    {
      id: 'file-io',
      title: 'File I/O & Data Handling',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: 'Reading Files',
          syntax: 'open(filename, mode)',
          description: 'Read data from text files',
          example: '# Read entire file\nwith open(\'data.txt\', \'r\') as file:\n    content = file.read()\n    print(content)\n\n# Read line by line\nwith open(\'data.txt\', \'r\') as file:\n    for line in file:\n        print(line.strip())\n\n# Read all lines into list\nwith open(\'data.txt\', \'r\') as file:\n    lines = file.readlines()\n    print(lines)\n\n# Read specific number of characters\nwith open(\'data.txt\', \'r\') as file:\n    chunk = file.read(100)  # First 100 characters\n\n# Without context manager (not recommended)\nfile = open(\'data.txt\', \'r\')\ncontent = file.read()\nfile.close()  # Must remember to close\n\n# Check if file exists\nimport os\nif os.path.exists(\'data.txt\'):\n    with open(\'data.txt\', \'r\') as file:\n        content = file.read()',
          use: 'Always use with statement - auto-closes file. Use .strip() to remove newlines. Check existence to avoid errors'
        },
        {
          name: 'Writing Files',
          syntax: 'open(filename, \'w\' or \'a\')',
          description: 'Write data to text files',
          example: '# Write to file (overwrites existing)\nwith open(\'output.txt\', \'w\') as file:\n    file.write("Hello, World!\\n")\n    file.write("Second line\\n")\n\n# Write multiple lines\nlines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]\nwith open(\'output.txt\', \'w\') as file:\n    file.writelines(lines)\n\n# Append to file (preserves existing)\nwith open(\'output.txt\', \'a\') as file:\n    file.write("Appended line\\n")\n\n# Write with print()\nwith open(\'output.txt\', \'w\') as file:\n    print("Hello", file=file)\n    print("World", file=file)\n\n# Write formatted data\ndata = [(\'Alice\', 30), (\'Bob\', 25)]\nwith open(\'people.txt\', \'w\') as file:\n    for name, age in data:\n        file.write(f"{name}: {age}\\n")',
          use: 'Mode \'w\' overwrites, \'a\' appends. Use \\n for newlines. Always use with statement'
        },
        {
          name: 'Working with JSON',
          syntax: 'json.dump() / json.load()',
          description: 'Read and write JSON data',
          example: 'import json\n\n# Python to JSON (serialize)\ndata = {\n    "name": "Alice",\n    "age": 30,\n    "hobbies": ["reading", "coding"]\n}\n\n# Write to file\nwith open(\'data.json\', \'w\') as file:\n    json.dump(data, file, indent=2)\n\n# Convert to JSON string\njson_string = json.dumps(data, indent=2)\nprint(json_string)\n\n# JSON to Python (deserialize)\nwith open(\'data.json\', \'r\') as file:\n    loaded_data = json.load(file)\n    print(loaded_data["name"])\n\n# Parse JSON string\njson_string = \'{"name": "Bob", "age": 25}\'\nparsed = json.loads(json_string)\nprint(parsed["name"])  # "Bob"\n\n# Handle errors\ntry:\n    with open(\'data.json\', \'r\') as file:\n        data = json.load(file)\nexcept json.JSONDecodeError as e:\n    print(f"Invalid JSON: {e}")',
          use: 'dump() for files, dumps() for strings. load() from files, loads() from strings. indent=2 for pretty printing'
        },
        {
          name: 'Working with CSV',
          syntax: 'csv.reader() / csv.writer()',
          description: 'Read and write CSV files',
          example: 'import csv\n\n# Write CSV\ndata = [\n    ["Name", "Age", "City"],\n    ["Alice", 30, "NYC"],\n    ["Bob", 25, "LA"]\n]\n\nwith open(\'people.csv\', \'w\', newline=\'\') as file:\n    writer = csv.writer(file)\n    writer.writerows(data)\n\n# Read CSV\nwith open(\'people.csv\', \'r\') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)\n\n# CSV with dictionaries\nwith open(\'people.csv\', \'w\', newline=\'\') as file:\n    fieldnames = [\'name\', \'age\', \'city\']\n    writer = csv.DictWriter(file, fieldnames=fieldnames)\n    writer.writeheader()\n    writer.writerow({\'name\': \'Alice\', \'age\': 30, \'city\': \'NYC\'})\n\nwith open(\'people.csv\', \'r\') as file:\n    reader = csv.DictReader(file)\n    for row in reader:\n        print(row[\'name\'], row[\'age\'])',
          use: 'Always use newline=\'\' on Windows. DictReader/DictWriter for named columns. Great for tabular data'
        },
        {
          name: 'Path Operations',
          syntax: 'from pathlib import Path',
          description: 'Modern file system path handling',
          example: 'from pathlib import Path\n\n# Create path object\npath = Path(\'data/files/document.txt\')\n\n# Path properties\nprint(path.name)  # \'document.txt\'\nprint(path.stem)  # \'document\'\nprint(path.suffix)  # \'.txt\'\nprint(path.parent)  # \'data/files\'\nprint(path.exists())  # True/False\n\n# Join paths\nbase = Path(\'data\')\nfull_path = base / \'files\' / \'document.txt\'\n\n# Create directory\nPath(\'new_folder\').mkdir(exist_ok=True)\nPath(\'nested/folders\').mkdir(parents=True, exist_ok=True)\n\n# List files\nfor file in Path(\'.\').glob(\'*.txt\'):\n    print(file)\n\nfor file in Path(\'.\').rglob(\'*.py\'):  # Recursive\n    print(file)\n\n# Read/write with Path\npath = Path(\'data.txt\')\npath.write_text(\'Hello, World!\')\ncontent = path.read_text()\nprint(content)',
          use: 'Preferred over os.path. Use / to join paths. glob() for patterns, rglob() for recursive'
        }
      ]
    },
    {
      id: 'comprehensions',
      title: 'Comprehensions & Generators',
      icon: Layout,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'List Comprehensions',
          syntax: '[expression for item in iterable if condition]',
          description: 'Compact way to create lists',
          example: '# Basic list comprehension\nsquares = [x**2 for x in range(10)]\nprint(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# With condition\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(even_squares)  # [0, 4, 16, 36, 64]\n\n# Multiple conditions\nresult = [x for x in range(20) if x % 2 == 0 if x % 3 == 0]\nprint(result)  # [0, 6, 12, 18]\n\n# With else (ternary)\nresult = [x if x % 2 == 0 else -x for x in range(5)]\nprint(result)  # [0, -1, 2, -3, 4]\n\n# Nested loops\nmatrix = [[i*j for j in range(3)] for i in range(3)]\nprint(matrix)  # [[0,0,0], [0,1,2], [0,2,4]]\n\n# Flatten list\nnested = [[1,2], [3,4], [5,6]]\nflat = [item for sublist in nested for item in sublist]\nprint(flat)  # [1, 2, 3, 4, 5, 6]',
          use: 'More Pythonic than loops. Use for simple transformations. Avoid complex logic - use regular loops'
        },
        {
          name: 'Dictionary Comprehensions',
          syntax: '{key: value for item in iterable}',
          description: 'Create dictionaries concisely',
          example: '# Basic dict comprehension\nsquares = {x: x**2 for x in range(5)}\nprint(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# From two lists (zip)\nkeys = [\'a\', \'b\', \'c\']\nvalues = [1, 2, 3]\nresult = {k: v for k, v in zip(keys, values)}\nprint(result)  # {\'a\': 1, \'b\': 2, \'c\': 3}\n\n# With condition\neven_squares = {x: x**2 for x in range(10) if x % 2 == 0}\nprint(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}\n\n# Swap keys and values\noriginal = {\'a\': 1, \'b\': 2, \'c\': 3}\nswapped = {v: k for k, v in original.items()}\nprint(swapped)  # {1: \'a\', 2: \'b\', 3: \'c\'}\n\n# Filter dictionary\ndata = {\'a\': 1, \'b\': 2, \'c\': 3, \'d\': 4}\nfiltered = {k: v for k, v in data.items() if v > 2}\nprint(filtered)  # {\'c\': 3, \'d\': 4}',
          use: 'Great for transforming/filtering dictionaries. Use zip() to combine sequences'
        },
        {
          name: 'Set Comprehensions',
          syntax: '{expression for item in iterable}',
          description: 'Create sets with comprehensions',
          example: '# Basic set comprehension\nsquares = {x**2 for x in range(10)}\nprint(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}\n\n# Remove duplicates\nnumbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\nunique = {x for x in numbers}\nprint(unique)  # {1, 2, 3, 4}\n\n# With condition\neven_squares = {x**2 for x in range(10) if x % 2 == 0}\nprint(even_squares)  # {0, 4, 16, 36, 64}\n\n# From string (unique characters)\ntext = "hello world"\nunique_chars = {char for char in text if char != \' \'}\nprint(unique_chars)  # {\'h\',\'e\',\'l\',\'o\',\'w\',\'r\',\'d\'}\n\n# Set operations\na = {x for x in range(5)}\nb = {x for x in range(3, 8)}\nprint(a & b)  # Intersection: {3, 4}\nprint(a | b)  # Union: {0, 1, 2, 3, 4, 5, 6, 7}',
          use: 'Automatically removes duplicates. Use for unique items, set operations'
        },
        {
          name: 'Generator Expressions',
          syntax: '(expression for item in iterable)',
          description: 'Memory-efficient iterators using lazy evaluation',
          example: '# Generator expression (parentheses)\ngen = (x**2 for x in range(1000000))\nprint(type(gen))  # <class \'generator\'>\n\n# Use less memory than list\nimport sys\nlist_comp = [x**2 for x in range(1000)]\ngen_exp = (x**2 for x in range(1000))\nprint(sys.getsizeof(list_comp))  # ~9000 bytes\nprint(sys.getsizeof(gen_exp))    # ~200 bytes\n\n# Iterate once\nfor val in gen_exp:\n    if val > 100:\n        print(val)\n        break\n\n# Use with functions\ntotal = sum(x**2 for x in range(100))\nmax_val = max(x**2 for x in range(100))\n\n# Chain generators\ngen1 = (x for x in range(5))\ngen2 = (x**2 for x in gen1)\nprint(list(gen2))  # [0, 1, 4, 9, 16]',
          use: 'Use for large datasets to save memory. One-time iteration. Great with sum(), max(), min()'
        },
        {
          name: 'Generator Functions',
          syntax: 'yield keyword',
          description: 'Functions that produce sequences of values',
          example: '# Basic generator function\ndef count_up_to(n):\n    count = 1\n    while count <= n:\n        yield count\n        count += 1\n\nfor num in count_up_to(5):\n    print(num)  # 1, 2, 3, 4, 5\n\n# Fibonacci generator\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfib = list(fibonacci(10))\nprint(fib)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n\n# Infinite generator\ndef infinite_sequence():\n    num = 0\n    while True:\n        yield num\n        num += 1\n\ngen = infinite_sequence()\nprint(next(gen))  # 0\nprint(next(gen))  # 1\n\n# Generator with state\ndef running_average():\n    total = 0\n    count = 0\n    while True:\n        val = yield total / count if count else 0\n        total += val\n        count += 1',
          use: 'Use yield instead of return. Great for large sequences, file processing. Can be infinite'
        }
      ]
    },
    {
      id: 'modules',
      title: 'Modules & Packages',
      icon: Database,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'Importing Modules',
          syntax: 'import module / from module import name',
          description: 'Use code from other files and libraries',
          example: '# Import entire module\nimport math\nprint(math.pi)  # 3.141592653589793\nprint(math.sqrt(16))  # 4.0\n\n# Import specific items\nfrom math import pi, sqrt\nprint(pi)  # 3.141592653589793\nprint(sqrt(16))  # 4.0\n\n# Import with alias\nimport numpy as np\nimport pandas as pd\n\n# Import all (not recommended)\nfrom math import *\n\n# Import from subdirectory\nfrom package.module import function\n\n# Conditional import\ntry:\n    import optional_module\nexcept ImportError:\n    print("Module not available")\n    optional_module = None\n\n# Check what is imported\nimport sys\nprint(sys.modules.keys())  # All loaded modules',
          use: 'import module for full namespace. from module import for specific items. Avoid from module import *'
        },
        {
          name: 'Creating Modules',
          syntax: 'Save .py file, import by name',
          description: 'Organize code into reusable modules',
          example: '# File: mymodule.py\n"""My custom module with utilities."""\n\ndef greet(name):\n    """Greet someone by name."""\n    return f"Hello, {name}!"\n\ndef add(a, b):\n    """Add two numbers."""\n    return a + b\n\nPI = 3.14159\n\n# Private function (convention)\ndef _internal_function():\n    return "This is private"\n\n# Only run if executed directly\nif __name__ == "__main__":\n    print("Running module directly")\n    print(greet("World"))\n\n# File: main.py\nimport mymodule\n\nprint(mymodule.greet("Alice"))\nprint(mymodule.add(5, 3))\nprint(mymodule.PI)\n\n# Module attributes\nprint(mymodule.__name__)  # \'mymodule\'\nprint(mymodule.__doc__)   # Module docstring',
          use: 'Use if __name__ == "__main__" for test code. Prefix private functions with _. Write docstrings'
        },
        {
          name: 'Packages',
          syntax: 'Directory with __init__.py',
          description: 'Organize multiple modules into a package',
          example: '# Directory structure:\n# mypackage/\n#   __init__.py\n#   module1.py\n#   module2.py\n#   subpackage/\n#     __init__.py\n#     module3.py\n\n# File: mypackage/__init__.py\n"""Package initialization."""\nfrom .module1 import function1\nfrom .module2 import function2\n\n__version__ = "1.0.0"\n__all__ = [\'function1\', \'function2\']\n\n# File: mypackage/module1.py\ndef function1():\n    return "Function 1"\n\n# Usage:\nimport mypackage\nprint(mypackage.function1())\n\nfrom mypackage import function1\nprint(function1())\n\nfrom mypackage.subpackage import module3\n\n# Relative imports (within package)\nfrom . import module1  # Same directory\nfrom .. import module2  # Parent directory\nfrom .subpackage import module3  # Subdirectory',
          use: '__init__.py makes directory a package. Use __all__ to control from package import *. Use relative imports inside packages'
        },
        {
          name: 'Common Built-in Modules',
          syntax: 'import module',
          description: 'Useful standard library modules',
          example: '# datetime - dates and times\nfrom datetime import datetime, timedelta\nnow = datetime.now()\ntomorrow = now + timedelta(days=1)\nprint(now.strftime("%Y-%m-%d %H:%M:%S"))\n\n# random - random numbers\nimport random\nprint(random.randint(1, 10))  # Random int\nprint(random.choice([\'a\', \'b\', \'c\']))  # Random choice\nprint(random.random())  # Random float 0-1\n\n# os - operating system\nimport os\nprint(os.getcwd())  # Current directory\nos.makedirs(\'new_folder\', exist_ok=True)\n\n# sys - system specific\nimport sys\nprint(sys.version)  # Python version\nprint(sys.argv)  # Command line arguments\n\n# re - regular expressions\nimport re\npattern = r\'\\d+\'\nnumbers = re.findall(pattern, "I have 2 cats and 3 dogs")\nprint(numbers)  # [\'2\', \'3\']\n\n# collections\nfrom collections import Counter, defaultdict\ncount = Counter([1, 2, 2, 3, 3, 3])\nprint(count)  # Counter({3: 3, 2: 2, 1: 1})',
          use: 'Learn standard library - batteries included. datetime for dates, random for randomness, os for files'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Programming Reference
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Complete guide to Python fundamentals, data structures, functions, OOP, file I/O, and more
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Python concepts and syntax..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-2xl"
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
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} topics</p>
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
                        <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-blue-500 transition-colors">
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

                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <p className="text-xs font-semibold text-blue-600 uppercase mb-1">Usage Tips</p>
                            <p className="text-sm text-blue-700">{item.use}</p>
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
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Best Practices Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Python Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Write Readable Code</h3>
              <p className="text-gray-600 text-sm">
                Use meaningful variable names, follow PEP 8 style guide, and add comments for complex logic. Code is read more than written.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Zap className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Built-in Functions</h3>
              <p className="text-gray-600 text-sm">
                Python has powerful built-ins like map(), filter(), zip(), enumerate(). They are optimized and more Pythonic than manual loops.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Database className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handle Errors Gracefully</h3>
              <p className="text-gray-600 text-sm">
                Use try-except blocks to catch exceptions. Be specific with exception types. Always clean up resources with finally or context managers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}