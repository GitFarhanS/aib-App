import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CorexaLogo from '/Corexa_logo.png'

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 border border-white/20 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                              <img src={CorexaLogo} alt="Corexa Logo" className="w-10 h-10 object-contain" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Corexa</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-blue-600 font-semibold">About</Link>
              <Link to="/estimate" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Get Estimate</Link>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                About
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Corexa</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of enterprise AI with secure, on-premises solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Our
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe that every enterprise deserves access to powerful AI capabilities without compromising on security, privacy, or control. Our mission is to democratize enterprise AI by making it accessible, secure, and deployable on your own infrastructure.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by a team of AI researchers and enterprise security experts, Corexa bridges the gap between cutting-edge AI technology and enterprise-grade security requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/estimate" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                  Get Your Estimate
                </Link>
                <a href="#contact" className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Why We're Different</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Security First</h4>
                    <p className="text-blue-100">Built from the ground up with enterprise security in mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Custom Solutions</h4>
                    <p className="text-blue-100">Tailored AI models for your specific business needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Full Control</h4>
                    <p className="text-blue-100">Deploy and manage everything on your infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet the
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solo founder building Corexa — currently raising a pre-seed round
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                F
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Founder</h3>
              <p className="text-blue-600 font-semibold text-center mb-4">Farhan Shaikh</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Building secure, on-premises AI systems for enterprises. Open to conversations with pre-seed investors and strategic partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">50+</div>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-gray-600">Data Privacy</p>
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
                    className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your AI needs and how we can help transform your business..."
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg resize-none"
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

export default About 