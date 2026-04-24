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
  if (profile.is_admin) {
    return <AdminDashboard />;
  }

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
