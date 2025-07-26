import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  const inputClasses = `w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-phi-primary-500 focus:border-transparent placeholder-phi-gray-500 dark:placeholder-phi-gray-400 text-phi-gray-900 dark:text-white ${
    error ? 'border-red-500 focus:ring-red-500' : ''
  } ${className}`;

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-phi-gray-700 dark:text-phi-gray-300">{label}</label>}
      <input className={inputClasses} {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
