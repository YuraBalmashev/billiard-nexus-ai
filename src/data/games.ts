
export interface GameEvent {
  id: string;
  timestamp: string; // Time in the video (mm:ss)
  videoTimestamp: number; // Seconds for video seeking
  type: 'shot' | 'foul' | 'safety' | 'score';
  description: string;
  player: string;
}

export interface Game {
  id: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  duration: string;
  players: string[];
  score?: {
    player1: number;
    player2: number;
  };
  statistics?: {
    successfulShots: number;
    missedShots: number;
  };
  videoUrl: string;
  events: GameEvent[];
}

export const gameHistory: Game[] = [
  {
    id: "game1",
    type: "Russian Pyramid",
    date: "2023-11-15",
    time: "19:30",
    venue: "Elite Billiards Club",
    duration: "1h 25m",
    players: ["Alex Smith", "John Doe"],
    score: {
      player1: 8,
      player2: 6
    },
    statistics: {
      successfulShots: 14,
      missedShots: 9
    },
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    events: [
      {
        id: "e1",
        timestamp: "00:15",
        videoTimestamp: 15,
        type: "shot",
        description: "Corner pocket shot",
        player: "Alex Smith"
      },
      {
        id: "e2",
        timestamp: "00:42",
        videoTimestamp: 42,
        type: "foul",
        description: "Cue ball scratch",
        player: "John Doe"
      },
      {
        id: "e3",
        timestamp: "01:12",
        videoTimestamp: 72,
        type: "shot",
        description: "Bank shot success",
        player: "Alex Smith"
      }
    ]
  },
  {
    id: "game2",
    type: "9-Ball",
    date: "2023-11-12",
    time: "14:15",
    venue: "Pro Cue Academy",
    duration: "42m",
    players: ["Alex Smith", "Sarah Johnson"],
    score: {
      player1: 5,
      player2: 3
    },
    statistics: {
      successfulShots: 8,
      missedShots: 6
    },
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    events: [
      {
        id: "e1",
        timestamp: "00:10",
        videoTimestamp: 10,
        type: "shot",
        description: "Break shot",
        player: "Alex Smith"
      },
      {
        id: "e2",
        timestamp: "00:23",
        videoTimestamp: 23,
        type: "safety",
        description: "Smart safety play",
        player: "Sarah Johnson"
      }
    ]
  },
  {
    id: "game3",
    type: "Straight Pool",
    date: "2023-11-08",
    time: "20:00",
    venue: "Master Billiards League",
    duration: "1h 12m",
    players: ["Alex Smith", "Mike Wilson", "Chris Taylor"],
    score: {
      player1: 100,
      player2: 85
    },
    statistics: {
      successfulShots: 22,
      missedShots: 14
    },
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    events: [
      {
        id: "e1",
        timestamp: "00:18",
        videoTimestamp: 18,
        type: "shot",
        description: "Long straight shot",
        player: "Alex Smith"
      },
      {
        id: "e2",
        timestamp: "00:35",
        videoTimestamp: 35,
        type: "score",
        description: "Consecutive run of 5 balls",
        player: "Mike Wilson"
      }
    ]
  },
  {
    id: "game4",
    type: "Russian Pyramid",
    date: "2023-11-02",
    time: "18:45",
    venue: "Elite Billiards Club",
    duration: "1h 05m",
    players: ["Alex Smith", "James Cooper"],
    score: {
      player1: 7,
      player2: 8
    },
    statistics: {
      successfulShots: 15,
      missedShots: 12
    },
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    events: [
      {
        id: "e1",
        timestamp: "00:22",
        videoTimestamp: 22,
        type: "shot",
        description: "Impressive rail shot",
        player: "James Cooper"
      },
      {
        id: "e2",
        timestamp: "00:48",
        videoTimestamp: 48,
        type: "foul",
        description: "Push shot foul",
        player: "Alex Smith"
      }
    ]
  }
];

// Helper function to get a game by ID
export const getGameById = (id: string): Game | undefined => {
  return gameHistory.find(game => game.id === id);
};
