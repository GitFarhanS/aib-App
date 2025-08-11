import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Estimate() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    companySize: '',
    useCase: '',
    dataVolume: '',
    deploymentType: '',
    supportLevel: '',
    timeline: ''
  })
  const [estimatedCost, setEstimatedCost] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateEstimate = () => {
    let baseCost = 0
    let multiplier = 1

    // Base cost by company size
    switch (formData.companySize) {
      case 'startup':
        baseCost = 5000
        break
      case 'small':
        baseCost = 50000
        break
      case 'medium':
        baseCost = 100000
        break
      case 'large':
        baseCost = 250000
        break
      case 'enterprise':
        baseCost = 100000
        break
      default:
        baseCost = 50000
    }

    // Use case multiplier
    switch (formData.useCase) {
      case 'nlp':
        multiplier *= 1.2
        break
      case 'computer-vision':
        multiplier *= 1.3
        break
      case 'predictive-analytics':
        multiplier *= 1.1
        break
      case 'recommendation':
        multiplier *= 1.0
        break
      case 'custom':
        multiplier *= 1.5
        break
    }

    // Data volume multiplier
    switch (formData.dataVolume) {
      case 'small':
        multiplier *= 0.8
        break
      case 'medium':
        multiplier *= 1.0
        break
      case 'large':
        multiplier *= 1.3
        break
      case 'massive':
        multiplier *= 1.8
        break
    }

    // Deployment type multiplier
    switch (formData.deploymentType) {
      case 'cloud':
        multiplier *= 0.9
        break
      case 'hybrid':
        multiplier *= 1.1
        break
      case 'on-premises':
        multiplier *= 1.2
        break
    }

    // Support level multiplier
    switch (formData.supportLevel) {
      case 'basic':
        multiplier *= 1.0
        break
      case 'standard':
        multiplier *= 1.2
        break
      case 'premium':
        multiplier *= 1.5
        break
      case 'enterprise':
        multiplier *= 2.0
        break
    }

    // Timeline multiplier
    switch (formData.timeline) {
      case 'urgent':
        multiplier *= 1.4
        break
      case 'standard':
        multiplier *= 1.0
        break
      case 'flexible':
        multiplier *= 0.9
        break
    }

    const totalCost = Math.round(baseCost * multiplier)
    setEstimatedCost(totalCost)
  }

  const isFormComplete = Object.values(formData).every(value => value !== '')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 border border-white/20 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Corexa</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</Link>
              <Link to="/estimate" className="text-blue-600 font-semibold">Get Estimate</Link>
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
                Get Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Estimate</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Get a personalised cost estimate for your enterprise AI solution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Project
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Details</span>
              </h2>
              
              <form className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="small">Small Business (51-200 employees)</option>
                    <option value="medium">Medium Business (201-1000 employees)</option>
                    <option value="large">Large Business (1001-5000 employees)</option>
                    <option value="enterprise">Enterprise (5000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Primary Use Case</label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select use case</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="predictive-analytics">Predictive Analytics</option>
                    <option value="recommendation">Recommendation Systems</option>
                    <option value="custom">Custom AI Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Data Volume</label>
                  <select
                    name="dataVolume"
                    value={formData.dataVolume}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select data volume</option>
                    <option value="small">Small (&lt; 1TB)</option>
                    <option value="medium">Medium (1-10TB)</option>
                    <option value="large">Large (10-100TB)</option>
                    <option value="massive">Massive (&gt; 100TB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Deployment Type</label>
                  <select
                    name="deploymentType"
                    value={formData.deploymentType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select deployment type</option>
                    <option value="cloud">Cloud-based</option>
                    <option value="hybrid">Hybrid (Cloud + On-premises)</option>
                    <option value="on-premises">On-premises</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Support Level</label>
                  <select
                    name="supportLevel"
                    value={formData.supportLevel}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select support level</option>
                    <option value="basic">Basic Support</option>
                    <option value="standard">Standard Support</option>
                    <option value="premium">Premium Support</option>
                    <option value="enterprise">Enterprise Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (3-6 months)</option>
                    <option value="standard">Standard (6-12 months)</option>
                    <option value="flexible">Flexible (12+ months)</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={calculateEstimate}
                  disabled={!isFormComplete}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                    isFormComplete
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Calculate Estimate
                </button>
              </form>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Your
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Estimate</span>
              </h2>
              
              {estimatedCost ? (
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold mb-4">£{estimatedCost.toLocaleString()}</div>
                    <p className="text-xl text-blue-100">Estimated Total Cost</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-xl p-6">
                      <h3 className="font-bold text-lg mb-4">What's Included:</h3>
                      <ul className="space-y-3 text-blue-100">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>Custom AI model development</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>Infrastructure setup & deployment</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>Training & documentation</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>Ongoing support & maintenance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-blue-100 mb-4">Ready to get started?</p>
                      <a
                        href="#contact"
                        className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                      >
                        Contact Sales Team
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Estimate</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form to receive a personalised cost estimate for your AI solution. 
                    Our estimates include development, deployment, and ongoing support.
                  </p>
                </div>
              )}

              {/* Pricing Tiers */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Tiers</h3>
                <div className="space-y-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Starter Package</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">£5K - £50K</p>
                    <p className="text-gray-600">Perfect for startups and small businesses</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Professional Package</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">£50K - £200K</p>
                    <p className="text-gray-600">Ideal for growing businesses</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Enterprise Package</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">£100K+</p>
                    <p className="text-gray-600">For large enterprises with complex needs</p>
                  </div>
                </div>
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
              Need a More
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Detailed Quote?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our sales team will provide you with a comprehensive proposal tailored to your specific requirements
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
                  placeholder="Tell us about your AI project requirements..."
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Request Detailed Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Estimate 