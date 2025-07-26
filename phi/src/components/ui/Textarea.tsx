import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  const textareaClasses = `w-full px-4 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-lg backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-phi-primary-500 focus:border-transparent placeholder-phi-gray-500 dark:placeholder-phi-gray-400 text-phi-gray-900 dark:text-white resize-vertical min-h-[120px] ${
    error ? 'border-red-500 focus:ring-red-500' : ''
  } ${className}`;

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-phi-gray-700 dark:text-phi-gray-300">{label}</label>}
      <textarea className={textareaClasses} {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
