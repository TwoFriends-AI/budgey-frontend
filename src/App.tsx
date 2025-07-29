import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Budgey.ai</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-text-secondary hover:text-primary-600 font-medium">Features</a>
              <a href="#pricing" className="text-text-secondary hover:text-primary-600 font-medium">Pricing</a>
              <a href="#about" className="text-text-secondary hover:text-primary-600 font-medium">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Sign In
              </button>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Smart Personal Finance
              <span className="text-primary-600 block">Insights</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Transform your financial data into actionable insights. Track spending, 
              optimize budgets, and achieve your financial goals with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Features that Power Your Finance
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to take control of your financial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Insights */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Smart Insights</h3>
              <p className="text-text-secondary">
                AI-powered analysis of your spending patterns to identify opportunities for savings and optimization.
              </p>
            </div>

            {/* Budget Tracking */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-expense/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-expense rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Budget Tracking</h3>
              <p className="text-text-secondary">
                Set and monitor budgets across categories with real-time alerts when you approach limits.
              </p>
            </div>

            {/* Investment Monitoring */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-investment/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-investment rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Investment Tracking</h3>
              <p className="text-text-secondary">
                Monitor your portfolio performance and get personalized investment recommendations.
              </p>
            </div>

            {/* Savings Goals */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-savings/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-savings rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Savings Goals</h3>
              <p className="text-text-secondary">
                Set financial goals and track progress with automated savings recommendations.
              </p>
            </div>

            {/* Income Analysis */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-income/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-income rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Income Analysis</h3>
              <p className="text-text-secondary">
                Understand your income streams and optimize your earning potential with detailed analytics.
              </p>
            </div>

            {/* Financial Reports */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-secondary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Smart Reports</h3>
              <p className="text-text-secondary">
                Generate comprehensive financial reports with actionable insights and trends analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who have already improved their financial health with Budgey.ai
          </p>
          <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-text-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary-400 mb-4">Budgey.ai</h3>
              <p className="text-text-secondary">
                Smart personal finance insights powered by AI.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Product</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-primary-400">Features</a></li>
                <li><a href="#" className="hover:text-primary-400">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-400">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-primary-400">About</a></li>
                <li><a href="#" className="hover:text-primary-400">Blog</a></li>
                <li><a href="#" className="hover:text-primary-400">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Support</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-400">Contact</a></li>
                <li><a href="#" className="hover:text-primary-400">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; 2025 Budgey.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
