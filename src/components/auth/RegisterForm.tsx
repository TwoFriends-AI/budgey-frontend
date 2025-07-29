import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character');

const registerSchema = z
  .object({
    email: z.string().email('Please enter a valid email address'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
  isLoading?: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading = false }) => {
  const [submitError, setSubmitError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const password = watch('password');

  const handleFormSubmit = async (data: RegisterFormData) => {
    try {
      setSubmitError('');
      await onSubmit(data);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred during registration');
    }
  };

  const loading = isLoading || isSubmitting;

  const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return { strength: score, label: 'Weak', color: 'bg-red-500' };
    if (score <= 3) return { strength: score, label: 'Fair', color: 'bg-yellow-500' };
    if (score <= 4) return { strength: score, label: 'Good', color: 'bg-blue-500' };
    return { strength: score, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(password || '');

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Create your account</h2>
          <p className="text-text-secondary">Join Budgey.ai and start managing your finances</p>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {submitError && (
            <div 
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
              role="alert"
              aria-live="polite"
            >
              {submitError}
            </div>
          )}

          <div>
            <label 
              htmlFor="register-email" 
              className="block text-sm font-medium text-text-primary mb-2"
            >
              Email address
            </label>
            <input
              {...register('email')}
              type="email"
              id="register-email"
              autoComplete="email"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.email 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your email"
              disabled={loading}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'register-email-error' : undefined}
            />
            {errors.email && (
              <p 
                id="register-email-error" 
                className="mt-1 text-sm text-red-600"
                role="alert"
                aria-live="polite"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label 
              htmlFor="register-password" 
              className="block text-sm font-medium text-text-primary mb-2"
            >
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              id="register-password"
              autoComplete="new-password"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.password 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Create a strong password"
              disabled={loading}
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={`${errors.password ? 'register-password-error' : ''} password-requirements password-strength`}
            />
            
            {password && (
              <div className="mt-2" id="password-strength" aria-live="polite">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {passwordStrength.label}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-2 text-xs text-text-secondary" id="password-requirements">
              Password must contain:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li className={password && password.length >= 8 ? 'text-green-600' : ''}>
                  At least 8 characters
                </li>
                <li className={password && /[a-z]/.test(password) ? 'text-green-600' : ''}>
                  One lowercase letter
                </li>
                <li className={password && /[A-Z]/.test(password) ? 'text-green-600' : ''}>
                  One uppercase letter
                </li>
                <li className={password && /[0-9]/.test(password) ? 'text-green-600' : ''}>
                  One number
                </li>
                <li className={password && /[^a-zA-Z0-9]/.test(password) ? 'text-green-600' : ''}>
                  One special character
                </li>
              </ul>
            </div>

            {errors.password && (
              <p 
                id="register-password-error" 
                className="mt-1 text-sm text-red-600"
                role="alert"
                aria-live="polite"
              >
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label 
              htmlFor="confirm-password" 
              className="block text-sm font-medium text-text-primary mb-2"
            >
              Confirm password
            </label>
            <input
              {...register('confirmPassword')}
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.confirmPassword 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Confirm your password"
              disabled={loading}
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
              aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
            />
            {errors.confirmPassword && (
              <p 
                id="confirm-password-error" 
                className="mt-1 text-sm text-red-600"
                role="alert"
                aria-live="polite"
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                {...register('acceptTerms')}
                id="accept-terms"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                disabled={loading}
                aria-invalid={errors.acceptTerms ? 'true' : 'false'}
                aria-describedby={errors.acceptTerms ? 'accept-terms-error' : undefined}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="accept-terms" className="text-text-secondary">
                I agree to the{' '}
                <button type="button" className="text-primary-600 hover:text-primary-500 font-medium">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-primary-600 hover:text-primary-500 font-medium">
                  Privacy Policy
                </button>
              </label>
              {errors.acceptTerms && (
                <p 
                  id="accept-terms-error" 
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full btn-primary ${
              loading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-primary-600'
            }`}
            aria-describedby={loading ? 'register-loading-description' : undefined}
          >
            {loading ? (
              <>
                <svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
                <span id="register-loading-description" className="sr-only">
                  Please wait while we create your account
                </span>
              </>
            ) : (
              'Create account'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Already have an account?{' '}
            <button className="text-primary-600 hover:text-primary-500 font-medium">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};