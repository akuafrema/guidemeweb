import { useState } from 'react';
import { Search, BarChart3, PieChart, LineChart, TrendingUp, ChevronDown, ChevronRight, Palette, Map, Activity } from 'lucide-react';

export default function PythonDataVizReference() {
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
      id: 'matplotlib-basic',
      title: 'Matplotlib - Basic Plots',
      icon: LineChart,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Line Plot',
          syntax: 'plt.plot(x, y, [format], **kwargs)',
          description: 'Create a line graph to show trends over time',
          example: 'import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\n\nplt.plot(x, y, \'b-\', linewidth=2)\nplt.xlabel(\'X axis\')\nplt.ylabel(\'Y axis\')\nplt.title(\'Simple Line Plot\')\nplt.grid(True)\nplt.show()',
          use: 'Time series, trends, continuous data. Format: \'b-\' (blue line), \'ro\' (red circles)'
        },
        {
          name: 'Scatter Plot',
          syntax: 'plt.scatter(x, y, s=size, c=color, **kwargs)',
          description: 'Plot individual data points to show relationships',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.random.rand(50)\ny = np.random.rand(50)\ncolors = np.random.rand(50)\nsizes = 1000 * np.random.rand(50)\n\nplt.scatter(x, y, s=sizes, c=colors, alpha=0.5, cmap=\'viridis\')\nplt.colorbar()\nplt.show()',
          use: 'Correlations, distributions, clustering. Use s for size, c for color, alpha for transparency'
        },
        {
          name: 'Bar Chart',
          syntax: 'plt.bar(x, height, width=0.8, **kwargs)',
          description: 'Compare categorical data with rectangular bars',
          example: 'import matplotlib.pyplot as plt\n\ncategories = [\'A\', \'B\', \'C\', \'D\']\nvalues = [25, 40, 30, 55]\n\nplt.bar(categories, values, color=\'skyblue\', edgecolor=\'navy\')\nplt.ylabel(\'Values\')\nplt.title(\'Category Comparison\')\nplt.show()',
          use: 'Category comparisons, rankings. Use barh() for horizontal bars'
        },
        {
          name: 'Histogram',
          syntax: 'plt.hist(data, bins=10, **kwargs)',
          description: 'Show distribution of continuous data',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\ndata = np.random.randn(1000)\n\nplt.hist(data, bins=30, color=\'coral\', edgecolor=\'black\', alpha=0.7)\nplt.xlabel(\'Value\')\nplt.ylabel(\'Frequency\')\nplt.title(\'Distribution\')\nplt.show()',
          use: 'Show frequency distributions, data spread. Adjust bins for granularity'
        },
        {
          name: 'Pie Chart',
          syntax: 'plt.pie(sizes, labels=labels, **kwargs)',
          description: 'Show proportions of a whole',
          example: 'import matplotlib.pyplot as plt\n\nsizes = [30, 25, 20, 25]\nlabels = [\'A\', \'B\', \'C\', \'D\']\ncolors = [\'gold\', \'lightcoral\', \'lightskyblue\', \'lightgreen\']\nexplode = (0.1, 0, 0, 0)\n\nplt.pie(sizes, labels=labels, colors=colors, explode=explode, \n        autopct=\'%1.1f%%\', startangle=90)\nplt.axis(\'equal\')\nplt.show()',
          use: 'Percentages, composition. Use explode to highlight slices, autopct for labels'
        },
        {
          name: 'Box Plot',
          syntax: 'plt.boxplot(data, labels=labels, **kwargs)',
          description: 'Display distribution and identify outliers',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\ndata = [np.random.normal(0, std, 100) for std in range(1, 4)]\n\nplt.boxplot(data, labels=[\'A\', \'B\', \'C\'], patch_artist=True)\nplt.ylabel(\'Values\')\nplt.title(\'Distribution Comparison\')\nplt.grid(True, axis=\'y\')\nplt.show()',
          use: 'Show quartiles, median, outliers. Good for comparing distributions'
        }
      ]
    },
    {
      id: 'matplotlib-advanced',
      title: 'Matplotlib - Advanced Features',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'Subplots',
          syntax: 'fig, axes = plt.subplots(nrows, ncols)',
          description: 'Create multiple plots in a grid layout',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nfig, axes = plt.subplots(2, 2, figsize=(10, 8))\nx = np.linspace(0, 2*np.pi, 100)\n\naxes[0, 0].plot(x, np.sin(x))\naxes[0, 0].set_title(\'Sine\')\naxes[0, 1].plot(x, np.cos(x))\naxes[0, 1].set_title(\'Cosine\')\naxes[1, 0].plot(x, np.tan(x))\naxes[1, 0].set_title(\'Tangent\')\naxes[1, 1].plot(x, x**2)\naxes[1, 1].set_title(\'Quadratic\')\n\nplt.tight_layout()\nplt.show()',
          use: 'Multiple related plots, dashboards. Use tight_layout() to prevent overlap'
        },
        {
          name: 'Figure Customization',
          syntax: 'plt.figure(figsize=(width, height), dpi=100)',
          description: 'Control figure size, resolution, and appearance',
          example: 'import matplotlib.pyplot as plt\n\nplt.figure(figsize=(12, 6), dpi=100, facecolor=\'lightgray\')\nplt.plot([1, 2, 3], [1, 4, 9], linewidth=3, color=\'darkblue\')\nplt.xlabel(\'X\', fontsize=14, fontweight=\'bold\')\nplt.ylabel(\'Y\', fontsize=14, fontweight=\'bold\')\nplt.title(\'Custom Figure\', fontsize=16, pad=20)\nplt.grid(True, linestyle=\'--\', alpha=0.5)\nplt.tight_layout()\nplt.show()',
          use: 'Publication-quality figures. Adjust figsize for aspect ratio, dpi for resolution'
        },
        {
          name: 'Legends & Annotations',
          syntax: 'plt.legend() / plt.annotate(text, xy, **kwargs)',
          description: 'Add labels and annotations to plots',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\nplt.plot(x, y1, label=\'Sine\', linewidth=2)\nplt.plot(x, y2, label=\'Cosine\', linewidth=2)\nplt.legend(loc=\'upper right\', fontsize=12)\n\nmax_idx = np.argmax(y1)\nplt.annotate(\'Peak\', xy=(x[max_idx], y1[max_idx]), \n             xytext=(x[max_idx]+1, y1[max_idx]+0.3),\n             arrowprops=dict(arrowstyle=\'->\', color=\'red\'))\nplt.show()',
          use: 'Identify series, highlight important points. Legend locations: best, upper/lower left/right'
        },
        {
          name: 'Color Maps',
          syntax: 'plt.imshow(data, cmap=colormap)',
          description: 'Apply color schemes to visualize data',
          example: 'import matplotlib.pyplot as plt\nimport numpy as np\n\ndata = np.random.rand(10, 10)\n\nplt.imshow(data, cmap=\'viridis\', interpolation=\'nearest\')\nplt.colorbar(label=\'Intensity\')\nplt.title(\'Heatmap with Viridis\')\nplt.show()\n\n# Popular colormaps: viridis, plasma, inferno, magma, \n# coolwarm, RdYlBu, seismic',
          use: 'Heatmaps, images, 2D data. Viridis is perceptually uniform and colorblind-friendly'
        },
        {
          name: 'Styling & Themes',
          syntax: 'plt.style.use(style_name)',
          description: 'Apply predefined styles to plots',
          example: 'import matplotlib.pyplot as plt\n\n# Available styles\nprint(plt.style.available)\n\nplt.style.use(\'seaborn-v0_8-darkgrid\')\nplt.plot([1, 2, 3], [1, 4, 9])\nplt.title(\'Styled Plot\')\nplt.show()\n\n# Popular: ggplot, seaborn, fivethirtyeight, bmh',
          use: 'Consistent aesthetics across plots. Apply once for entire session'
        },
        {
          name: 'Save Figures',
          syntax: 'plt.savefig(filename, dpi=300, bbox_inches=\'tight\')',
          description: 'Export plots to files',
          example: 'import matplotlib.pyplot as plt\n\nplt.plot([1, 2, 3], [1, 4, 9])\nplt.title(\'Export Example\')\n\n# Save as PNG with high resolution\nplt.savefig(\'plot.png\', dpi=300, bbox_inches=\'tight\')\n\n# Save as PDF (vector)\nplt.savefig(\'plot.pdf\', bbox_inches=\'tight\')\n\n# Save as SVG (vector)\nplt.savefig(\'plot.svg\', bbox_inches=\'tight\')\n\nplt.show()',
          use: 'Export for presentations, papers. Use high dpi (300+) for print, vector formats for scaling'
        }
      ]
    },
    {
      id: 'seaborn',
      title: 'Seaborn - Statistical Visualization',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'Distribution Plot',
          syntax: 'sns.histplot(data, x, kde=True, **kwargs)',
          description: 'Visualize univariate distributions with histograms',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport numpy as np\n\ndata = np.random.randn(1000)\n\nsns.histplot(data, kde=True, color=\'skyblue\', bins=30)\nplt.title(\'Distribution with KDE\')\nplt.show()\n\n# Also: sns.kdeplot() for just KDE',
          use: 'Show data distribution with optional kernel density estimate overlay'
        },
        {
          name: 'Count Plot',
          syntax: 'sns.countplot(data, x, hue, **kwargs)',
          description: 'Bar chart showing counts of categorical variables',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \'category\': [\'A\', \'B\', \'A\', \'C\', \'B\', \'A\', \'C\'],\n    \'group\': [\'X\', \'X\', \'Y\', \'X\', \'Y\', \'X\', \'Y\']\n})\n\nsns.countplot(data=df, x=\'category\', hue=\'group\', palette=\'Set2\')\nplt.title(\'Category Counts by Group\')\nplt.show()',
          use: 'Frequency of categorical data, grouped comparisons with hue parameter'
        },
        {
          name: 'Box Plot / Violin Plot',
          syntax: 'sns.boxplot(data, x, y, hue, **kwargs)',
          description: 'Compare distributions across categories',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'category\': np.repeat([\'A\', \'B\', \'C\'], 100),\n    \'value\': np.concatenate([np.random.normal(0, 1, 100),\n                             np.random.normal(2, 1.5, 100),\n                             np.random.normal(1, 0.5, 100)])\n})\n\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))\nsns.boxplot(data=df, x=\'category\', y=\'value\', ax=ax1)\nsns.violinplot(data=df, x=\'category\', y=\'value\', ax=ax2)\nplt.show()',
          use: 'Boxplot shows quartiles; violin plot shows full distribution shape'
        },
        {
          name: 'Scatter Plot with Regression',
          syntax: 'sns.regplot(data, x, y, **kwargs)',
          description: 'Scatter plot with fitted regression line',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': 2 * np.random.rand(100) + 1\n})\n\nsns.regplot(data=df, x=\'x\', y=\'y\', scatter_kws={\'alpha\':0.5})\nplt.title(\'Scatter with Regression Line\')\nplt.show()\n\n# For multiple groups: sns.lmplot()',
          use: 'Show correlation and trend line. Use lmplot for faceted regression plots'
        },
        {
          name: 'Heatmap',
          syntax: 'sns.heatmap(data, annot=True, cmap, **kwargs)',
          description: 'Display matrix data with color-coded cells',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\n# Correlation matrix\ndata = np.random.randn(10, 5)\ndf = pd.DataFrame(data, columns=[\'A\', \'B\', \'C\', \'D\', \'E\'])\ncorr = df.corr()\n\nsns.heatmap(corr, annot=True, cmap=\'coolwarm\', center=0,\n            square=True, linewidths=1, cbar_kws={\'shrink\': 0.8})\nplt.title(\'Correlation Heatmap\')\nplt.show()',
          use: 'Correlation matrices, confusion matrices. annot=True shows values in cells'
        },
        {
          name: 'Pair Plot',
          syntax: 'sns.pairplot(data, hue, vars, **kwargs)',
          description: 'Matrix of scatter plots for all variable pairs',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nfrom sklearn.datasets import load_iris\nimport pandas as pd\n\niris = load_iris()\ndf = pd.DataFrame(iris.data, columns=iris.feature_names)\ndf[\'species\'] = iris.target\n\nsns.pairplot(df, hue=\'species\', palette=\'Set1\', \n             diag_kind=\'kde\', height=2.5)\nplt.show()',
          use: 'Explore relationships between all variables. Great for initial data exploration'
        },
        {
          name: 'FacetGrid',
          syntax: 'g = sns.FacetGrid(data, col, row, hue)',
          description: 'Create grid of subplots based on categorical variables',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(300),\n    \'y\': np.random.rand(300),\n    \'category\': np.random.choice([\'A\', \'B\', \'C\'], 300),\n    \'group\': np.random.choice([\'X\', \'Y\'], 300)\n})\n\ng = sns.FacetGrid(df, col=\'category\', hue=\'group\', height=4)\ng.map(plt.scatter, \'x\', \'y\', alpha=0.5)\ng.add_legend()\nplt.show()',
          use: 'Compare plots across different subsets of data. Powerful for multi-dimensional analysis'
        },
        {
          name: 'Categorical Plots',
          syntax: 'sns.catplot(data, x, y, kind, **kwargs)',
          description: 'Unified interface for categorical plots',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'category\': np.repeat([\'A\', \'B\', \'C\'], 50),\n    \'value\': np.random.randn(150),\n    \'group\': np.tile([\'X\', \'Y\'], 75)\n})\n\n# kind can be: strip, swarm, box, violin, boxen, point, bar, count\nsns.catplot(data=df, x=\'category\', y=\'value\', hue=\'group\',\n            kind=\'violin\', height=5, aspect=1.5)\nplt.show()',
          use: 'Flexible categorical plotting. Change kind parameter for different plot types'
        }
      ]
    },
    {
      id: 'plotly',
      title: 'Plotly - Interactive Visualization',
      icon: Activity,
      color: 'from-cyan-500 to-cyan-600',
      items: [
        {
          name: 'Interactive Line Chart',
          syntax: 'fig = px.line(df, x, y, **kwargs)',
          description: 'Create interactive line plots with hover information',
          example: 'import plotly.express as px\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'date\': pd.date_range(\'2024-01-01\', periods=100),\n    \'value\': np.cumsum(np.random.randn(100))\n})\n\nfig = px.line(df, x=\'date\', y=\'value\', \n              title=\'Interactive Time Series\',\n              labels={\'value\': \'Cumulative Value\'})\nfig.show()',
          use: 'Time series with zoom, pan, hover. Automatically interactive in Jupyter/web'
        },
        {
          name: 'Interactive Scatter',
          syntax: 'fig = px.scatter(df, x, y, color, size, **kwargs)',
          description: 'Scatter plot with interactive features',
          example: 'import plotly.express as px\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': np.random.rand(100),\n    \'category\': np.random.choice([\'A\', \'B\', \'C\'], 100),\n    \'size\': np.random.rand(100) * 100\n})\n\nfig = px.scatter(df, x=\'x\', y=\'y\', color=\'category\',\n                 size=\'size\', hover_data=[\'size\'],\n                 title=\'Interactive Scatter Plot\')\nfig.show()',
          use: 'Multi-dimensional data with color, size encoding. Click legend to filter'
        },
        {
          name: 'Bar Chart',
          syntax: 'fig = px.bar(df, x, y, color, **kwargs)',
          description: 'Interactive bar charts with grouping',
          example: 'import plotly.express as px\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \'category\': [\'A\', \'B\', \'C\', \'D\'],\n    \'values\': [25, 40, 30, 55],\n    \'group\': [\'X\', \'X\', \'Y\', \'Y\']\n})\n\nfig = px.bar(df, x=\'category\', y=\'values\', color=\'group\',\n             barmode=\'group\', title=\'Grouped Bar Chart\')\nfig.show()\n\n# barmode: \'group\', \'stack\', \'relative\'',
          use: 'Categorical comparisons. Use barmode for different layouts'
        },
        {
          name: 'Heatmap',
          syntax: 'fig = px.imshow(matrix, **kwargs)',
          description: 'Interactive heatmap with hover values',
          example: 'import plotly.express as px\nimport numpy as np\n\nmatrix = np.random.rand(10, 10)\n\nfig = px.imshow(matrix, \n                color_continuous_scale=\'Viridis\',\n                labels=dict(x=\'X\', y=\'Y\', color=\'Value\'),\n                title=\'Interactive Heatmap\')\nfig.show()',
          use: 'Correlation matrices, 2D data. Hover shows exact values'
        },
        {
          name: '3D Scatter',
          syntax: 'fig = px.scatter_3d(df, x, y, z, color, **kwargs)',
          description: 'Three-dimensional scatter plot',
          example: 'import plotly.express as px\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': np.random.rand(100),\n    \'z\': np.random.rand(100),\n    \'category\': np.random.choice([\'A\', \'B\', \'C\'], 100)\n})\n\nfig = px.scatter_3d(df, x=\'x\', y=\'y\', z=\'z\', \n                    color=\'category\',\n                    title=\'3D Scatter Plot\')\nfig.show()',
          use: 'Visualize 3D relationships. Fully rotatable and interactive'
        },
        {
          name: 'Choropleth Map',
          syntax: 'fig = px.choropleth(df, locations, color, **kwargs)',
          description: 'Geographic data on maps with color coding',
          example: 'import plotly.express as px\n\ndf = px.data.gapminder().query("year==2007")\n\nfig = px.choropleth(df, locations="iso_alpha",\n                    color="lifeExp",\n                    hover_name="country",\n                    color_continuous_scale=px.colors.sequential.Plasma,\n                    title="Life Expectancy by Country")\nfig.show()',
          use: 'Geographic data visualization. Use iso_alpha for country codes'
        },
        {
          name: 'Subplots',
          syntax: 'fig = make_subplots(rows, cols, specs)',
          description: 'Create dashboard with multiple interactive plots',
          example: 'from plotly.subplots import make_subplots\nimport plotly.graph_objects as go\nimport numpy as np\n\nfig = make_subplots(\n    rows=2, cols=2,\n    subplot_titles=(\'Line\', \'Scatter\', \'Bar\', \'Histogram\')\n)\n\nx = np.linspace(0, 10, 100)\nfig.add_trace(go.Scatter(x=x, y=np.sin(x)), row=1, col=1)\nfig.add_trace(go.Scatter(x=x, y=np.cos(x), mode=\'markers\'), row=1, col=2)\nfig.add_trace(go.Bar(x=[\'A\', \'B\', \'C\'], y=[1, 3, 2]), row=2, col=1)\nfig.add_trace(go.Histogram(x=np.random.randn(100)), row=2, col=2)\n\nfig.update_layout(height=600, showlegend=False)\nfig.show()',
          use: 'Interactive dashboards. Each subplot maintains interactivity'
        },
        {
          name: 'Animation',
          syntax: 'fig = px.scatter(df, animation_frame, **kwargs)',
          description: 'Create animated visualizations',
          example: 'import plotly.express as px\n\ndf = px.data.gapminder()\n\nfig = px.scatter(df, x="gdpPercap", y="lifeExp", \n                 animation_frame="year", animation_group="country",\n                 size="pop", color="continent", hover_name="country",\n                 log_x=True, size_max=55, range_x=[100,100000], range_y=[25,90],\n                 title="World Development Over Time")\nfig.show()',
          use: 'Show changes over time. Built-in play/pause controls'
        }
      ]
    },
    {
      id: 'pandas',
      title: 'Pandas Built-in Plotting',
      icon: PieChart,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        {
          name: 'DataFrame Plot',
          syntax: 'df.plot(kind, x, y, **kwargs)',
          description: 'Quick plotting directly from pandas DataFrames',
          example: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'A\': np.random.randn(100).cumsum(),\n    \'B\': np.random.randn(100).cumsum(),\n    \'C\': np.random.randn(100).cumsum()\n})\n\ndf.plot(title=\'Multiple Time Series\', figsize=(10, 6))\nplt.ylabel(\'Value\')\nplt.show()',
          use: 'Quick visualization of DataFrame columns. Automatically uses index as x-axis'
        },
        {
          name: 'Bar Plot',
          syntax: 'df.plot.bar() / df.plot.barh()',
          description: 'Vertical or horizontal bar charts',
          example: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'Category\': [\'A\', \'B\', \'C\', \'D\'],\n    \'Values\': [25, 40, 30, 55]\n}).set_index(\'Category\')\n\ndf.plot.bar(color=\'steelblue\', figsize=(8, 5))\nplt.title(\'Bar Chart from DataFrame\')\nplt.ylabel(\'Values\')\nplt.show()\n\n# Use .plot.barh() for horizontal',
          use: 'Categorical data from DataFrames. Stacked with stacked=True'
        },
        {
          name: 'Histogram',
          syntax: 'df.plot.hist(bins, alpha, **kwargs)',
          description: 'Distribution of DataFrame columns',
          example: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'A\': np.random.randn(1000),\n    \'B\': np.random.randn(1000) + 2,\n    \'C\': np.random.randn(1000) - 2\n})\n\ndf.plot.hist(bins=30, alpha=0.5, figsize=(10, 6))\nplt.title(\'Distribution Comparison\')\nplt.xlabel(\'Value\')\nplt.show()',
          use: 'Compare distributions across columns. Overlaid by default'
        },
        {
          name: 'Box Plot',
          syntax: 'df.plot.box() / df.boxplot(by=column)',
          description: 'Box plots for all numeric columns',
          example: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'Group\': np.repeat([\'A\', \'B\', \'C\'], 100),\n    \'Value\': np.concatenate([np.random.normal(0, 1, 100),\n                             np.random.normal(2, 1.5, 100),\n                             np.random.normal(1, 0.5, 100)])\n})\n\ndf.boxplot(column=\'Value\', by=\'Group\', figsize=(8, 6))\nplt.suptitle(\'\')\nplt.title(\'Value Distribution by Group\')\nplt.show()',
          use: 'Statistical summaries by groups. Use by parameter for grouping'
        },
        {
          name: 'Scatter Plot',
          syntax: 'df.plot.scatter(x, y, c=color, s=size)',
          description: 'Scatter plot from DataFrame columns',
          example: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': np.random.rand(100),\n    \'size\': np.random.rand(100) * 100,\n    \'color\': np.random.rand(100)\n})\n\ndf.plot.scatter(x=\'x\', y=\'y\', c=\'color\', s=\'size\',\n                cmap=\'viridis\', figsize=(8, 6))\nplt.title(\'Scatter with Size and Color\')\nplt.show()',
          use: 'Visualize relationships with additional dimensions via color and size'
        },
        {
          name: 'Area Plot',
          syntax: 'df.plot.area(stacked=True, alpha)',
          description: 'Stacked area chart showing cumulative values',
          example: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    \'A\': np.random.rand(50).cumsum(),\n    \'B\': np.random.rand(50).cumsum(),\n    \'C\': np.random.rand(50).cumsum()\n})\n\ndf.plot.area(alpha=0.4, figsize=(10, 6))\nplt.title(\'Stacked Area Chart\')\nplt.ylabel(\'Cumulative Value\')\nplt.show()',
          use: 'Show cumulative contribution over time. Good for composition analysis'
        }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Visualizations',
      icon: Map,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'Folium Maps',
          syntax: 'folium.Map(location, zoom_start)',
          description: 'Interactive geographic maps with markers',
          example: 'import folium\n\n# Create map centered on location\nm = folium.Map(location=[37.7749, -122.4194], zoom_start=12)\n\n# Add marker\nfolium.Marker(\n    [37.7749, -122.4194],\n    popup=\'San Francisco\',\n    tooltip=\'Click me!\'\n).add_to(m)\n\n# Add circle\nfolium.Circle(\n    location=[37.7749, -122.4194],\n    radius=500,\n    color=\'red\',\n    fill=True\n).add_to(m)\n\nm.save(\'map.html\')\n# m  # Display in Jupyter',
          use: 'Geographic visualizations, location-based data. Save as HTML or display in notebooks'
        },
        {
          name: 'NetworkX Graphs',
          syntax: 'nx.draw(G, pos, **kwargs)',
          description: 'Network and graph visualization',
          example: 'import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.karate_club_graph()\npos = nx.spring_layout(G)\n\nnx.draw(G, pos, node_color=\'lightblue\', \n        node_size=500, with_labels=True,\n        edge_color=\'gray\', font_size=10,\n        font_weight=\'bold\')\nplt.title(\'Social Network Graph\')\nplt.axis(\'off\')\nplt.show()',
          use: 'Relationships, social networks, dependencies. Various layout algorithms available'
        },
        {
          name: 'WordCloud',
          syntax: 'WordCloud().generate(text)',
          description: 'Generate word clouds from text data',
          example: 'from wordcloud import WordCloud\nimport matplotlib.pyplot as plt\n\ntext = """Python data visualization matplotlib seaborn \nplotly pandas numpy analysis charts graphs plots \ninteractive beautiful insights data science"""\n\nwordcloud = WordCloud(width=800, height=400,\n                      background_color=\'white\',\n                      colormap=\'viridis\').generate(text)\n\nplt.figure(figsize=(10, 5))\nplt.imshow(wordcloud, interpolation=\'bilinear\')\nplt.axis(\'off\')\nplt.title(\'Word Cloud\')\nplt.show()',
          use: 'Text analysis, frequency visualization. Size represents word frequency'
        },
        {
          name: 'Altair',
          syntax: 'alt.Chart(df).mark_*().encode()',
          description: 'Declarative statistical visualization',
          example: 'import altair as alt\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': np.random.rand(100),\n    \'category\': np.random.choice([\'A\', \'B\', \'C\'], 100)\n})\n\nchart = alt.Chart(df).mark_circle(size=60).encode(\n    x=\'x\',\n    y=\'y\',\n    color=\'category\',\n    tooltip=[\'x\', \'y\', \'category\']\n).interactive()\n\nchart.show()\n# Or: chart.save(\'chart.html\')',
          use: 'Grammar of graphics approach. Highly composable, interactive by default'
        },
        {
          name: 'Bokeh',
          syntax: 'from bokeh.plotting import figure, show',
          description: 'Interactive visualization library for browsers',
          example: 'from bokeh.plotting import figure, show\nfrom bokeh.models import HoverTool\nimport numpy as np\n\nx = np.random.rand(100)\ny = np.random.rand(100)\ncolors = np.random.choice([\'red\', \'blue\', \'green\'], 100)\n\np = figure(title=\'Interactive Scatter\', tools=\'pan,wheel_zoom,reset\')\np.circle(x, y, size=10, color=colors, alpha=0.5)\n\nhover = HoverTool(tooltips=[(\'X\', \'@x\'), (\'Y\', \'@y\')])\np.add_tools(hover)\n\nshow(p)  # Opens in browser',
          use: 'Dashboard applications, interactive plots. Great for web deployment'
        },
        {
          name: 'Plotnine (ggplot)',
          syntax: 'ggplot(df, aes(x, y)) + geom_*()',
          description: 'Grammar of Graphics implementation for Python',
          example: 'from plotnine import ggplot, aes, geom_point, geom_smooth, theme_minimal\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \'x\': np.random.rand(100),\n    \'y\': 2 * np.random.rand(100) + 1,\n    \'category\': np.random.choice([\'A\', \'B\'], 100)\n})\n\n(ggplot(df, aes(\'x\', \'y\', color=\'category\'))\n + geom_point(alpha=0.6, size=3)\n + geom_smooth(method=\'lm\')\n + theme_minimal()\n + labs(title=\'ggplot Style Plot\'))',
          use: 'R ggplot2 syntax in Python. Layered approach to building plots'
        }
      ]
    },
    {
      id: 'styling',
      title: 'Styling & Customization',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'Color Palettes',
          syntax: 'Various color schemes for data visualization',
          description: 'Choose appropriate colors for your visualizations',
          example: '# Matplotlib\nimport matplotlib.pyplot as plt\ncolors = plt.cm.viridis(range(10))\n\n# Seaborn\nimport seaborn as sns\npalette = sns.color_palette(\'husl\', 8)\nsns.set_palette(palette)\n\n# Custom colors\ncustom = [\'#FF6B6B\', \'#4ECDC4\', \'#45B7D1\', \'#FFA07A\']\n\n# Popular palettes:\n# Categorical: Set1, Set2, Set3, Paired, tab10\n# Sequential: Blues, Greens, viridis, plasma\n# Diverging: RdYlBu, RdYlGn, coolwarm',
          use: 'viridis/plasma for continuous, Set1/tab10 for categorical, RdYlBu for diverging'
        },
        {
          name: 'Font Customization',
          syntax: 'plt.rc() / plt.rcParams[]',
          description: 'Customize fonts globally or per element',
          example: 'import matplotlib.pyplot as plt\n\n# Global settings\nplt.rcParams[\'font.family\'] = \'sans-serif\'\nplt.rcParams[\'font.size\'] = 12\nplt.rcParams[\'axes.labelsize\'] = 14\nplt.rcParams[\'axes.titlesize\'] = 16\n\n# Per element\nplt.plot([1, 2, 3], [1, 4, 9])\nplt.xlabel(\'X Label\', fontsize=14, fontweight=\'bold\', fontfamily=\'monospace\')\nplt.title(\'Custom Fonts\', fontsize=18, fontweight=\'bold\')\nplt.show()',
          use: 'Professional appearance, publication requirements. Set globally or override per plot'
        },
        {
          name: 'Grid & Spines',
          syntax: 'plt.grid() / ax.spines[]',
          description: 'Customize grid lines and plot borders',
          example: 'import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(8, 6))\nax.plot([1, 2, 3, 4], [1, 4, 2, 3])\n\n# Grid customization\nax.grid(True, linestyle=\'--\', alpha=0.3, color=\'gray\')\nax.set_axisbelow(True)  # Grid behind data\n\n# Remove top and right spines\nax.spines[\'top\'].set_visible(False)\nax.spines[\'right\'].set_visible(False)\n\n# Thicker left and bottom spines\nax.spines[\'left\'].set_linewidth(2)\nax.spines[\'bottom\'].set_linewidth(2)\n\nplt.show()',
          use: 'Cleaner appearance. Remove unnecessary chart junk for better focus'
        },
        {
          name: 'Figure Layout',
          syntax: 'plt.tight_layout() / constrained_layout',
          description: 'Automatically adjust subplot spacing',
          example: 'import matplotlib.pyplot as plt\n\n# Method 1: tight_layout\nfig, axes = plt.subplots(2, 2, figsize=(10, 8))\nfor ax in axes.flat:\n    ax.plot([1, 2, 3], [1, 4, 9])\n    ax.set_xlabel(\'X Label\')\n    ax.set_ylabel(\'Y Label\')\nplt.tight_layout()\nplt.show()\n\n# Method 2: constrained_layout (preferred)\nfig, axes = plt.subplots(2, 2, figsize=(10, 8), \n                         constrained_layout=True)\nplt.show()',
          use: 'Prevent overlapping labels. constrained_layout is more modern'
        },
        {
          name: 'Themes & Context',
          syntax: 'sns.set_theme() / sns.set_context()',
          description: 'Apply consistent styling with Seaborn',
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# Set theme\nsns.set_theme(style=\'whitegrid\', palette=\'muted\')\n# Styles: darkgrid, whitegrid, dark, white, ticks\n\n# Set context for different use cases\nsns.set_context(\'notebook\')  # or: paper, talk, poster\n\n# Custom theme\nsns.set_theme(style=\'ticks\', \n              rc={\'axes.facecolor\': \'#EAEAF2\',\n                  \'grid.color\': \'white\',\n                  \'grid.linewidth\': 1.5})\n\nplt.plot([1, 2, 3], [1, 4, 9])\nplt.show()',
          use: 'Consistent styling across plots. Context adjusts sizes for different outputs'
        },
        {
          name: 'Export Settings',
          syntax: 'plt.savefig() parameters',
          description: 'Optimize exports for different purposes',
          example: 'import matplotlib.pyplot as plt\n\nplt.plot([1, 2, 3], [1, 4, 9])\n\n# High-res for publication (300+ dpi)\nplt.savefig(\'figure.png\', dpi=300, bbox_inches=\'tight\')\n\n# Vector for scaling (PDF, SVG, EPS)\nplt.savefig(\'figure.pdf\', bbox_inches=\'tight\')\nplt.savefig(\'figure.svg\', bbox_inches=\'tight\')\n\n# Transparent background\nplt.savefig(\'figure.png\', transparent=True, bbox_inches=\'tight\')\n\n# Specific size\nplt.savefig(\'figure.png\', dpi=150, bbox_inches=\'tight\',\n            facecolor=\'white\', edgecolor=\'none\')',
          use: 'dpi=300 for print, vector formats for publications, bbox_inches=\'tight\' to remove whitespace'
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
              <BarChart3 size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Data Visualization Reference
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Complete guide to Matplotlib, Seaborn, Plotly, Pandas plotting, and specialized visualization libraries
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search visualization techniques and methods..."
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
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} techniques</p>
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
                            <p className="text-xs font-semibold text-blue-600 uppercase mb-1">Usage</p>
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
            Visualization Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Palette className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Colors Wisely</h3>
              <p className="text-gray-600 text-sm">
                Use colorblind-friendly palettes like viridis. Limit to 5-7 colors for categorical data.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <BarChart3 className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Right Chart Type</h3>
              <p className="text-gray-600 text-sm">
                Line for trends, bar for comparisons, scatter for relationships, heatmap for matrices.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingUp className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keep It Simple</h3>
              <p className="text-gray-600 text-sm">
                Remove chart junk, use clear labels, and focus on the story your data tells.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}