import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

type AuthMode = 'login' | 'register';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface AuthPageProps {
  onLoginSuccess?: () => void;
  onRegisterSuccess?: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ 
  onLoginSuccess, 
  onRegisterSuccess 
}) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login attempt:', { email: data.email });
      
      // In a real app, you would make an API call here
      // const response = await authAPI.login(data);
      
      // Simulate successful login
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Default behavior - redirect to dashboard
        alert('Login successful! Redirecting to dashboard...');
      }
    } catch {
      // Re-throw to let the form handle the error display
      throw new Error('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Registration attempt:', { 
        email: data.email, 
        acceptedTerms: data.acceptTerms 
      });
      
      // In a real app, you would make an API call here
      // const response = await authAPI.register(data);
      
      // Simulate successful registration
      if (onRegisterSuccess) {
        onRegisterSuccess();
      } else {
        // Default behavior - show success and switch to login
        alert('Account created successfully! Please sign in.');
        setMode('login');
      }
    } catch {
      // Re-throw to let the form handle the error display
      throw new Error('Registration failed. This email may already be in use.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">Budgey.ai</h1>
          <p className="text-text-secondary">Smart personal finance insights</p>
        </div>

        {mode === 'login' ? (
          <div>
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
            <div className="mt-6 text-center">
              <p className="text-sm text-text-secondary">
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="text-primary-600 hover:text-primary-500 font-medium focus:outline-none focus:underline"
                >
                  Create one now
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
            <div className="mt-6 text-center">
              <p className="text-sm text-text-secondary">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-primary-600 hover:text-primary-500 font-medium focus:outline-none focus:underline"
                >
                  Sign in instead
                </button>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Feature highlights */}
      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Why choose Budgey.ai?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-primary-500 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Smart Insights</h3>
            <p className="text-text-secondary text-sm">
              AI-powered analysis of your spending patterns and financial habits
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-savings/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-savings rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Goal Tracking</h3>
            <p className="text-text-secondary text-sm">
              Set and monitor financial goals with personalized recommendations
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-secondary-500 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Secure & Private</h3>
            <p className="text-text-secondary text-sm">
              Bank-level security with complete control over your financial data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;