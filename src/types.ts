import type { User } from '@supabase/supabase-js';

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

// ログインしているユーザー情報
export interface Profile {
  id: string;
  student_code: string;
  display_name: string;
  is_admin: boolean;
}

// ゲーム結果
export interface GameResult {
  id: string;
  user_id: string;
  category_id: string;
  category_name: string;
  score: number;
  total: number;
  time_seconds: number;
  played_at: string;
  profiles?: {
    display_name: string;
    student_code: string;
  };
}

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (studentCode: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}
