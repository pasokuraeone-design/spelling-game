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
  const [profileLoading, setProfileLoading] = useState(false);

  // プロフィール情報をSupabaseから取得
  const fetchProfile = async (userId: string) => {
    setProfileLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (data) setProfile(data as Profile);
    if (error) console.error('プロフィール取得エラー:', error);
    setProfileLoading(false);
  };

  useEffect(() => {
    // 現在のログイン状態を確認
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      setLoading(false);
    });

    // ログイン状態の変化を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
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
    // サインイン成功後、セッション取得
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(session.user);
      // プロフィールが無ければ作成(Upsert)
      const { error: upsertError } = await supabase
        .from('profiles')
        .upsert({
          id: session.user.id,
          student_code: studentCode,
          display_name: studentCode,
          is_admin: false,
        });
      if (upsertError) console.error('プロフィール作成エラー:', upsertError);
      await fetchProfile(session.user.id);
    }
    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading: loading || profileLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// カスタムフック
export const useAuth = () => useContext(AuthContext);
