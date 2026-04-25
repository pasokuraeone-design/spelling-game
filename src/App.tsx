import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginScreen } from './components/LoginScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { GameScreen } from './components/GameScreen';
import { CategorySelection } from './components/CategorySelection';
import { useState } from 'react';
import './App.css';

// ログイン状態によって表示を切り替えるメインコンテンツ
function AppContent() {
  const { user, profile, loading, signOut } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 読み込み中
  if (loading) {
    return (
      <div className="app-loading">
        <div className="app-loading-spinner" />
        <p>読み込み中...</p>
      </div>
    );
  }

  // 未ログイン → ログイン画面
  if (!user || !profile) {
    return <LoginScreen />;
  }

  // 先生アカウント → 管理ダッシュボード
  // デバッグ: is_adminの値を直接チェック（型の問題を回避）
  const isAdmin = profile.is_admin === true || String(profile.is_admin) === 'true';
  if (isAdmin) {
    return <AdminDashboard />;
  }

  // デバッグ表示（原因特定後に削除）
  console.log('DEBUG profile:', JSON.stringify(profile));

  // 生徒アカウント → ゲーム画面
  const handleBackToMenu = () => setSelectedCategory(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>スペトレ</h1>
        <div className="app-header-user">
          <span className="app-header-name">{profile.display_name}</span>
          <button className="app-signout-btn" onClick={signOut}>ログアウト</button>
        </div>
      </header>
      {/* デバッグ情報（原因特定後に削除） */}
      <div style={{background:'#ffe0e0',padding:'10px',fontSize:'12px',wordBreak:'break-all'}}>
        <strong>DEBUG:</strong> is_admin={String(profile.is_admin)} | type={typeof profile.is_admin} | display_name={profile.display_name} | student_code={profile.student_code}
      </div>
      <main className="app-main">
        {!selectedCategory ? (
          <CategorySelection onSelectCategory={setSelectedCategory} />
        ) : (
          <GameScreen categoryId={selectedCategory} onBackToMenu={handleBackToMenu} />
        )}
      </main>
    </div>
  );
}

// AuthProviderでアプリ全体をラップ
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
