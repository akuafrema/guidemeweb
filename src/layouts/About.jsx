function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Learn to code with clarity and confidence
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          CodeHub is a free learning platform that makes programming accessible to everyone through clear tutorials, practical examples, and step-by-step guidance.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe that learning to code should not feel overwhelming. CodeHub breaks down complex programming concepts into digestible lessons that anyone can understand, regardless of their background.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are taking your first steps in programming or building on existing skills, our tutorials are designed to meet you where you are and help you grow at your own pace.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Beginner-Friendly</h3>
            <p className="text-gray-600 text-sm">Clear explanations with no prior experience required</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Practical Examples</h3>
            <p className="text-gray-600 text-sm">Learn by building real projects and solving problems</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Always Free</h3>
            <p className="text-gray-600 text-sm">Quality education accessible to everyone, no cost</p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You will Learn</h2>
          <p className="text-gray-700 mb-4">
            CodeHub covers essential programming topics including HTML, CSS, JavaScript, Python, and more. Each tutorial is structured to build your understanding progressively, from fundamentals to practical applications.
          </p>
          <p className="text-gray-600 text-sm italic">
            Start exploring today and discover how enjoyable learning to code can be.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;