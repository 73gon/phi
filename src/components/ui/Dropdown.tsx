import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (key: string) => void;
  selectedKey?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items, onSelect, selectedKey, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (key: string) => {
    onSelect(key);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-black/95 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg shadow-xl z-50">
          <div className="py-2">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => handleSelect(item.key)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-phi-gray-100 dark:hover:bg-phi-gray-800 flex items-center space-x-2 ${
                  selectedKey === item.key ? 'bg-phi-primary-50 dark:bg-phi-primary-900/20 text-phi-primary-600 dark:text-phi-primary-400' : 'text-phi-gray-700 dark:text-phi-gray-300'
                }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
