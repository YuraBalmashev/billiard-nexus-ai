
import React from 'react';
import { cn } from '@/lib/utils';

interface BilliardLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BilliardLoader = ({ className, size = 'md' }: BilliardLoaderProps) => {
  const sizeMap = {
    sm: 'w-16 h-6',
    md: 'w-24 h-8',
    lg: 'w-32 h-10',
  };
  
  const ballSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={cn('relative flex items-center justify-center', sizeMap[size], className)}>
      {/* Track */}
      <div className="absolute inset-0 border-b-2 border-billman-green/20 rounded-full"></div>
      
      {/* Cue ball */}
      <div 
        className={cn(
          'absolute bg-white border border-gray-300 rounded-full animate-bounce-roll', 
          ballSizeMap[size]
        )}
        style={{
          animation: 'billiardRoll 1.5s infinite ease-in-out',
          left: '0%',
        }}
      ></div>
      
      {/* Adding animation to global styles in index.css */}
      <style>
        {`
          @keyframes billiardRoll {
            0% {
              left: 0%;
              transform: translateY(0);
            }
            50% {
              left: 100%;
              transform: translateY(0) translateX(-100%);
            }
            100% {
              left: 0%;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};
