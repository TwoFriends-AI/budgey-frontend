import React from 'react';
import { ThemeToggle } from '../components/ui';

interface DashboardProps {
  onSignOut?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSignOut }) => {
  return (
    <div className="min-h-screen bg-background-primary dark:bg-dark-primary transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-dark-secondary shadow-sm border-b border-border dark:border-dark-border transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Budgey.ai</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={onSignOut}
                className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2 transition-colors duration-200">Welcome to your Dashboard</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Here's an overview of your financial insights</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-income/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-income rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Total Income</p>
                <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary transition-colors duration-200">$5,420</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-expense/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-expense rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Total Expenses</p>
                <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary transition-colors duration-200">$3,280</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-savings/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-savings rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Savings</p>
                <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary transition-colors duration-200">$2,140</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-investment/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-investment rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Investments</p>
                <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary transition-colors duration-200">$8,750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-200">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-expense/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-expense rounded"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary transition-colors duration-200">Grocery Store</p>
                  <p className="text-xs text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Today, 2:30 PM</p>
                </div>
              </div>
              <span className="text-sm font-medium text-expense">-$87.32</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-income/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-income rounded"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary transition-colors duration-200">Salary Deposit</p>
                  <p className="text-xs text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Yesterday, 9:00 AM</p>
                </div>
              </div>
              <span className="text-sm font-medium text-income">+$2,500.00</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-expense/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-expense rounded"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary transition-colors duration-200">Coffee Shop</p>
                  <p className="text-xs text-text-secondary dark:text-dark-text-secondary transition-colors duration-200">Yesterday, 8:15 AM</p>
                </div>
              </div>
              <span className="text-sm font-medium text-expense">-$4.50</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;