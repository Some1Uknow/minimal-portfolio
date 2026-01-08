'use client';

import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const options = [
    { value: 'light', icon: FiSun, label: 'Light' },
    { value: 'dark', icon: FiMoon, label: 'Dark' },
    { value: 'system', icon: FiMonitor, label: 'System' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 p-1 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-200 dark:border-zinc-700 shadow-lg">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.value;

          return (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="relative p-2 rounded-full transition-colors"
              aria-label={`Switch to ${option.label} theme`}
              title={option.label}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-indicator"
                  className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <Icon
                className={`relative w-4 h-4 transition-colors ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
