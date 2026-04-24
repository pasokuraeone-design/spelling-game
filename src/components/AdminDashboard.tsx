import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import type { GameResult } from '../types';

export function AdminDashboard() {
  const { profile, signOut } = useAuth();
  const [results, setResults] = useState<GameResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'results' | 'register'>('results');

  // 新規生徒登録フォーム
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newPass, setNewPass] = useState('');
  const [isAdminFlag, setIsAdminFlag] = useState(false);
  const [regStatus, setRegStatus] = useState('');
  const [regLoading, setRegLoading] = useState(false);

  // 全生徒の結果を取得
  useEffect(() => {
    const fetchResults = async () => {
      const { data } = await supabase
        .from('game_results')
        .select('*, profiles(display_name, student_code)')
        .order('played_at', { ascending: false });
      if (data) setResults(data as GameResult[]);
      setLoading(false);
    };
    fetchResults();
  }, []);

  // 秒数 → 分:秒 に変換
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m > 0 ? `${m}分${s}秒` : `${s}秒`;
  };

  // 日付フォーマット
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  // 新規生徒登録
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode || !newName || !newPass) {
      setRegStatus('すべての項目を入力してください');
      return;
    }
    setRegLoading(true);
    setRegStatus('');

    const email = `${newCode.trim()}@spelling-game.app`;
    const { error } = await supabase.auth.admin.createUser({
      email,
      password: newPass,
      email_confirm: true,
      user_metadata: {
        student_code: newCode.trim(),
        display_name: newName.trim(),
        is_admin: isAdminFlag,
      },
    });

    if (error) {
      // admin.createUser が使えない場合はsignUpで代替
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password: newPass,
        options: {
          data: {
            student_code: newCode.trim(),
            display_name: newName.trim(),
            is_admin: isAdminFlag,
          },
        },
      });
      if (signUpError) {
        setRegStatus(`エラー: ${signUpError.message}`);
      } else {
        setRegStatus(`✅ 「${newName}」さん（ID: ${newCode}）を登録しました！`);
        setNewCode(''); setNewName(''); setNewPass(''); setIsAdminFlag(false);
      }
    } else {
      setRegStatus(`✅ 「${newName}」さん（ID: ${newCode}）を登録しました！`);
      setNewCode(''); setNewName(''); setNewPass(''); setIsAdminFlag(false);
    }
    setRegLoading(false);
  };

  return (
    <div className="admin-wrapper">
      {/* ヘッダー */}
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-icon">🎓</span>
          <div>
            <h1 className="admin-title">先生ダッシュボード</h1>
            <p className="admin-subtitle">{profile?.display_name} 先生</p>
          </div>
        </div>
        <button className="admin-signout-btn" onClick={signOut}>ログアウト</button>
      </header>

      {/* タブ */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${tab === 'results' ? 'active' : ''}`}
          onClick={() => setTab('results')}
        >
          📊 成績一覧
        </button>
        <button
          className={`admin-tab ${tab === 'register' ? 'active' : ''}`}
          onClick={() => setTab('register')}
        >
          ➕ 生徒登録
        </button>
      </div>

      {/* 成績一覧タブ */}
      {tab === 'results' && (
        <div className="admin-content">
          {loading ? (
            <p className="admin-loading">読み込み中...</p>
          ) : results.length === 0 ? (
            <p className="admin-empty">まだプレイ結果がありません</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>日時</th>
                    <th>生徒名</th>
                    <th>カテゴリ</th>
                    <th>正解数</th>
                    <th>タイム</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(r => (
                    <tr key={r.id}>
                      <td>{formatDate(r.played_at)}</td>
                      <td>{r.profiles?.display_name ?? '不明'}</td>
                      <td>{r.category_name}</td>
                      <td>{r.score} / {r.total}</td>
                      <td>{formatTime(r.time_seconds)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* 生徒登録タブ */}
      {tab === 'register' && (
        <div className="admin-content">
          <form onSubmit={handleRegister} className="register-form">
            <h2 className="register-title">新しい生徒を追加する</h2>

            <div className="register-field">
              <label className="register-label">生徒ID（例: s001）</label>
              <input
                className="register-input"
                type="text"
                placeholder="s001"
                value={newCode}
                onChange={e => setNewCode(e.target.value)}
                autoCapitalize="none"
              />
            </div>
            <div className="register-field">
              <label className="register-label">名前（例: 田中太郎）</label>
              <input
                className="register-input"
                type="text"
                placeholder="田中太郎"
                value={newName}
                onChange={e => setNewName(e.target.value)}
              />
            </div>
            <div className="register-field">
              <label className="register-label">パスワード（6文字以上）</label>
              <input
                className="register-input"
                type="text"
                placeholder="123456"
                value={newPass}
                onChange={e => setNewPass(e.target.value)}
              />
            </div>
            <div className="register-field-check">
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdminFlag}
                onChange={e => setIsAdminFlag(e.target.checked)}
              />
              <label htmlFor="isAdmin">先生アカウントとして登録する</label>
            </div>

            {regStatus && (
              <p className={`register-status ${regStatus.startsWith('✅') ? 'success' : 'error'}`}>
                {regStatus}
              </p>
            )}

            <button type="submit" className="register-btn" disabled={regLoading}>
              {regLoading ? '登録中...' : '登録する'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
