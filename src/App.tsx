import { useState } from 'react'
import { AuthPage } from './components/auth'
import Dashboard from './pages/Dashboard'
import { ThemeToggle } from './components/ui'

type AppState = 'landing' | 'auth' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<AppState>('landing');

  const handleAuthSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleSignOut = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'auth') {
    return <AuthPage onLoginSuccess={handleAuthSuccess} onRegisterSuccess={handleAuthSuccess} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-background-primary dark:bg-dark-primary transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-dark-secondary shadow-sm border-b border-border dark:border-dark-border transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Budgey.ai</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">Features</a>
              <a href="#pricing" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">Pricing</a>
              <a href="#about" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => setCurrentPage('auth')}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
              >
                Sign In
              </button>
              <button 
                onClick={() => setCurrentPage('auth')}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white dark:from-dark-secondary dark:to-dark-primary py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-dark-text-primary mb-6 transition-colors duration-200">
              Smart Personal Finance
              <span className="text-primary-600 dark:text-primary-400 block">Insights</span>
            </h1>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto transition-colors duration-200">
              Transform your financial data into actionable insights. Track spending, 
              optimize budgets, and achieve your financial goals with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('auth')}
                className="btn-primary text-lg px-8 py-4"
              >
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
      <section id="features" className="py-20 bg-background-secondary dark:bg-dark-primary transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-200">
              Features that Power Your Finance
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto transition-colors duration-200">
              Everything you need to take control of your financial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Insights */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Smart Insights</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                AI-powered analysis of your spending patterns to identify opportunities for savings and optimization.
              </p>
            </div>

            {/* Budget Tracking */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-expense/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-expense rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Budget Tracking</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                Set and monitor budgets across categories with real-time alerts when you approach limits.
              </p>
            </div>

            {/* Investment Monitoring */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-investment/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-investment rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Investment Tracking</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                Monitor your portfolio performance and get personalized investment recommendations.
              </p>
            </div>

            {/* Savings Goals */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-savings/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-savings rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Savings Goals</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                Set financial goals and track progress with automated savings recommendations.
              </p>
            </div>

            {/* Income Analysis */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-income/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-income rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Income Analysis</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                Understand your income streams and optimize your earning potential with detailed analytics.
              </p>
            </div>

            {/* Financial Reports */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-secondary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-3 transition-colors duration-200">Smart Reports</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
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
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 transition-colors duration-200">
            Join thousands of users who have already improved their financial health with Budgey.ai
          </p>
          <button 
            onClick={() => setCurrentPage('auth')}
            className="bg-white dark:bg-gray-100 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-200 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary dark:bg-dark-primary text-text-dark dark:text-dark-text-primary py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary-400 mb-4">Budgey.ai</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                Smart personal finance insights powered by AI.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark dark:text-dark-text-primary mb-4 transition-colors duration-200">Product</h4>
              <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                <li><a href="#" className="hover:text-primary-400">Features</a></li>
                <li><a href="#" className="hover:text-primary-400">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-400">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark dark:text-dark-text-primary mb-4 transition-colors duration-200">Company</h4>
              <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                <li><a href="#" className="hover:text-primary-400">About</a></li>
                <li><a href="#" className="hover:text-primary-400">Blog</a></li>
                <li><a href="#" className="hover:text-primary-400">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-dark dark:text-dark-text-primary mb-4 transition-colors duration-200">Support</h4>
              <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
                <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-400">Contact</a></li>
                <li><a href="#" className="hover:text-primary-400">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-700 dark:border-dark-border mt-8 pt-8 text-center text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">
            <p>&copy; 2025 Budgey.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
