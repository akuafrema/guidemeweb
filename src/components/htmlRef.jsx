import { useState } from 'react';
import { Search, FileText, Type, Link, List, Table, ChevronDown, ChevronRight, Globe, Layout, Box } from 'lucide-react';

export default function HTMLReference() {
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
      id: 'structure',
      title: 'Document Structure',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: '<!DOCTYPE html>',
          syntax: '<!DOCTYPE html>',
          description: 'Declares document type as HTML5',
          example: '<!DOCTYPE html>',
          use: 'Always first line of HTML document, tells browser to use HTML5'
        },
        {
          name: '<html>',
          syntax: '<html lang="en">...</html>',
          description: 'Root element of HTML page',
          example: '<html lang="en">\n  <!-- content -->\n</html>',
          use: 'Contains all HTML content, use lang attribute for language'
        },
        {
          name: '<head>',
          syntax: '<head>...</head>',
          description: 'Contains metadata about the document',
          example: '<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>',
          use: 'Metadata, styles, scripts, title - not displayed on page'
        },
        {
          name: '<title>',
          syntax: '<title>Page Title</title>',
          description: 'Sets document title shown in browser tab',
          example: '<title>My Website - Home</title>',
          use: 'Required element, important for SEO and bookmarks'
        },
        {
          name: '<meta>',
          syntax: '<meta name="..." content="...">',
          description: 'Provides metadata about HTML document',
          example: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width">\n<meta name="description" content="Page description">',
          use: 'Charset, viewport, description, keywords, author info'
        },
        {
          name: '<body>',
          syntax: '<body>...</body>',
          description: 'Contains visible page content',
          example: '<body>\n  <h1>Heading</h1>\n  <p>Content</p>\n</body>',
          use: 'All visible content goes inside body element'
        }
      ]
    },
    {
      id: 'text',
      title: 'Text Content',
      icon: Type,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: '<h1> - <h6>',
          syntax: '<h1>Heading</h1>',
          description: 'Heading elements from most important (h1) to least (h6)',
          example: '<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<h3>Section Heading</h3>',
          use: 'One h1 per page, use hierarchically for SEO'
        },
        {
          name: '<p>',
          syntax: '<p>Text content</p>',
          description: 'Paragraph element for text blocks',
          example: '<p>This is a paragraph of text.</p>',
          use: 'Main text content, creates line breaks before and after'
        },
        {
          name: '<strong>',
          syntax: '<strong>Text</strong>',
          description: 'Strong importance, typically bold',
          example: '<p>This is <strong>very important</strong> text.</p>',
          use: 'Semantic emphasis, use instead of <b> for meaning'
        },
        {
          name: '<em>',
          syntax: '<em>Text</em>',
          description: 'Emphasized text, typically italic',
          example: '<p>This is <em>emphasized</em> text.</p>',
          use: 'Semantic emphasis, use instead of <i> for meaning'
        },
        {
          name: '<br>',
          syntax: '<br>',
          description: 'Line break (self-closing)',
          example: 'Line one<br>Line two',
          use: 'Force line break within text, use sparingly'
        },
        {
          name: '<span>',
          syntax: '<span>Text</span>',
          description: 'Inline container for styling text',
          example: '<p>Some <span class="highlight">highlighted</span> text.</p>',
          use: 'Group inline elements for styling, no semantic meaning'
        },
        {
          name: '<code>',
          syntax: '<code>Code</code>',
          description: 'Inline code snippet',
          example: '<p>Use <code>console.log()</code> for debugging.</p>',
          use: 'Display inline code with monospace font'
        },
        {
          name: '<pre>',
          syntax: '<pre>Formatted text</pre>',
          description: 'Preformatted text preserving whitespace',
          example: '<pre>\n  function() {\n    return true;\n  }\n</pre>',
          use: 'Code blocks, ASCII art, preserve formatting'
        }
      ]
    },
    {
      id: 'lists',
      title: 'Lists',
      icon: List,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: '<ul>',
          syntax: '<ul>...</ul>',
          description: 'Unordered (bulleted) list',
          example: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
          use: 'Lists without specific order or numbering'
        },
        {
          name: '<ol>',
          syntax: '<ol>...</ol>',
          description: 'Ordered (numbered) list',
          example: '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>',
          use: 'Sequential or ranked lists with numbers'
        },
        {
          name: '<li>',
          syntax: '<li>Item</li>',
          description: 'List item for ul or ol',
          example: '<li>List item content</li>',
          use: 'Individual items within lists, can be nested'
        },
        {
          name: '<dl>',
          syntax: '<dl>...</dl>',
          description: 'Description list',
          example: '<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>',
          use: 'Term-definition pairs, glossaries'
        },
        {
          name: '<dt>',
          syntax: '<dt>Term</dt>',
          description: 'Definition term',
          example: '<dt>HTML</dt>',
          use: 'Term in description list'
        },
        {
          name: '<dd>',
          syntax: '<dd>Definition</dd>',
          description: 'Definition description',
          example: '<dd>HyperText Markup Language</dd>',
          use: 'Description/definition of term'
        }
      ]
    },
    {
      id: 'links',
      title: 'Links & Media',
      icon: Link,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: '<a>',
          syntax: '<a href="url">Link text</a>',
          description: 'Hyperlink to another page or resource',
          example: '<a href="https://example.com">Visit Example</a>\n<a href="#section">Jump to section</a>',
          use: 'Navigation, external/internal links, use target="_blank" for new tab'
        },
        {
          name: '<img>',
          syntax: '<img src="url" alt="description">',
          description: 'Embeds an image',
          example: '<img src="photo.jpg" alt="Description" width="300">',
          use: 'Alt text required for accessibility, specify width/height'
        },
        {
          name: '<picture>',
          syntax: '<picture>...</picture>',
          description: 'Container for multiple image sources',
          example: '<picture>\n  <source srcset="large.jpg" media="(min-width: 800px)">\n  <img src="small.jpg" alt="Description">\n</picture>',
          use: 'Responsive images, different images for different screens'
        },
        {
          name: '<audio>',
          syntax: '<audio src="file.mp3" controls></audio>',
          description: 'Embeds audio content',
          example: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>',
          use: 'Audio playback, use controls attribute for player'
        },
        {
          name: '<video>',
          syntax: '<video src="file.mp4" controls></video>',
          description: 'Embeds video content',
          example: '<video width="640" controls>\n  <source src="video.mp4" type="video/mp4">\n</video>',
          use: 'Video playback, specify dimensions and controls'
        },
        {
          name: '<iframe>',
          syntax: '<iframe src="url"></iframe>',
          description: 'Embeds another HTML page',
          example: '<iframe src="https://example.com" width="600" height="400"></iframe>',
          use: 'Embed external content like maps, videos'
        }
      ]
    },
    {
      id: 'tables',
      title: 'Tables',
      icon: Table,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: '<table>',
          syntax: '<table>...</table>',
          description: 'Table container',
          example: '<table>\n  <tr>\n    <td>Cell</td>\n  </tr>\n</table>',
          use: 'Tabular data only, not for layout'
        },
        {
          name: '<thead>',
          syntax: '<thead>...</thead>',
          description: 'Table header section',
          example: '<thead>\n  <tr>\n    <th>Header</th>\n  </tr>\n</thead>',
          use: 'Groups header content, helps with accessibility'
        },
        {
          name: '<tbody>',
          syntax: '<tbody>...</tbody>',
          description: 'Table body section',
          example: '<tbody>\n  <tr>\n    <td>Data</td>\n  </tr>\n</tbody>',
          use: 'Groups body content, separates from header/footer'
        },
        {
          name: '<tr>',
          syntax: '<tr>...</tr>',
          description: 'Table row',
          example: '<tr>\n  <td>Cell 1</td>\n  <td>Cell 2</td>\n</tr>',
          use: 'Container for cells in a row'
        },
        {
          name: '<th>',
          syntax: '<th>Header</th>',
          description: 'Table header cell',
          example: '<th scope="col">Column Header</th>',
          use: 'Column or row headers, use scope attribute'
        },
        {
          name: '<td>',
          syntax: '<td>Data</td>',
          description: 'Table data cell',
          example: '<td>Cell content</td>',
          use: 'Regular table cells with data'
        }
      ]
    },
    {
      id: 'forms',
      title: 'Forms',
      icon: Box,
      color: 'from-teal-500 to-teal-600',
      items: [
        {
          name: '<input>',
          syntax: '<input type="text" name="field">',
          description: 'Input field for user data',
          example: '<input type="text" name="username" placeholder="Enter name">\n<input type="email" required>',
          use: 'Text, email, password, checkbox, radio, file, etc.'
        },
        {
          name: '<textarea>',
          syntax: '<textarea>...</textarea>',
          description: 'Multi-line text input',
          example: '<textarea rows="4" cols="50">Default text</textarea>',
          use: 'Long text input like comments or messages'
        },
        {
          name: '<button>',
          syntax: '<button>Text</button>',
          description: 'Clickable button',
          example: '<button type="submit">Submit</button>\n<button type="button">Click Me</button>',
          use: 'Forms, actions. Type: submit, button, or reset'
        },
        {
          name: '<select>',
          syntax: '<select>...</select>',
          description: 'Dropdown menu',
          example: '<select name="option">\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>',
          use: 'Dropdown lists for selecting options'
        },
        {
          name: '<option>',
          syntax: '<option value="...">Text</option>',
          description: 'Option in select dropdown',
          example: '<option value="us">United States</option>',
          use: 'Individual options within select element'
        },
        {
          name: '<label>',
          syntax: '<label for="id">Text</label>',
          description: 'Label for input element',
          example: '<label for="email">Email:</label>\n<input type="email" id="email">',
          use: 'Associate text with input, improves accessibility'
        },
        {
          name: '<fieldset>',
          syntax: '<fieldset>...</fieldset>',
          description: 'Groups related form elements',
          example: '<fieldset>\n  <legend>Personal Info</legend>\n  <!-- inputs -->\n</fieldset>',
          use: 'Group related inputs with optional legend'
        }
      ]
    },
    {
      id: 'semantic',
      title: 'Semantic HTML',
      icon: Layout,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: '<header>',
          syntax: '<header>...</header>',
          description: 'Introductory content or navigation',
          example: '<header>\n  <h1>Site Title</h1>\n  <nav>...</nav>\n</header>',
          use: 'Page or section header, can contain logo, nav'
        },
        {
          name: '<nav>',
          syntax: '<nav>...</nav>',
          description: 'Navigation links section',
          example: '<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>',
          use: 'Main navigation menus, table of contents'
        },
        {
          name: '<main>',
          syntax: '<main>...</main>',
          description: 'Main content of document',
          example: '<main>\n  <article>...</article>\n</main>',
          use: 'Primary content, only one per page'
        },
        {
          name: '<article>',
          syntax: '<article>...</article>',
          description: 'Self-contained, independent content',
          example: '<article>\n  <h2>Article Title</h2>\n  <p>Content...</p>\n</article>',
          use: 'Blog posts, news articles, forum posts'
        },
        {
          name: '<section>',
          syntax: '<section>...</section>',
          description: 'Thematic grouping of content',
          example: '<section>\n  <h2>Section Title</h2>\n  <p>Content...</p>\n</section>',
          use: 'Chapters, themed content groups'
        },
        {
          name: '<aside>',
          syntax: '<aside>...</aside>',
          description: 'Content tangentially related to main',
          example: '<aside>\n  <h3>Related Links</h3>\n  <!-- links -->\n</aside>',
          use: 'Sidebars, pull quotes, related content'
        },
        {
          name: '<footer>',
          syntax: '<footer>...</footer>',
          description: 'Footer for document or section',
          example: '<footer>\n  <p>&copy; 2024 Company</p>\n</footer>',
          use: 'Copyright, contact info, related links'
        },
        {
          name: '<div>',
          syntax: '<div>...</div>',
          description: 'Generic container (no semantic meaning)',
          example: '<div class="container">\n  <!-- content -->\n</div>',
          use: 'Styling/layout when no semantic element fits'
        }
      ]
    },
    {
      id: 'special',
      title: 'Special Elements',
      icon: Globe,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: '<script>',
          syntax: '<script src="file.js"></script>',
          description: 'Embeds or references JavaScript',
          example: '<script src="app.js"></script>\n<script>\n  console.log("Hello");\n</script>',
          use: 'External or inline JavaScript code'
        },
        {
          name: '<style>',
          syntax: '<style>CSS rules</style>',
          description: 'Inline CSS styles',
          example: '<style>\n  body { margin: 0; }\n</style>',
          use: 'Page-specific CSS, prefer external stylesheets'
        },
        {
          name: '<link>',
          syntax: '<link rel="stylesheet" href="style.css">',
          description: 'Links to external resources',
          example: '<link rel="stylesheet" href="styles.css">\n<link rel="icon" href="favicon.ico">',
          use: 'CSS files, favicons, fonts'
        },
        {
          name: '<svg>',
          syntax: '<svg>...</svg>',
          description: 'Scalable Vector Graphics',
          example: '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" />\n</svg>',
          use: 'Vector graphics, icons, illustrations'
        },
        {
          name: '<canvas>',
          syntax: '<canvas id="myCanvas"></canvas>',
          description: 'Graphics container for JavaScript drawing',
          example: '<canvas id="game" width="800" height="600"></canvas>',
          use: 'Dynamic graphics, games, visualizations'
        },
        {
          name: '<!-- -->',
          syntax: '<!-- Comment -->',
          description: 'HTML comment (not displayed)',
          example: '<!-- This is a comment -->\n<!-- TODO: Add content -->',
          use: 'Notes, documentation, temporarily hide code'
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
      <section className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <FileText size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HTML Reference
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              Complete guide to HTML elements, tags, attributes, and semantic markup for building web pages
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search HTML tags and elements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-2xl"
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
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} elements</p>
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
                        <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-orange-500 transition-colors">
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

                          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                            <p className="text-xs font-semibold text-orange-600 uppercase mb-1">Usage</p>
                            <p className="text-sm text-orange-700">{item.use}</p>
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
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Quick Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            HTML Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Layout className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Semantic HTML</h3>
              <p className="text-gray-600 text-sm">
                Use meaningful tags like header, nav, article instead of div for better accessibility and SEO.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Globe className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility First</h3>
              <p className="text-gray-600 text-sm">
                Always include alt text for images, use labels for inputs, and proper heading hierarchy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FileText className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Validate Your HTML</h3>
              <p className="text-gray-600 text-sm">
                Use W3C validator to check for errors and ensure standards compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}