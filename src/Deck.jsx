import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CorexaLogo from '/Corexa_logo.png'

function Deck() {
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
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</Link>
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
                Corexa
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pitch Deck</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Secure, on-premises AI solutions for enterprises. Currently raising pre-seed funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#pitch-deck" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  View Pitch Deck
                </a>
                <Link 
                  to="/estimate" 
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck Section */}
      <section id="pitch-deck" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Investment
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us in revolutionizing enterprise AI with secure, on-premises solutions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pre-Seed Funding Round</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We're seeking strategic investors to help us scale our secure AI infrastructure solutions 
                and expand our enterprise customer base.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">£500K</div>
                <p className="text-gray-600">Target Raise</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">12-18</div>
                <p className="text-gray-600">Months Runway</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">20%</div>
                <p className="text-gray-600">Equity Available</p>
              </div>
            </div>
          </div>

          {/* Pitch Deck Embed */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Corexa Pitch Deck</h3>
              <p className="text-blue-100">Interactive presentation - click to view full screen</p>
            </div>
            <div className="p-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/GitFarhanS/aib-App/refs/heads/main/src/assets/deck/Corexa%20Pitch%20Deck.pptx"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0" 
                  allowFullScreen
                  title="Corexa Pitch Deck"
                />
              </div>
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
              Interested in
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Investing?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how you can be part of Corexa's journey in transforming enterprise AI
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
                    className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company/Investment Firm"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your investment interests and how we can work together..."
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Contact Investment Team
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deck 