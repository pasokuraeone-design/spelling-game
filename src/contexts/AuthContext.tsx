import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import type { AuthContextType, Profile } from '../types';

// 認証コンテキストの作成
const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
});

// AuthProviderコンポーネント
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // プロフィール情報をSupabaseから取得（失敗時はメールアドレスから仮プロフィールを作成）
  const fetchProfile = async (currentUser: User) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single();

      if (data) {
        setProfile(data as Profile);
      } else {
        // プロフィールが取れなかった場合、仮のプロフィールをセット
        // （RLSでブロックされている場合やプロフィール未作成の場合の対策）
        console.warn('プロフィール取得失敗、仮プロフィールを使用:', error?.message);
        const code = currentUser.email?.split('@')[0] ?? 'unknown';
        const meta = currentUser.user_metadata ?? {};
        setProfile({
          id: currentUser.id,
          student_code: meta.student_code ?? code,
          display_name: meta.display_name ?? code,
          is_admin: meta.is_admin ?? false,
        });
      }
    } catch (err) {
      // 例外発生時も仮プロフィールをセット
      console.error('プロフィール取得例外:', err);
      const code = currentUser.email?.split('@')[0] ?? 'unknown';
      setProfile({
        id: currentUser.id,
        student_code: code,
        display_name: code,
        is_admin: false,
      });
    }
  };

  useEffect(() => {
    // 現在のログイン状態を確認
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        fetchProfile(currentUser).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    // ログイン状態の変化を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        fetchProfile(currentUser);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 生徒コード → メールアドレス形式に変換してログイン
  const signIn = async (studentCode: string, password: string) => {
    const email = `${studentCode}@spelling-game.app`;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: `エラー: ${error.message}` };
    // onAuthStateChangeが自動でuser/profileを更新するのを待つ
    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// カスタムフック
export const useAuth = () => useContext(AuthContext);
