export interface Word {
  id: string;
  english: string;
  japanese: string;
}

export type GameState = 'playing' | 'correct' | 'finished';
