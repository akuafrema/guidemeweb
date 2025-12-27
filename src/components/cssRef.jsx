import { useState } from 'react';
import { Search, Palette, Layout, Type, Box, Zap, Layers, ChevronDown, ChevronRight, Smartphone } from 'lucide-react';

export default function CSSReference() {
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
      id: 'selectors',
      title: 'Selectors',
      icon: Search,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Element Selector',
          syntax: 'element { }',
          description: 'Selects all elements of a given type',
          example: 'p { color: blue; }',
          use: 'Target all paragraphs, divs, or any HTML element'
        },
        {
          name: 'Class Selector',
          syntax: '.classname { }',
          description: 'Selects elements with a specific class attribute',
          example: '.button { padding: 10px; }',
          use: 'Most common selector for styling reusable components'
        },
        {
          name: 'ID Selector',
          syntax: '#idname { }',
          description: 'Selects a unique element with specific ID',
          example: '#header { height: 80px; }',
          use: 'Target unique elements, high specificity'
        },
        {
          name: 'Descendant Selector',
          syntax: 'parent child { }',
          description: 'Selects elements that are descendants of another element',
          example: 'div p { margin: 10px; }',
          use: 'Style nested elements without adding classes'
        },
        {
          name: 'Child Selector',
          syntax: 'parent > child { }',
          description: 'Selects direct children only',
          example: 'ul > li { list-style: none; }',
          use: 'Target immediate children, not all descendants'
        },
        {
          name: 'Attribute Selector',
          syntax: '[attribute] { }',
          description: 'Selects elements based on attribute or value',
          example: '[type="text"] { border: 1px solid; }',
          use: 'Style inputs or elements with specific attributes'
        },
        {
          name: 'Pseudo-class',
          syntax: 'selector:pseudo-class { }',
          description: 'Selects elements in a specific state',
          example: 'a:hover { color: red; }',
          use: 'Interactive states like :hover, :focus, :active, :nth-child()'
        }
      ]
    },
    {
      id: 'colors',
      title: 'Colors & Backgrounds',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'color',
          syntax: 'color: value;',
          description: 'Sets the text color',
          example: 'color: #ff0000; /* or rgb(255,0,0) or red */',
          use: 'Hex, RGB, RGBA, HSL, HSLA, named colors'
        },
        {
          name: 'background-color',
          syntax: 'background-color: value;',
          description: 'Sets the background color of an element',
          example: 'background-color: rgba(0, 0, 0, 0.5);',
          use: 'Solid colors with optional transparency'
        },
        {
          name: 'background-image',
          syntax: 'background-image: url();',
          description: 'Sets one or more background images',
          example: 'background-image: url("image.jpg");',
          use: 'Images, gradients as backgrounds'
        },
        {
          name: 'linear-gradient',
          syntax: 'linear-gradient(direction, color-stops)',
          description: 'Creates a linear color gradient',
          example: 'background: linear-gradient(to right, blue, red);',
          use: 'Smooth color transitions in any direction'
        },
        {
          name: 'radial-gradient',
          syntax: 'radial-gradient(shape, color-stops)',
          description: 'Creates a radial color gradient from center',
          example: 'background: radial-gradient(circle, blue, red);',
          use: 'Circular or elliptical gradients'
        },
        {
          name: 'opacity',
          syntax: 'opacity: value;',
          description: 'Sets transparency level (0-1)',
          example: 'opacity: 0.7;',
          use: 'Make entire element transparent including children'
        }
      ]
    },
    {
      id: 'typography',
      title: 'Typography',
      icon: Type,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'font-family',
          syntax: 'font-family: family-names;',
          description: 'Specifies font for text',
          example: 'font-family: "Arial", sans-serif;',
          use: 'Define font stack with fallbacks'
        },
        {
          name: 'font-size',
          syntax: 'font-size: value;',
          description: 'Sets size of text',
          example: 'font-size: 16px; /* or 1rem, 1.5em, 100% */',
          use: 'px, em, rem, %, vw for responsive sizing'
        },
        {
          name: 'font-weight',
          syntax: 'font-weight: value;',
          description: 'Sets thickness of text',
          example: 'font-weight: bold; /* or 400, 700 */',
          use: 'normal (400), bold (700), or numeric 100-900'
        },
        {
          name: 'line-height',
          syntax: 'line-height: value;',
          description: 'Sets spacing between lines of text',
          example: 'line-height: 1.5;',
          use: 'Improves readability, usually 1.4-1.8'
        },
        {
          name: 'text-align',
          syntax: 'text-align: value;',
          description: 'Aligns text horizontally',
          example: 'text-align: center;',
          use: 'left, right, center, justify'
        },
        {
          name: 'text-decoration',
          syntax: 'text-decoration: value;',
          description: 'Adds line decorations to text',
          example: 'text-decoration: underline;',
          use: 'underline, overline, line-through, none'
        },
        {
          name: 'text-transform',
          syntax: 'text-transform: value;',
          description: 'Controls text capitalization',
          example: 'text-transform: uppercase;',
          use: 'uppercase, lowercase, capitalize'
        }
      ]
    },
    {
      id: 'box-model',
      title: 'Box Model',
      icon: Box,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: 'width / height',
          syntax: 'width: value; height: value;',
          description: 'Sets dimensions of element',
          example: 'width: 100%; height: 200px;',
          use: 'px, %, vw, vh, auto for sizing'
        },
        {
          name: 'margin',
          syntax: 'margin: top right bottom left;',
          description: 'Space outside the border',
          example: 'margin: 20px; /* or margin: 10px 20px; */',
          use: 'Creates space between elements'
        },
        {
          name: 'padding',
          syntax: 'padding: top right bottom left;',
          description: 'Space inside the border',
          example: 'padding: 15px;',
          use: 'Creates space between content and border'
        },
        {
          name: 'border',
          syntax: 'border: width style color;',
          description: 'Sets border around element',
          example: 'border: 2px solid #333;',
          use: 'solid, dashed, dotted borders with color'
        },
        {
          name: 'border-radius',
          syntax: 'border-radius: value;',
          description: 'Rounds corners of element',
          example: 'border-radius: 10px; /* or 50% for circle */',
          use: 'Create rounded corners or circles'
        },
        {
          name: 'box-shadow',
          syntax: 'box-shadow: x y blur spread color;',
          description: 'Adds shadow effect around element',
          example: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1);',
          use: 'Depth and elevation effects'
        },
        {
          name: 'box-sizing',
          syntax: 'box-sizing: value;',
          description: 'Defines how width/height calculated',
          example: 'box-sizing: border-box;',
          use: 'border-box includes padding and border in dimensions'
        }
      ]
    },
    {
      id: 'flexbox',
      title: 'Flexbox',
      icon: Layout,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'display: flex',
          syntax: 'display: flex;',
          description: 'Enables flexbox layout on container',
          example: 'display: flex;',
          use: 'Turn element into flex container'
        },
        {
          name: 'flex-direction',
          syntax: 'flex-direction: value;',
          description: 'Sets main axis direction',
          example: 'flex-direction: row; /* or column */',
          use: 'row, row-reverse, column, column-reverse'
        },
        {
          name: 'justify-content',
          syntax: 'justify-content: value;',
          description: 'Aligns items along main axis',
          example: 'justify-content: space-between;',
          use: 'flex-start, center, space-between, space-around'
        },
        {
          name: 'align-items',
          syntax: 'align-items: value;',
          description: 'Aligns items along cross axis',
          example: 'align-items: center;',
          use: 'stretch, flex-start, center, flex-end'
        },
        {
          name: 'flex-wrap',
          syntax: 'flex-wrap: value;',
          description: 'Controls wrapping of flex items',
          example: 'flex-wrap: wrap;',
          use: 'nowrap, wrap, wrap-reverse'
        },
        {
          name: 'gap',
          syntax: 'gap: value;',
          description: 'Sets spacing between flex items',
          example: 'gap: 20px;',
          use: 'Modern way to add spacing in flex/grid'
        },
        {
          name: 'flex',
          syntax: 'flex: grow shrink basis;',
          description: 'Shorthand for flex-grow, flex-shrink, flex-basis',
          example: 'flex: 1; /* grow and shrink equally */',
          use: 'Control how items grow and shrink'
        }
      ]
    },
    {
      id: 'grid',
      title: 'CSS Grid',
      icon: Layers,
      color: 'from-teal-500 to-teal-600',
      items: [
        {
          name: 'display: grid',
          syntax: 'display: grid;',
          description: 'Enables grid layout on container',
          example: 'display: grid;',
          use: 'Turn element into grid container'
        },
        {
          name: 'grid-template-columns',
          syntax: 'grid-template-columns: values;',
          description: 'Defines column structure',
          example: 'grid-template-columns: 1fr 2fr 1fr;',
          use: 'Create column layout with fr units, px, %, auto'
        },
        {
          name: 'grid-template-rows',
          syntax: 'grid-template-rows: values;',
          description: 'Defines row structure',
          example: 'grid-template-rows: 100px auto 100px;',
          use: 'Set heights for grid rows'
        },
        {
          name: 'grid-gap / gap',
          syntax: 'gap: row-gap column-gap;',
          description: 'Sets spacing between grid items',
          example: 'gap: 20px; /* or gap: 20px 10px; */',
          use: 'Space between rows and columns'
        },
        {
          name: 'grid-column',
          syntax: 'grid-column: start / end;',
          description: 'Controls column span of item',
          example: 'grid-column: 1 / 3; /* or span 2 */',
          use: 'Make items span multiple columns'
        },
        {
          name: 'grid-row',
          syntax: 'grid-row: start / end;',
          description: 'Controls row span of item',
          example: 'grid-row: 1 / 3;',
          use: 'Make items span multiple rows'
        },
        {
          name: 'grid-template-areas',
          syntax: 'grid-template-areas: "names";',
          description: 'Named grid areas for layout',
          example: 'grid-template-areas: "header header" "sidebar main";',
          use: 'Create semantic grid layouts'
        }
      ]
    },
    {
      id: 'positioning',
      title: 'Positioning',
      icon: Box,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'position: static',
          syntax: 'position: static;',
          description: 'Default positioning, follows normal flow',
          example: 'position: static;',
          use: 'Default value, not positioned'
        },
        {
          name: 'position: relative',
          syntax: 'position: relative;',
          description: 'Positioned relative to normal position',
          example: 'position: relative; top: 10px;',
          use: 'Offset from normal position, creates positioning context'
        },
        {
          name: 'position: absolute',
          syntax: 'position: absolute;',
          description: 'Positioned relative to nearest positioned ancestor',
          example: 'position: absolute; top: 0; right: 0;',
          use: 'Remove from flow, position relative to parent'
        },
        {
          name: 'position: fixed',
          syntax: 'position: fixed;',
          description: 'Positioned relative to viewport',
          example: 'position: fixed; bottom: 20px;',
          use: 'Stay in place when scrolling (headers, modals)'
        },
        {
          name: 'position: sticky',
          syntax: 'position: sticky;',
          description: 'Toggles between relative and fixed',
          example: 'position: sticky; top: 0;',
          use: 'Stick to viewport when scrolling past threshold'
        },
        {
          name: 'z-index',
          syntax: 'z-index: value;',
          description: 'Controls stacking order of positioned elements',
          example: 'z-index: 10;',
          use: 'Higher values appear on top'
        }
      ]
    },
    {
      id: 'animations',
      title: 'Animations & Transitions',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        {
          name: 'transition',
          syntax: 'transition: property duration timing-function;',
          description: 'Smooth change between states',
          example: 'transition: all 0.3s ease;',
          use: 'Animate property changes on hover, focus, etc.'
        },
        {
          name: 'transform',
          syntax: 'transform: function();',
          description: 'Apply 2D or 3D transformations',
          example: 'transform: rotate(45deg) scale(1.2);',
          use: 'rotate, scale, translate, skew elements'
        },
        {
          name: '@keyframes',
          syntax: '@keyframes name { }',
          description: 'Defines animation sequence',
          example: '@keyframes slide { from { left: 0; } to { left: 100%; } }',
          use: 'Create complex animations with multiple steps'
        },
        {
          name: 'animation',
          syntax: 'animation: name duration timing-function;',
          description: 'Applies keyframe animation to element',
          example: 'animation: slide 2s ease-in-out infinite;',
          use: 'Run keyframe animations'
        },
        {
          name: 'animation-delay',
          syntax: 'animation-delay: time;',
          description: 'Delays animation start',
          example: 'animation-delay: 0.5s;',
          use: 'Wait before starting animation'
        },
        {
          name: 'animation-iteration-count',
          syntax: 'animation-iteration-count: value;',
          description: 'Number of times animation repeats',
          example: 'animation-iteration-count: infinite;',
          use: 'Number or infinite for continuous animation'
        }
      ]
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      icon: Smartphone,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: '@media',
          syntax: '@media (condition) { }',
          description: 'Apply styles based on device characteristics',
          example: '@media (max-width: 768px) { }',
          use: 'Create responsive breakpoints'
        },
        {
          name: 'max-width',
          syntax: 'max-width: value;',
          description: 'Maximum width constraint',
          example: 'max-width: 1200px;',
          use: 'Prevent elements from growing too large'
        },
        {
          name: 'min-width',
          syntax: 'min-width: value;',
          description: 'Minimum width constraint',
          example: 'min-width: 320px;',
          use: 'Ensure elements don\'t shrink too small'
        },
        {
          name: 'Viewport Units',
          syntax: 'vw, vh, vmin, vmax',
          description: 'Units relative to viewport size',
          example: 'width: 100vw; height: 100vh;',
          use: '1vw = 1% of viewport width, 1vh = 1% of height'
        },
        {
          name: 'clamp()',
          syntax: 'clamp(min, preferred, max)',
          description: 'Responsive sizing between min and max',
          example: 'font-size: clamp(1rem, 2vw, 3rem);',
          use: 'Fluid typography and sizing'
        },
        {
          name: 'Container Queries',
          syntax: '@container (condition) { }',
          description: 'Style based on container size (modern)',
          example: '@container (min-width: 400px) { }',
          use: 'Component-based responsive design'
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
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Palette size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              CSS Reference
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-6">
              Complete guide to CSS properties, selectors, layouts, and modern styling techniques
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search properties, selectors, or techniques..."
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
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} properties</p>
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

      {/* Quick Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            CSS Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Layout className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Modern Layouts</h3>
              <p className="text-gray-600 text-sm">
                Flexbox and Grid for responsive layouts. Avoid floats and tables for layout.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Smartphone className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600 text-sm">
                Design for mobile first, then add breakpoints for larger screens.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Box className="text-teal-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use box-sizing</h3>
              <p className="text-gray-600 text-sm">
                Set box-sizing: border-box globally for predictable sizing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}