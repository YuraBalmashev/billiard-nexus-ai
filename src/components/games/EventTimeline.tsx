
import React from 'react';
import { GameEvent } from '@/data/games';

interface EventTimelineProps {
  events: GameEvent[];
  onEventClick: (timestamp: number) => void;
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events, onEventClick }) => {
  const getEventIcon = (type: string) => {
    switch(type) {
      case 'shot':
        return '🎯';
      case 'foul':
        return '⚠️';
      case 'safety':
        return '🛡️';
      case 'score':
        return '🏆';
      default:
        return '•';
    }
  };
  
  const getEventColor = (type: string) => {
    switch(type) {
      case 'shot':
        return 'text-green-500';
      case 'foul':
        return 'text-red-500';
      case 'safety':
        return 'text-blue-500';
      case 'score':
        return 'text-yellow-500';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="w-full bg-billman-dark border border-billman-gray rounded-lg overflow-hidden">
      <div className="p-4 border-b border-billman-gray">
        <h3 className="text-white text-lg font-medium">Game Timeline</h3>
      </div>
      
      <div className="max-h-[400px] overflow-y-auto">
        {events.map((event) => (
          <div 
            key={event.id}
            className="flex items-start p-3 hover:bg-billman-gray/20 border-b border-billman-gray/40 cursor-pointer transition-colors"
            onClick={() => onEventClick(event.videoTimestamp)}
          >
            <div className="mr-3 mt-1">{getEventIcon(event.type)}</div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className={`font-medium ${getEventColor(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                <span className="text-billman-lightGray text-sm">{event.timestamp}</span>
              </div>
              <p className="text-white mt-1">{event.description}</p>
              <span className="text-billman-lightGray text-sm">Player: {event.player}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
