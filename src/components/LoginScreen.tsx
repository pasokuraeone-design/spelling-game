import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export function LoginScreen() {
  const { signIn } = useAuth();
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentCode || !password) {
      setError('IDとパスワードを入力してください');
      return;
    }
    setLoading(true);
    setError('');
    const { error: signInError } = await signIn(studentCode.trim(), password);
    if (signInError) setError(signInError);
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* タイトル */}
        <div className="login-title-area">
          <div className="login-icon">✏️</div>
          <h1 className="login-title">スペトレ</h1>
          <p className="login-subtitle">英単語スペリングトレーニング</p>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="studentCode" className="login-label">生徒ID</label>
            <input
              id="studentCode"
              type="text"
              className="login-input"
              placeholder="例: s001"
              value={studentCode}
              onChange={e => setStudentCode(e.target.value)}
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="login-field">
            <label htmlFor="password" className="login-label">パスワード</label>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="パスワードを入力"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        <p className="login-hint">※ IDとパスワードは先生から配布されます</p>
      </div>
    </div>
  );
}
