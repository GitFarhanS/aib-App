import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import locked from './assets/locked.png';
import shield from './assets/shield.png';
import wrench from './assets/wrench.png';
import flash from './assets/flash.png';
import CorexaLogo from './assets/Corexa_logo.png';
import About from './About'
import Estimate from './Estimate'

function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gray-50">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src={CorexaLogo} alt="Corexa Logo" className="w-10 h-10 rounded-xl object-cover" />
                <h1 className="text-2xl font-bold gradient-text">Corexa</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-blue-600 font-semibold">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</Link>
              <Link to="/estimate" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Get Estimate</Link>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Corexa
                <br />
                <span className="gradient-text">AI Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Deploy custom AI models on-premises with enterprise-grade security, 
                full data privacy, and complete control over your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary text-lg px-10 py-5 group">
                  <span className="flex items-center space-x-2">
                    <span>Request Demo</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </button>
                <button className="btn-secondary text-lg px-10 py-5">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="gradient-text"> Corexa?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built for enterprises that demand security, privacy, and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <img src={locked} alt="Locked" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                On-Premises Deployment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep your data within your infrastructure. No cloud dependencies, 
                complete control over your AI models and data.
              </p>
            </div>
            
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <img src={wrench} alt="Wrench" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Model Training
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Train AI models on your proprietary data. Fine-tune models for 
                your specific use cases and business requirements.
              </p>
            </div>
            
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <img src={shield} alt="Shield" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Data Privacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Zero data leakage. Your sensitive information never leaves your 
                network, ensuring compliance with strict regulations.
              </p>
            </div>
            
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <img src={flash} alt="Flash" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for high-throughput, low-latency inference. Scale from 
                small deployments to enterprise-wide AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How It
              <span className="gradient-text"> Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple 3-step process to deploy your AI solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Assessment & Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team analyzes your requirements, data infrastructure, and 
                business objectives to design the optimal AI solution.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We develop and train custom AI models on your data, ensuring 
                they meet your specific business needs and performance requirements.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Deployment & Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless deployment on your infrastructure with ongoing support, 
                monitoring, and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              AI Models We
              <span className="gradient-text"> Can Run</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deploy and run state-of-the-art AI models on your infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-blue-600">🤖</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3">Large Language Models</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                GPT, LLaMA, Claude, and custom fine-tuned models for text generation, 
                summarization, and conversational AI applications.
              </p>
            </div>
            
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-blue-600">👁️</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3">Computer Vision Models</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                YOLO, ResNet, Vision Transformers for image classification, object 
                detection, and computer vision tasks.
              </p>
            </div>
            
            <div className="card group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-blue-600">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3">Predictive Analytics</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Time series forecasting, regression models, and ML algorithms for 
                business intelligence and predictive insights.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Model Development</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We can also develop and deploy custom AI models tailored to your specific 
                business requirements, trained on your proprietary data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Started?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Corexa can transform your enterprise with secure, on-premises AI
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your AI needs and how we can help transform your business..."
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
    </Router>
  )
}

export default App 