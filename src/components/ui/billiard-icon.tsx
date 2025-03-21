
import React from 'react';
import { cn } from '@/lib/utils';
import { Circle } from 'lucide-react';

type BilliardBallType = 'solid' | 'stripe' | 'cue' | 'eight';
type BilliardBallColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'black' | 'white';

interface BilliardIconProps {
  type?: BilliardBallType;
  color?: BilliardBallColor;
  number?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BilliardIcon = ({
  type = 'solid',
  color = 'red',
  number,
  size = 'md',
  className,
}: BilliardIconProps) => {
  
  // Size mapping
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
  
  // Color mapping
  const colorMap: Record<BilliardBallColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-billman-green',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
    orange: 'text-orange-500',
    black: 'text-black',
    white: 'text-white',
  };
  
  // Generate classes based on ball type
  const getBallClasses = () => {
    switch (type) {
      case 'cue':
        return 'bg-white border border-gray-200';
      case 'eight':
        return 'bg-black text-white';
      case 'stripe':
        return cn('relative overflow-hidden', colorMap[color]);
      case 'solid':
      default:
        return cn('bg-current', colorMap[color]);
    }
  };
  
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full',
        sizeMap[size],
        getBallClasses(),
        className
      )}
    >
      {type === 'stripe' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1/2 bg-white rounded-t-full"></div>
        </div>
      )}
      
      {number !== undefined && (
        <span className={cn(
          'text-xs font-bold',
          type === 'stripe' || type === 'eight' ? 'text-white z-10' : 'text-white'
        )}>
          {number}
        </span>
      )}
    </div>
  );
};

export const BilliardSeparator = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center justify-center w-full my-6', className)}>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-billman-green/20 to-transparent"></div>
      <BilliardIcon type="cue" size="sm" className="mx-2" />
      <BilliardIcon type="solid" color="red" size="sm" className="mx-1" />
      <BilliardIcon type="eight" size="sm" className="mx-1" />
      <BilliardIcon type="solid" color="blue" size="sm" className="mx-1" />
      <BilliardIcon type="cue" size="sm" className="mx-2" />
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-billman-green/20 to-transparent"></div>
    </div>
  );
};
