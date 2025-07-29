import React from 'react';

interface DashboardProps {
  onSignOut?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSignOut }) => {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Budgey.ai</h1>
            </div>
            <button 
              onClick={onSignOut}
              className="text-text-secondary hover:text-primary-600 font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome to your Dashboard</h2>
          <p className="text-text-secondary">Here's an overview of your financial insights</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-income/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-income rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary">Total Income</p>
                <p className="text-2xl font-bold text-text-primary">$5,420</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-expense/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-expense rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary">Total Expenses</p>
                <p className="text-2xl font-bold text-text-primary">$3,280</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-savings/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-savings rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary">Savings</p>
                <p className="text-2xl font-bold text-text-primary">$2,140</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-investment/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-investment rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-text-secondary">Investments</p>
                <p className="text-2xl font-bold text-text-primary">$8,750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-expense/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-expense rounded"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-text-primary">Grocery Store</p>
                  <p className="text-xs text-text-secondary">Today, 2:30 PM</p>
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
                  <p className="text-sm font-medium text-text-primary">Salary Deposit</p>
                  <p className="text-xs text-text-secondary">Yesterday, 9:00 AM</p>
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
                  <p className="text-sm font-medium text-text-primary">Coffee Shop</p>
                  <p className="text-xs text-text-secondary">Yesterday, 8:15 AM</p>
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