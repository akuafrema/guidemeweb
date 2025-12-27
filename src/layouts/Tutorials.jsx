const s = [
  {
    title: "PythonDataVisualization",
    description:
      "This tutorial will teach you the basics of data visualization using Python. We will use the Matplotlib and Seaborn libraries to create various types of plots and charts. Data visualization is an important skill for data scientists and analysts, as it helps to communicate insights and findings effectively. In this tutorial, we will cover topics such as line plots, bar plots, histograms, scatter plots, and heatmaps. By the end of this tutorial, you will have a solid understanding of how to create visualizations in Python and be able to apply these skills to your own data analysis projects.",

    link: "/python data-visualization",
  },
  {
    title: "PythonMachineLearning ",
    description:
      "This lesson uses the Iris dataset to demonstrate how to use the scikit-learn library to train a machine learning model. The programming language we'll use is Python. The Iris dataset is a classic dataset used in machine learning. It contains 150 samples of three different species of Iris flowers. The dataset contains four features: sepal length, sepal width, petal length, and petal width. The target variable is the species of the flower. The dataset is available in the scikit-learn library. The scikit-learn library is a free machine learning library for the Python programming language. It features various classification, regression, and clustering algorithms including support vector machines, random forests, gradient boosting, k-means, and DBSCAN. It also supports Python numerical and scientific libraries such as NumPy and SciPy. ",

    link: "/python machine-learning",
  },
  {
    title: "Python ",
    description:
      "This lesson uses the Iris dataset to demonstrate how to use the scikit-learn library to train a machine learning model. The programming language we'll use is Python. The Iris dataset is a classic dataset used in machine learning. It contains 150 samples of three different species of Iris flowers. The dataset contains four features: sepal length, sepal width, petal length, and petal width. The target variable is the species of the flower. The dataset is available in the scikit-learn library. The scikit-learn library is a free machine learning library for the Python programming language. It features various classification, regression, and clustering algorithms including support vector machines, random forests, gradient boosting, k-means, and DBSCAN. It also supports Python numerical and scientific libraries such as NumPy and SciPy. ",

    link: "/python",
  },
  // {
  //   title: "Python Network Programming ",
  //   description:
  //     "Python Network Programming. Let's learn how to create network applications using Python.",

  //   link: "/network-programming",
  // },
  // {
  //   title: "Python GUI Programming",
  //   description:
  //     "Python GUI Programming. Let's learn how to create GUI applications using Python.",

  //   link: "/python-gui-programming",
  // },
  // {
  //   title: "Python Game Development ",
  //   description:
  //     "Python Game Development. Let's learn how to create games using Python.",

  //   link: "/python-game-development",
  // },

  {
    title: "JavaScript",
    description:
      "JavaScript is a programming language that adds interactivity to your website. Learn how to make web pages interactive and provide online programs and games.",
    link: "/javascript",
  },

  // {
  //   title: "React Native ",
  //   description:
  //     "Get started with React Native, a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.",

  //   link: "/react-native",
  // },

  {
    title: "SQL",
    description:
      "SQL is a standard language for storing, manipulating and retrieving data in databases.",
    link: "/sql",
  },
  {
    title: "Kali",
    description:
      "Kali Linux, a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing.",

    link: "/kali",
  },
  {
    title: "Cryptography",

    description:
      "Cryptography is the practice and study of techniques for secure communication in the presence of third parties called adversaries.",

    link: "/cryptography",
  },

  {
    title: "HTML ",
    description:
      "HTML is the standard markup language for creating Web pages. With HTML you can create your own Website.",
    link: "/html",
  },
  {
    title: "CSS ",
    description:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
    link: "/css",
  },
  {
    title: "React ",
    description:
      "React is a JavaScript library for building very fast user interfaces.",
    link: "/react",
  },
  {
    title: "Git ",
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    link: "/git",
  },
  {
    title: "JavaScript Exercises",
    description: "Try out these JavaScript exercises to test your knowledge.",

    link: "/javascript-exercises",
  },
  {
    title: "Python Exercises",
    description: "Try out these Python exercises to test your knowledge.",

    link: "/python-exercises",
  },
  {
    title: "SQL Exercises",
    description: "Test your SQL knowledge with these exercises.",
    link: "/sql-exercises",
  },
  {
    title: "React Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/react-exercises",
  },
  {
    title: "HTML Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/html-exercises",
  },
  {
    title: "CSS Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/css-exercises",
  },
  {
    title: "Kali Linux Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/kali-linux-exercises",
  },
  {
    title: "Python Machine Learning Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/machine-learning-exercises",
  },
  {
    title: "Git Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/git-exercises",
  },
  {
    title: "Python Data Visualization Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/data-visualization-exercises",
  },
  {
    title: "Cryptography Exercises",
    description: "Put your knowledge to the test with these exercises.",

    link: "/cryptography-exercises",
  },

  {
    title: "Python References",
    description: "Get the Python references to learn more about the language.",

    link: "/python-references",
  },
  {
    title: "SQL References",
    description: "Get the SQL references to learn more about the language.",
    link: "/sql-references",
  },
  {
    title: "React References",
    description: "Get the React references to learn more about the library.",

    link: "/react-references",
  },
  {
    title: "HTML References",
    description: "Get the HTML references to learn more about the language.",

    link: "/html-references",
  },
  {
    title: "CSS References",
    description: "Get the CSS references to learn more about the language.",

    link: "/css-references",
  },
  {
    title: "Kali Linux References",
    description: "Read the Kali Linux references to learn more about the os.",

    link: "/kali-linux-references",
  },
  {
    title: "JavaScript References",
    description:
      "Read the JavaScript references to learn more about the language.",

    link: "/javascript-references",
  },
  {
    title: "Python Cheat Sheet",
    description: "Python Cheat Sheet, memorize the Python syntax.",

    link: "my-website//src//Python//cheatsheet.js",
  },
  {
    title: "SQL Cheat Sheet",
    description: "Get a SQL cheatsheet to help memorize things easily.",
    link: "/sql-cheat-sheet",
  },
  {
    title: "React Cheat Sheet",
    description: "Never forget the React syntax again.",

    link: "/react-cheat-sheet",
  },
  {
    title: "HTML Cheat Sheet",
    description: "HTML Cheat Sheet, memorize the HTML tags.",

    link: "/html-cheat-sheet",
  },
  {
    title: "CSS Cheat Sheet",
    description: "CSS Cheat Sheet, memorize the CSS properties.",

    link: "/css-cheat-sheet",
  },
  {
    title: "Kali Linux Cheat Sheet",
    description: "Memorize the Kali Linux commands.",

    link: "/kali-linux-cheat-sheet",
  },
  {
    title: "JavaScript Cheat Sheet",
    description: "Get a JavaScript cheatsheet to help memorize things easily.",

    link: "/javascript-cheat-sheet",
  },
  {
    title: "Python Quiz",
    description: "Let put our Python knowledge to test.",

    link: "/python-quiz",
  },
  {
    title: "SQL Quiz",
    description: "Structured Query Language test. Test yourself.",
    link: "/sql-quiz",
  },
  {
    title: "React Quiz",
    description: "Try yourself on how best you know react.",

    link: "/react-quiz",
  },
  {
    title: "HTML Quiz",
    description: "Test your knowledge on HTML",

    link: "/html-quiz",
  },
  {
    title: "CSS Quiz",
    description: "Test yourself in CSS.",

    link: "/css-quiz",
  },
  {
    title: "Kali Linux Quiz",
    description: "Let's test our knowledge on Kali Linux.",

    link: "/kali-linux-quiz",
  },
  {
    title: "JavaScript Quiz",
    description: "Test yourself on JavaScript.",

    link: "/javascript-quiz",
  },
];

export default s;
