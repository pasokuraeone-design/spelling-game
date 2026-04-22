export interface Category {
  id: string;
  name: string;
}

export interface Word {
  id: string;
  categoryId: string;
  english: string;
  japanese: string;
}

export type GameState = 'playing' | 'correct' | 'finished';
