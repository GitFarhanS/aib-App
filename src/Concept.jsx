import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CorexaLogo from 'Corexa_logo.png'

function Concept() {
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
              <Link to="/deck" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pitch Deck</Link>
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">System Architecture</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                On-Premise AI Infrastructure & Software Interface Wireframes
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#hardware" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  View Hardware
                </a>
                <a 
                  href="#software" 
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  View Software
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components Section */}
      <section id="hardware" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Hardware
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Components</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade AI processing units designed for on-premises deployment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Main AI Processing Unit */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Corexa AI Processing Unit (2U Rackmount)
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">GPU Array</div>
                  <div className="text-green-100">4x NVIDIA RTX 4090 / A6000 • 96GB VRAM Total</div>
                </div>
                
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">CPU</div>
                  <div className="text-red-100">Intel Xeon W-2295 18-Core • 3.0GHz Base, 4.8GHz Boost</div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">System Memory</div>
                  <div className="text-yellow-100">128GB DDR4-3200 ECC • 8x 16GB Modules</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">Storage</div>
                  <div className="text-purple-100">2TB NVMe SSD (OS) • 8TB NVMe SSD (Models/Data)</div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">Power Supply</div>
                  <div className="text-pink-100">2000W 80+ Titanium • Redundant PSU Ready</div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                  <div className="font-bold text-lg mb-2">Cooling System</div>
                  <div className="text-blue-100">Liquid Cooling + 6x 120mm Fans • Temperature Monitoring</div>
                </div>
              </div>
            </div>
            
            {/* Network Topology */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Network Integration</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl text-center">
                  <div className="font-bold text-lg">Customer Network</div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-600"></div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
                  <div className="font-bold text-lg">Corexa AI Unit</div>
                  <div className="text-green-100 text-sm">192.168.1.100</div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-600"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 border-2 border-gray-400 p-3 rounded-lg text-center font-bold text-gray-700">
                    Workstation 1
                  </div>
                  <div className="bg-gray-200 border-2 border-gray-400 p-3 rounded-lg text-center font-bold text-gray-700">
                    Workstation 2
                  </div>
                  <div className="bg-gray-200 border-2 border-gray-400 p-3 rounded-lg text-center font-bold text-gray-700">
                    Mobile Devices
                  </div>
                  <div className="bg-gray-200 border-2 border-gray-400 p-3 rounded-lg text-center font-bold text-gray-700">
                    Legacy Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Interface Section */}
      <section id="software" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Software
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Interface</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intuitive control panel for managing AI models and system performance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Main Dashboard */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="font-bold text-lg">Corexa Control Panel</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4">
                <div className="flex space-x-4">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Dashboard</span>
                  <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium">Models</span>
                  <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium">Training</span>
                  <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium">Analytics</span>
                  <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium">Settings</span>
                </div>
              </div>
              
              <div className="p-8 grid grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-blue-400 font-bold text-lg mb-4">System Performance</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>GPU Utilization</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>CPU Usage</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Memory Usage</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-blue-400 font-bold text-lg mb-4">Active Models</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Financial Analysis v2.1</span>
                      <span className="text-green-400 text-xs">Running</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Document Processing</span>
                      <span className="text-green-400 text-xs">Running</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Customer Support Bot</span>
                      <span className="text-yellow-400 text-xs">Training</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-blue-400 font-bold text-lg mb-4">Recent Activity</h4>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div>• Model inference: 1,247 requests today</div>
                    <div>• Training completed: Legal docs model</div>
                    <div>• System health check: All systems OK</div>
                    <div>• Data backup: Completed 2 hours ago</div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-blue-400 font-bold text-lg mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Deploy New Model
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Start Training Job
                    </button>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Export Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Model Management Interface */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="font-bold text-lg">Model Management</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-blue-600 font-bold text-xl">Available Models</h4>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    + Add Model
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-blue-600 font-bold mb-2">Financial Document Analysis</h5>
                        <div className="text-sm text-gray-600">
                          Based on Llama 3.1 • Trained on 50k documents • 87% accuracy
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">Active</span>
                        <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-50 transition-colors">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-blue-600 font-bold mb-2">Customer Support Chatbot</h5>
                        <div className="text-sm text-gray-600">
                          Based on Mistral 7B • Custom fine-tuned • 92% satisfaction
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">Training</span>
                        <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-50 transition-colors">
                          Monitor
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-blue-600 font-bold mb-2">Legal Contract Review</h5>
                        <div className="text-sm text-gray-600">
                          Based on GPT-4 Alternative • Compliance ready • 95% accuracy
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Stopped</span>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs transition-colors">
                          Start
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl text-center">
                  <div className="text-blue-600 text-lg mb-2">📁 Drop training data here</div>
                  <div className="text-sm text-gray-600">
                    Upload CSV, JSON, or TXT files to start training a new model
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
              Ready to Deploy
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Corexa?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Corexa's on-premises AI infrastructure can transform your enterprise
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
                  placeholder="Tell us about your AI infrastructure needs and how Corexa can help..."
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white bg-white/10 text-white placeholder-blue-200 transition-all duration-200 text-lg resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Concept