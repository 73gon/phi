import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, children, className = '', size = 'md' }) => {
  const sizes = {
    sm: {
      switch: 'w-8 h-5',
      thumb: 'w-3 h-3',
      translate: 'translate-x-3',
    },
    md: {
      switch: 'w-11 h-6',
      thumb: 'w-4 h-4',
      translate: 'translate-x-5',
    },
    lg: {
      switch: 'w-14 h-7',
      thumb: 'w-5 h-5',
      translate: 'translate-x-7',
    },
  };

  const currentSize = sizes[size];

  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <div className={`${currentSize.switch} bg-phi-gray-300 dark:bg-phi-gray-600 rounded-full transition-colors duration-200 ${checked ? 'bg-phi-primary-500' : ''}`}>
          <div
            className={`${currentSize.thumb} bg-white rounded-full shadow-md transform transition-transform duration-200 ${
              checked ? currentSize.translate : 'translate-x-1'
            } flex items-center justify-center mt-0.5 ml-0.5`}
          >
            {children}
          </div>
        </div>
      </div>
    </label>
  );
};
