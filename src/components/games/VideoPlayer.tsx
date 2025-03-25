
import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Clock } from 'lucide-react';
import { GameEvent } from '@/data/games';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoUrl: string;
  events: GameEvent[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, events }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Seek to a specific time
  const seekTo = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Handle timeline click
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const timeline = e.currentTarget;
      const rect = timeline.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const newTime = position * duration;
      seekTo(newTime);
    }
  };

  // Handle event marker click
  const jumpToEvent = (timestamp: number) => {
    seekTo(timestamp);
    if (!isPlaying) {
      togglePlay();
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Change playback rate
  const changePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  // Update current time as video plays
  useEffect(() => {
    const video = videoRef.current;
    
    const updateTime = () => {
      if (video) {
        setCurrentTime(video.currentTime);
      }
    };
    
    const updateDuration = () => {
      if (video) {
        setDuration(video.duration);
      }
    };
    
    const handleEnd = () => {
      setIsPlaying(false);
    };
    
    if (video) {
      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      video.addEventListener('ended', handleEnd);
    }
    
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
        video.removeEventListener('ended', handleEnd);
      }
    };
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden bg-billman-black border border-billman-gray">
      <div className="relative">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full aspect-video bg-black"
          onClick={togglePlay}
        />
        
        {/* Play/pause overlay */}
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300",
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          onClick={togglePlay}
        >
          <button className="h-16 w-16 bg-billman-green rounded-full flex items-center justify-center text-white">
            <Play size={32} />
          </button>
        </div>
        
        {/* Controls */}
        <div className="px-4 py-3 bg-billman-dark border-t border-billman-gray">
          <div className="flex items-center justify-between mb-2">
            <button 
              onClick={togglePlay}
              className="text-white p-1 hover:text-billman-green transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-billman-lightGray" />
              <select
                value={playbackRate}
                onChange={(e) => changePlaybackRate(Number(e.target.value))}
                className="bg-billman-gray text-white text-xs px-2 py-1 rounded border-none outline-none"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>
          
          {/* Timeline */}
          <div 
            className="h-2 bg-billman-gray rounded-full overflow-hidden cursor-pointer relative"
            onClick={handleTimelineClick}
          >
            <div 
              className="h-full bg-billman-green"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            
            {/* Event markers */}
            {events.map((event) => (
              <div
                key={event.id}
                className="absolute top-0 h-full w-1 bg-white hover:bg-yellow-400 cursor-pointer transition-colors"
                style={{ left: `${(event.videoTimestamp / duration) * 100}%` }}
                onClick={(e) => {
                  e.stopPropagation();
                  jumpToEvent(event.videoTimestamp);
                }}
                title={event.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
