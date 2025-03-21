
import React from 'react';
import { cn } from '@/lib/utils';

interface BilliardBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
}

export const BilliardBackground = ({ 
  className, 
  children, 
  intensity = 'light' 
}: BilliardBackgroundProps) => {
  // Intensity affects the opacity of the pattern
  const intensityMap = {
    light: 'opacity-5',
    medium: 'opacity-10',
    strong: 'opacity-20'
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Billiard table texture pattern */}
      <div 
        className={cn(
          'absolute inset-0 pointer-events-none z-0', 
          intensityMap[intensity]
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(13, 157, 88, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 157, 88, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 50px 50px, 50px 50px',
          backgroundPosition: '0 0, 0 0, 0 0'
        }}
      ></div>
      
      {/* Table pocket indicators in the corners */}
      <div className="absolute top-4 left-4 w-4 h-4 rounded-full border border-billman-green/20"></div>
      <div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-billman-green/20"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full border border-billman-green/20"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full border border-billman-green/20"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
