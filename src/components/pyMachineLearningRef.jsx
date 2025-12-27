import { useState } from 'react';
import { Search, Brain, Target, TrendingUp, ChevronDown, ChevronRight, Zap, Grid, Database, LineChart } from 'lucide-react';

export default function PythonMLReference() {
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
      id: 'data-prep',
      title: 'Data Preprocessing',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Train-Test Split',
          syntax: 'train_test_split(X, y, test_size=0.2, random_state=42)',
          description: 'Split data into training and testing sets',
          example: 'from sklearn.model_selection import train_test_split\nimport numpy as np\n\n# Sample data\nX = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])\ny = np.array([0, 0, 1, 1])\n\n# Split into 80% train, 20% test\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nprint(f"Train size: {len(X_train)}, Test size: {len(X_test)}")',
          use: 'Essential for model validation. Use random_state for reproducibility, test_size typically 0.2-0.3'
        },
        {
          name: 'Standard Scaling',
          syntax: 'StandardScaler().fit_transform(X)',
          description: 'Standardize features by removing mean and scaling to unit variance',
          example: 'from sklearn.preprocessing import StandardScaler\nimport numpy as np\n\nX = np.array([[1, 2], [3, 4], [5, 6]])\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nprint("Original:", X[0])\nprint("Scaled:", X_scaled[0])\nprint(f"Mean: {X_scaled.mean():.2f}, Std: {X_scaled.std():.2f}")',
          use: 'Required for algorithms sensitive to feature scales (SVM, neural networks, KNN). Transforms to mean=0, std=1'
        },
        {
          name: 'Min-Max Scaling',
          syntax: 'MinMaxScaler().fit_transform(X)',
          description: 'Scale features to a given range (default 0-1)',
          example: 'from sklearn.preprocessing import MinMaxScaler\nimport numpy as np\n\nX = np.array([[1, 2], [3, 4], [5, 6]])\n\nscaler = MinMaxScaler(feature_range=(0, 1))\nX_scaled = scaler.fit_transform(X)\n\nprint("Original range:", X.min(), "-", X.max())\nprint("Scaled range:", X_scaled.min(), "-", X_scaled.max())\nprint("Scaled data:", X_scaled)',
          use: 'When you need bounded values (0-1). Better than StandardScaler when distribution is not Gaussian'
        },
        {
          name: 'Label Encoding',
          syntax: 'LabelEncoder().fit_transform(y)',
          description: 'Convert categorical labels to numeric values',
          example: 'from sklearn.preprocessing import LabelEncoder\n\ny = ["cat", "dog", "cat", "bird", "dog"]\n\nencoder = LabelEncoder()\ny_encoded = encoder.fit_transform(y)\n\nprint("Original:", y)\nprint("Encoded:", y_encoded)\nprint("Classes:", encoder.classes_)\n\n# Decode back\ny_decoded = encoder.inverse_transform(y_encoded)\nprint("Decoded:", y_decoded)',
          use: 'For target variables in classification. Converts strings to integers (0, 1, 2, ...)'
        },
        {
          name: 'One-Hot Encoding',
          syntax: 'pd.get_dummies(df) or OneHotEncoder()',
          description: 'Convert categorical variables into binary vectors',
          example: 'import pandas as pd\nfrom sklearn.preprocessing import OneHotEncoder\n\ndf = pd.DataFrame({"color": ["red", "blue", "green", "red"]})\n\n# Method 1: Pandas\nencoded = pd.get_dummies(df, columns=["color"])\nprint("Pandas method:")\nprint(encoded)\n\n# Method 2: sklearn\nencoder = OneHotEncoder(sparse_output=False)\nencoded = encoder.fit_transform(df[["color"]])\nprint("\\nSklearn method:")\nprint(encoded)',
          use: 'For categorical features with no ordinal relationship. Creates binary column for each category'
        },
        {
          name: 'Handle Missing Values',
          syntax: 'SimpleImputer(strategy="mean").fit_transform(X)',
          description: 'Fill missing values with various strategies',
          example: 'from sklearn.impute import SimpleImputer\nimport numpy as np\n\nX = np.array([[1, 2], [np.nan, 3], [7, 6], [4, np.nan]])\n\n# Strategy: mean, median, most_frequent, constant\nimputer = SimpleImputer(strategy="mean")\nX_imputed = imputer.fit_transform(X)\n\nprint("Original:")\nprint(X)\nprint("\\nImputed:")\nprint(X_imputed)',
          use: 'Handle missing data before training. Use mean/median for numeric, most_frequent for categorical'
        }
      ]
    },
    {
      id: 'supervised-regression',
      title: 'Supervised Learning - Regression',
      icon: LineChart,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'Linear Regression',
          syntax: 'LinearRegression().fit(X_train, y_train)',
          description: 'Simple linear model for continuous target prediction',
          example: 'from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 5, 4, 5])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Predictions\ny_pred = model.predict(X)\n\nprint(f"Coefficient: {model.coef_[0]:.2f}")\nprint(f"Intercept: {model.intercept_:.2f}")\nprint(f"R² Score: {r2_score(y, y_pred):.3f}")\nprint(f"MSE: {mean_squared_error(y, y_pred):.3f}")',
          use: 'Baseline model for regression. Fast, interpretable. Assumes linear relationship between features and target'
        },
        {
          name: 'Ridge Regression',
          syntax: 'Ridge(alpha=1.0).fit(X_train, y_train)',
          description: 'Linear regression with L2 regularization',
          example: 'from sklearn.linear_model import Ridge\nfrom sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.random.rand(100, 5)\ny = X.sum(axis=1) + np.random.randn(100) * 0.1\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# alpha controls regularization strength\nmodel = Ridge(alpha=1.0)\nmodel.fit(X_train, y_train)\n\nscore = model.score(X_test, y_test)\nprint(f"R² Score: {score:.3f}")\nprint(f"Coefficients: {model.coef_}")',
          use: 'Prevents overfitting when features are correlated. Higher alpha = stronger regularization'
        },
        {
          name: 'Lasso Regression',
          syntax: 'Lasso(alpha=1.0).fit(X_train, y_train)',
          description: 'Linear regression with L1 regularization for feature selection',
          example: 'from sklearn.linear_model import Lasso\nimport numpy as np\n\nX = np.random.rand(100, 10)\ny = X[:, 0] + 2*X[:, 1] + np.random.randn(100) * 0.1\n\nmodel = Lasso(alpha=0.1)\nmodel.fit(X, y)\n\n# Lasso can zero out coefficients\nprint("Coefficients:")\nfor i, coef in enumerate(model.coef_):\n    if abs(coef) > 0.01:\n        print(f"  Feature {i}: {coef:.3f}")\n    else:\n        print(f"  Feature {i}: 0 (eliminated)")',
          use: 'Feature selection - zeros out unimportant features. Good when you have many features'
        },
        {
          name: 'Random Forest Regressor',
          syntax: 'RandomForestRegressor(n_estimators=100).fit(X, y)',
          description: 'Ensemble of decision trees for robust regression',
          example: 'from sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_squared_error\nimport numpy as np\n\nX = np.random.rand(100, 5)\ny = X[:, 0]**2 + X[:, 1] + np.random.randn(100) * 0.1\n\nmodel = RandomForestRegressor(\n    n_estimators=100,\n    max_depth=5,\n    random_state=42\n)\nmodel.fit(X, y)\n\ny_pred = model.predict(X)\n\nprint(f"MSE: {mean_squared_error(y, y_pred):.3f}")\nprint("\\nFeature importances:")\nfor i, imp in enumerate(model.feature_importances_):\n    print(f"  Feature {i}: {imp:.3f}")',
          use: 'Handles non-linear relationships, robust to outliers. Provides feature importance. Good default choice'
        },
        {
          name: 'Gradient Boosting Regressor',
          syntax: 'GradientBoostingRegressor().fit(X_train, y_train)',
          description: 'Boosted trees for high-performance regression',
          example: 'from sklearn.ensemble import GradientBoostingRegressor\nimport numpy as np\n\nX = np.random.rand(200, 3)\ny = X[:, 0]**2 + 2*X[:, 1] - X[:, 2] + np.random.randn(200)*0.1\n\nmodel = GradientBoostingRegressor(\n    n_estimators=100,\n    learning_rate=0.1,\n    max_depth=3,\n    random_state=42\n)\nmodel.fit(X, y)\n\nscore = model.score(X, y)\nprint(f"R² Score: {score:.3f}")\nprint(f"Feature importances: {model.feature_importances_}")',
          use: 'Often best performance for tabular data. Slower than Random Forest but more accurate'
        },
        {
          name: 'Support Vector Regression',
          syntax: 'SVR(kernel="rbf").fit(X_train, y_train)',
          description: 'SVM for regression with kernel trick',
          example: 'from sklearn.svm import SVR\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\nX = np.sort(5 * np.random.rand(40, 1), axis=0)\ny = np.sin(X).ravel() + np.random.randn(40) * 0.1\n\n# SVR requires scaled data\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nmodel = SVR(kernel="rbf", C=100, gamma=0.1, epsilon=0.1)\nmodel.fit(X_scaled, y)\n\ny_pred = model.predict(X_scaled)\nprint(f"Predictions: {y_pred[:5]}")',
          use: 'Good for non-linear relationships. Requires feature scaling. C controls regularization'
        }
      ]
    },
    {
      id: 'supervised-classification',
      title: 'Supervised Learning - Classification',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'Logistic Regression',
          syntax: 'LogisticRegression().fit(X_train, y_train)',
          description: 'Linear model for binary and multiclass classification',
          example: 'from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\nimport numpy as np\n\nX = np.random.rand(100, 4)\ny = (X[:, 0] + X[:, 1] > 1).astype(int)\n\nmodel = LogisticRegression(random_state=42)\nmodel.fit(X, y)\n\ny_pred = model.predict(X)\ny_proba = model.predict_proba(X)\n\nprint(f"Accuracy: {accuracy_score(y, y_pred):.3f}")\nprint(f"\\nProbabilities (first 3): {y_proba[:3]}")\nprint(f"Predictions (first 3): {y_pred[:3]}")',
          use: 'Fast, interpretable baseline for classification. Outputs probabilities. Works well for linearly separable data'
        },
        {
          name: 'Decision Tree Classifier',
          syntax: 'DecisionTreeClassifier(max_depth=5).fit(X, y)',
          description: 'Tree-based classifier with interpretable rules',
          example: 'from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = DecisionTreeClassifier(\n    max_depth=3,\n    min_samples_split=5,\n    random_state=42\n)\nmodel.fit(X, y)\n\ny_pred = model.predict(X)\n\nprint(f"Accuracy: {accuracy_score(y, y_pred):.3f}")\nprint(f"Tree depth: {model.get_depth()}")\nprint(f"Feature importances: {model.feature_importances_}")',
          use: 'Highly interpretable, handles non-linear data. Prone to overfitting - use max_depth to control'
        },
        {
          name: 'Random Forest Classifier',
          syntax: 'RandomForestClassifier(n_estimators=100).fit(X, y)',
          description: 'Ensemble of decision trees for robust classification',
          example: 'from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import make_classification\nfrom sklearn.metrics import accuracy_score\n\nX, y = make_classification(\n    n_samples=1000, n_features=20,\n    n_informative=15, random_state=42\n)\n\nmodel = RandomForestClassifier(\n    n_estimators=100,\n    max_depth=10,\n    random_state=42\n)\nmodel.fit(X, y)\n\ny_pred = model.predict(X)\nprint(f"Accuracy: {accuracy_score(y, y_pred):.3f}")\nprint(f"\\nTop 5 features by importance:")\nimportances = sorted(\n    enumerate(model.feature_importances_),\n    key=lambda x: x[1], reverse=True\n)[:5]\nfor idx, imp in importances:\n    print(f"  Feature {idx}: {imp:.3f}")',
          use: 'Excellent general-purpose classifier. Handles imbalanced data well. Provides feature importance'
        },
        {
          name: 'Gradient Boosting Classifier',
          syntax: 'GradientBoostingClassifier().fit(X_train, y_train)',
          description: 'Boosted trees for high-accuracy classification',
          example: 'from sklearn.ensemble import GradientBoostingClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\nX = np.random.rand(500, 10)\ny = (X[:, 0] + X[:, 1]**2 > 1).astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nmodel = GradientBoostingClassifier(\n    n_estimators=100,\n    learning_rate=0.1,\n    max_depth=3\n)\nmodel.fit(X_train, y_train)\n\nprint(f"Train accuracy: {model.score(X_train, y_train):.3f}")\nprint(f"Test accuracy: {model.score(X_test, y_test):.3f}")',
          use: 'Often highest accuracy on tabular data. Slower to train. Watch for overfitting'
        },
        {
          name: 'Support Vector Machine',
          syntax: 'SVC(kernel="rbf").fit(X_train, y_train)',
          description: 'Powerful classifier with kernel trick for non-linear boundaries',
          example: 'from sklearn.svm import SVC\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nimport numpy as np\n\nX = np.random.rand(100, 2)\ny = ((X[:, 0] - 0.5)**2 + (X[:, 1] - 0.5)**2 < 0.2).astype(int)\n\n# SVM works best with scaled data\npipeline = Pipeline([\n    ("scaler", StandardScaler()),\n    ("svm", SVC(kernel="rbf", C=1.0, gamma="auto"))\n])\n\npipeline.fit(X, y)\ny_pred = pipeline.predict(X)\n\nfrom sklearn.metrics import accuracy_score\nprint(f"Accuracy: {accuracy_score(y, y_pred):.3f}")',
          use: 'Excellent for complex decision boundaries. Requires scaling. C controls regularization'
        },
        {
          name: 'K-Nearest Neighbors',
          syntax: 'KNeighborsClassifier(n_neighbors=5).fit(X, y)',
          description: 'Instance-based learning using closest training examples',
          example: 'from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=42\n)\n\n# Try different k values\nfor k in [3, 5, 7]:\n    model = KNeighborsClassifier(n_neighbors=k)\n    model.fit(X_train, y_train)\n    score = model.score(X_test, y_test)\n    print(f"k={k}: Accuracy = {score:.3f}")',
          use: 'Simple, no training phase. Good for small datasets. Requires feature scaling. Slow on large datasets'
        },
        {
          name: 'Naive Bayes',
          syntax: 'GaussianNB().fit(X_train, y_train)',
          description: 'Probabilistic classifier based on Bayes theorem',
          example: 'from sklearn.naive_bayes import GaussianNB\nfrom sklearn.datasets import load_iris\nfrom sklearn.metrics import accuracy_score\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = GaussianNB()\nmodel.fit(X, y)\n\ny_pred = model.predict(X)\ny_proba = model.predict_proba(X)\n\nprint(f"Accuracy: {accuracy_score(y, y_pred):.3f}")\nprint(f"\\nPredicted probabilities (first 3 samples):")\nfor i in range(3):\n    print(f"  Sample {i}: {y_proba[i]}")',
          use: 'Fast, works well with small datasets. Good for text classification. Assumes feature independence'
        }
      ]
    },
    {
      id: 'unsupervised',
      title: 'Unsupervised Learning',
      icon: Grid,
      color: 'from-cyan-500 to-cyan-600',
      items: [
        {
          name: 'K-Means Clustering',
          syntax: 'KMeans(n_clusters=3).fit(X)',
          description: 'Partition data into K clusters based on centroids',
          example: 'from sklearn.cluster import KMeans\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nX = np.random.rand(300, 2)\n\nkmeans = KMeans(n_clusters=3, random_state=42)\nkmeans.fit(X)\n\nlabels = kmeans.labels_\ncenters = kmeans.cluster_centers_\n\nprint(f"Cluster labels: {labels[:10]}")\nprint(f"Cluster centers:\\n{centers}")\nprint(f"Inertia (within-cluster sum of squares): {kmeans.inertia_:.2f}")\n\n# Find optimal k using elbow method\ninertias = []\nfor k in range(1, 10):\n    km = KMeans(n_clusters=k, random_state=42)\n    km.fit(X)\n    inertias.append(km.inertia_)',
          use: 'Fast, scalable clustering. Choose K using elbow method or silhouette score. Assumes spherical clusters'
        },
        {
          name: 'DBSCAN',
          syntax: 'DBSCAN(eps=0.5, min_samples=5).fit(X)',
          description: 'Density-based clustering that finds arbitrary-shaped clusters',
          example: 'from sklearn.cluster import DBSCAN\nimport numpy as np\n\nX = np.random.rand(100, 2)\n\ndbscan = DBSCAN(eps=0.1, min_samples=5)\nlabels = dbscan.fit_predict(X)\n\n# -1 indicates noise points\nn_clusters = len(set(labels)) - (1 if -1 in labels else 0)\nn_noise = list(labels).count(-1)\n\nprint(f"Number of clusters: {n_clusters}")\nprint(f"Number of noise points: {n_noise}")\nprint(f"Cluster labels: {labels[:10]}")\nprint(f"Core sample indices: {dbscan.core_sample_indices_[:10]}")',
          use: 'Finds clusters of arbitrary shapes, handles noise. No need to specify number of clusters. Sensitive to eps and min_samples'
        },
        {
          name: 'Hierarchical Clustering',
          syntax: 'AgglomerativeClustering(n_clusters=3).fit(X)',
          description: 'Build hierarchy of clusters using bottom-up approach',
          example: 'from sklearn.cluster import AgglomerativeClustering\nfrom scipy.cluster.hierarchy import dendrogram, linkage\nimport numpy as np\n\nX = np.random.rand(50, 2)\n\n# Fit model\nagg = AgglomerativeClustering(\n    n_clusters=3,\n    linkage="ward"\n)\nlabels = agg.fit_predict(X)\n\nprint(f"Cluster labels: {labels}")\nprint(f"Number of clusters: {agg.n_clusters_}")\n\n# Create dendrogram for visualization\nZ = linkage(X, method="ward")\n# dendrogram(Z)  # Uncomment to plot',
          use: 'Produces dendrogram for visualization. Good for small datasets. Linkage types: ward, complete, average, single'
        },
        {
          name: 'PCA - Dimensionality Reduction',
          syntax: 'PCA(n_components=2).fit_transform(X)',
          description: 'Reduce dimensions while preserving maximum variance',
          example: 'from sklearn.decomposition import PCA\nimport numpy as np\n\nX = np.random.rand(100, 10)\n\npca = PCA(n_components=3)\nX_reduced = pca.fit_transform(X)\n\nprint(f"Original shape: {X.shape}")\nprint(f"Reduced shape: {X_reduced.shape}")\nprint(f"Explained variance ratio: {pca.explained_variance_ratio_}")\nprint(f"Total variance explained: {pca.explained_variance_ratio_.sum():.3f}")\n\n# Find optimal n_components\npca_full = PCA()\npca_full.fit(X)\ncumsum = np.cumsum(pca_full.explained_variance_ratio_)\nn_comp_95 = np.argmax(cumsum >= 0.95) + 1\nprint(f"Components for 95% variance: {n_comp_95}")',
          use: 'Visualization, noise reduction, feature extraction. Use for highly correlated features. Linear method'
        },
        {
          name: 't-SNE',
          syntax: 't_SNE(n_components=2).fit_transform(X)',
          description: 'Non-linear dimensionality reduction for visualization',
          example: 'from sklearn.manifold import TSNE\nfrom sklearn.datasets import load_digits\nimport numpy as np\n\ndigits = load_digits()\nX, y = digits.data, digits.target\n\n# t-SNE for visualization\ntsne = TSNE(\n    n_components=2,\n    perplexity=30,\n    random_state=42\n)\nX_embedded = tsne.fit_transform(X[:500])  # Use subset for speed\n\nprint(f"Original shape: {X[:500].shape}")\nprint(f"Embedded shape: {X_embedded.shape}")\nprint(f"KL divergence: {tsne.kl_divergence_:.3f}")\n\n# Visualize with matplotlib\n# plt.scatter(X_embedded[:, 0], X_embedded[:, 1], c=y[:500], cmap="tab10")',
          use: 'Excellent for 2D/3D visualization of high-dimensional data. Slow, non-deterministic. Only for visualization, not features'
        },
        {
          name: 'Isolation Forest - Anomaly Detection',
          syntax: 'IsolationForest(contamination=0.1).fit(X)',
          description: 'Detect outliers using tree-based isolation',
          example: 'from sklearn.ensemble import IsolationForest\nimport numpy as np\n\n# Normal data with some outliers\nX = np.random.randn(100, 2)\nX[:10] += 5  # Add outliers\n\niso = IsolationForest(\n    contamination=0.1,\n    random_state=42\n)\npredictions = iso.fit_predict(X)\n\n# -1 for outliers, 1 for inliers\nn_outliers = list(predictions).count(-1)\nn_inliers = list(predictions).count(1)\n\nprint(f"Outliers detected: {n_outliers}")\nprint(f"Inliers: {n_inliers}")\nprint(f"Anomaly scores (first 5): {iso.score_samples(X[:5])}")',
          use: 'Fast anomaly detection. Contamination parameter sets expected outlier proportion. No labeled data needed'
        }
      ]
    },
    {
      id: 'model-evaluation',
      title: 'Model Evaluation & Selection',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: 'Cross-Validation',
          syntax: 'cross_val_score(model, X, y, cv=5)',
          description: 'Evaluate model performance using k-fold cross-validation',
          example: 'from sklearn.model_selection import cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nimport numpy as np\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = RandomForestClassifier(random_state=42)\n\n# 5-fold cross-validation\nscores = cross_val_score(model, X, y, cv=5)\n\nprint(f"CV Scores: {scores}")\nprint(f"Mean: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")\n\n# Different scoring metrics\nscores_f1 = cross_val_score(model, X, y, cv=5, scoring="f1_weighted")\nprint(f"F1 Scores: {scores_f1.mean():.3f}")',
          use: 'More reliable than single train-test split. Detects overfitting. Use cv=5 or cv=10 typically'
        },
        {
          name: 'Grid Search CV',
          syntax: 'GridSearchCV(model, param_grid, cv=5).fit(X, y)',
          description: 'Exhaustive search over hyperparameter combinations',
          example: 'from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nparam_grid = {\n    "n_estimators": [50, 100, 200],\n    "max_depth": [3, 5, 7],\n    "min_samples_split": [2, 5]\n}\n\nmodel = RandomForestClassifier(random_state=42)\ngrid = GridSearchCV(model, param_grid, cv=5, verbose=1)\ngrid.fit(X, y)\n\nprint(f"Best parameters: {grid.best_params_}")\nprint(f"Best score: {grid.best_score_:.3f}")\nprint(f"Best model: {grid.best_estimator_}")',
          use: 'Find optimal hyperparameters. Exhaustive but slow. Use RandomizedSearchCV for large search spaces'
        },
        {
          name: 'Classification Metrics',
          syntax: 'classification_report(y_true, y_pred)',
          description: 'Comprehensive classification performance metrics',
          example: 'from sklearn.metrics import classification_report, confusion_matrix, accuracy_score\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=42\n)\n\nmodel = RandomForestClassifier(random_state=42)\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\n\nprint(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")\nprint("\\nClassification Report:")\nprint(classification_report(y_test, y_pred))\nprint("\\nConfusion Matrix:")\nprint(confusion_matrix(y_test, y_pred))',
          use: 'Precision, recall, F1-score for each class. Confusion matrix shows misclassifications'
        },
        {
          name: 'Regression Metrics',
          syntax: 'mean_squared_error(y_true, y_pred)',
          description: 'Evaluate regression model performance',
          example: 'from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.random.rand(100, 1)\ny = 2 * X.ravel() + 1 + np.random.randn(100) * 0.1\n\nmodel = LinearRegression()\nmodel.fit(X, y)\ny_pred = model.predict(X)\n\nprint(f"R² Score: {r2_score(y, y_pred):.3f}")\nprint(f"MSE: {mean_squared_error(y, y_pred):.3f}")\nprint(f"RMSE: {np.sqrt(mean_squared_error(y, y_pred)):.3f}")\nprint(f"MAE: {mean_absolute_error(y, y_pred):.3f}")',
          use: 'R² (1=perfect), MSE (lower better), RMSE (same units as target), MAE (robust to outliers)'
        },
        {
          name: 'ROC Curve & AUC',
          syntax: 'roc_auc_score(y_true, y_scores)',
          description: 'Evaluate binary classifier performance across thresholds',
          example: 'from sklearn.metrics import roc_auc_score, roc_curve\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import make_classification\nimport numpy as np\n\nX, y = make_classification(n_samples=1000, random_state=42)\n\nmodel = LogisticRegression()\nmodel.fit(X, y)\ny_scores = model.predict_proba(X)[:, 1]\n\nauc = roc_auc_score(y, y_scores)\nprint(f"AUC-ROC: {auc:.3f}")\n\nfpr, tpr, thresholds = roc_curve(y, y_scores)\nprint(f"\\nFPR (first 5): {fpr[:5]}")\nprint(f"TPR (first 5): {tpr[:5]}")\n\n# Plot: plt.plot(fpr, tpr, label=f"AUC={auc:.3f}")',
          use: 'AUC=1.0 is perfect, 0.5 is random. Good for imbalanced datasets. Use predict_proba for scores'
        },
        {
          name: 'Learning Curves',
          syntax: 'learning_curve(model, X, y, cv=5)',
          description: 'Diagnose bias vs variance by plotting train/validation scores',
          example: 'from sklearn.model_selection import learning_curve\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_digits\nimport numpy as np\n\ndigits = load_digits()\nX, y = digits.data, digits.target\n\nmodel = RandomForestClassifier(random_state=42)\n\ntrain_sizes, train_scores, val_scores = learning_curve(\n    model, X, y, cv=5, \n    train_sizes=np.linspace(0.1, 1.0, 10),\n    random_state=42\n)\n\ntrain_mean = train_scores.mean(axis=1)\nval_mean = val_scores.mean(axis=1)\n\nprint("Training sizes:", train_sizes)\nprint("Train scores:", train_mean)\nprint("Validation scores:", val_mean)',
          use: 'Gap between train/val = overfitting. Both low = underfitting. Converging = good fit'
        }
      ]
    },
    {
      id: 'neural-networks',
      title: 'Neural Networks & Deep Learning',
      icon: Brain,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'Multi-layer Perceptron',
          syntax: 'MLPClassifier(hidden_layer_sizes=(100,)).fit(X, y)',
          description: 'Basic neural network with scikit-learn',
          example: 'from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n\ndigits = load_digits()\nX, y = digits.data, digits.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nscaler = StandardScaler()\nX_train = scaler.fit_transform(X_train)\nX_test = scaler.transform(X_test)\n\nmlp = MLPClassifier(\n    hidden_layer_sizes=(100, 50),\n    activation="relu",\n    max_iter=300,\n    random_state=42\n)\nmlp.fit(X_train, y_train)\n\nprint(f"Train score: {mlp.score(X_train, y_train):.3f}")\nprint(f"Test score: {mlp.score(X_test, y_test):.3f}")',
          use: 'Good starting point for neural networks. Requires scaling. hidden_layer_sizes=(100,50) = 2 layers'
        },
        {
          name: 'MLP Regressor',
          syntax: 'MLPRegressor(hidden_layer_sizes=(100,)).fit(X, y)',
          description: 'Neural network for regression tasks',
          example: 'from sklearn.neural_network import MLPRegressor\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\nX = np.random.rand(200, 5)\ny = X[:, 0]**2 + X[:, 1] - 2*X[:, 2] + np.random.randn(200)*0.1\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nmlp = MLPRegressor(\n    hidden_layer_sizes=(50, 30),\n    activation="relu",\n    solver="adam",\n    max_iter=500,\n    random_state=42\n)\nmlp.fit(X_scaled, y)\n\nfrom sklearn.metrics import r2_score\ny_pred = mlp.predict(X_scaled)\nprint(f"R² Score: {r2_score(y, y_pred):.3f}")\nprint(f"Number of iterations: {mlp.n_iter_}")',
          use: 'Handles non-linear relationships. Solver options: adam (default), sgd, lbfgs. Scale features!'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Techniques',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        {
          name: 'Pipeline',
          syntax: 'Pipeline([("scaler", StandardScaler()), ("model", model)])',
          description: 'Chain preprocessing and model steps together',
          example: 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\npipeline = Pipeline([\n    ("scaler", StandardScaler()),\n    ("svm", SVC(kernel="rbf"))\n])\n\npipeline.fit(X_train, y_train)\nscore = pipeline.score(X_test, y_test)\n\nprint(f"Test accuracy: {score:.3f}")\nprint(f"Pipeline steps: {pipeline.named_steps.keys()}")',
          use: 'Prevents data leakage, makes code cleaner, enables grid search on entire pipeline'
        },
        {
          name: 'Feature Importance',
          syntax: 'model.feature_importances_',
          description: 'Identify most important features for tree-based models',
          example: 'from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nimport numpy as np\n\niris = load_iris()\nX, y = iris.data, iris.target\nfeature_names = iris.feature_names\n\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X, y)\n\nimportances = model.feature_importances_\nindices = np.argsort(importances)[::-1]\n\nprint("Feature ranking:")\nfor i in range(X.shape[1]):\n    print(f"{i+1}. {feature_names[indices[i]]}: {importances[indices[i]]:.3f}")',
          use: 'Works with Random Forest, Gradient Boosting, XGBoost. Higher = more important. Sum = 1.0'
        },
        {
          name: 'Class Imbalance - SMOTE',
          syntax: 'SMOTE().fit_resample(X, y)',
          description: 'Handle imbalanced datasets by oversampling minority class',
          example: 'from imblearn.over_sampling import SMOTE\nfrom sklearn.datasets import make_classification\nfrom collections import Counter\n\n# Create imbalanced dataset\nX, y = make_classification(\n    n_samples=1000, n_classes=2,\n    weights=[0.9, 0.1], random_state=42\n)\n\nprint(f"Original class distribution: {Counter(y)}")\n\n# Apply SMOTE\nsmote = SMOTE(random_state=42)\nX_resampled, y_resampled = smote.fit_resample(X, y)\n\nprint(f"Resampled distribution: {Counter(y_resampled)}")\nprint(f"Original shape: {X.shape}")\nprint(f"Resampled shape: {X_resampled.shape}")',
          use: 'Fixes class imbalance. Install: pip install imbalanced-learn. Alternative: use class_weight parameter'
        },
        {
          name: 'Ensemble Voting',
          syntax: 'VotingClassifier(estimators=[...]).fit(X, y)',
          description: 'Combine multiple models for better predictions',
          example: 'from sklearn.ensemble import VotingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nclf1 = LogisticRegression(random_state=42)\nclf2 = DecisionTreeClassifier(random_state=42)\nclf3 = SVC(probability=True, random_state=42)\n\nvoting = VotingClassifier(\n    estimators=[("lr", clf1), ("dt", clf2), ("svc", clf3)],\n    voting="soft"  # or "hard"\n)\nvoting.fit(X, y)\n\nfor clf in (clf1, clf2, clf3, voting):\n    clf.fit(X, y)\n    print(f"{clf.__class__.__name__}: {clf.score(X, y):.3f}")',
          use: 'Combines diverse models. soft=average probabilities, hard=majority vote. Often improves accuracy'
        },
        {
          name: 'Feature Selection - SelectKBest',
          syntax: 'SelectKBest(k=10).fit_transform(X, y)',
          description: 'Select top K features based on statistical tests',
          example: 'from sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.datasets import load_digits\n\ndigits = load_digits()\nX, y = digits.data, digits.target\n\nprint(f"Original features: {X.shape[1]}")\n\nselector = SelectKBest(score_func=f_classif, k=20)\nX_selected = selector.fit_transform(X, y)\n\nprint(f"Selected features: {X_selected.shape[1]}")\nprint(f"Feature scores (first 10): {selector.scores_[:10]}")\nprint(f"Selected indices: {selector.get_support(indices=True)[:10]}")',
          use: 'Reduces features, speeds up training. f_classif for classification, f_regression for regression'
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
              <Brain size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Python Machine Learning Reference
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Complete guide to scikit-learn, preprocessing, supervised & unsupervised learning, model evaluation, and advanced techniques
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ML algorithms and techniques..."
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
            Machine Learning Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Database className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Always Scale Features</h3>
              <p className="text-gray-600 text-sm">
                Use StandardScaler or MinMaxScaler for algorithms like SVM, KNN, and neural networks. Tree-based models do not need scaling.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Target className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prevent Overfitting</h3>
              <p className="text-gray-600 text-sm">
                Use cross-validation, regularization, and test on unseen data. Watch for large gap between train and test scores.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingUp className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Simple</h3>
              <p className="text-gray-600 text-sm">
                Begin with simple models like Logistic Regression or Random Forest. Add complexity only if needed based on validation scores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}