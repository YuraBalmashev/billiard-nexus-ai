
import React from 'react';
import { getRemainingStorageTime } from '@/data/games';
import { cn } from '@/lib/utils';

interface StorageCountdownProps {
  recordedAt: number;
  isFavorite: boolean;
}

const StorageCountdown: React.FC<StorageCountdownProps> = ({ recordedAt, isFavorite }) => {
  // If it's a favorite, we don't need to show the countdown
  if (isFavorite) {
    return (
      <div className="flex items-center text-billman-green">
        <span className="text-xs font-medium">Permanently saved</span>
      </div>
    );
  }

  const { value, unit } = getRemainingStorageTime(recordedAt);

  // Define color based on remaining time
  const getColorClass = () => {
    if (unit === 'm' || (unit === 'h' && value < 24)) {
      return 'text-red-500'; // Less than 24 hours or minutes remaining
    } else if (unit === 'h' && value < 48) {
      return 'text-yellow-500'; // Between 24 and 48 hours
    } else {
      return 'text-billman-lightGray'; // More than 48 hours
    }
  };

  // If expired
  if (value <= 0) {
    return (
      <div className="flex items-center text-red-500">
        <span className="text-xs font-medium">Expired</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", getColorClass())}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="mr-1"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span className="text-xs font-medium">
        {value}{unit} remaining
      </span>
    </div>
  );
};

export default StorageCountdown;
