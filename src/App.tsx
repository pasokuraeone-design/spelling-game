import { useState } from 'react';
import { GameScreen } from './components/GameScreen';
import { CategorySelection } from './components/CategorySelection';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBackToMenu = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>スペトレ</h1>
      </header>
      <main className="app-main">
        {!selectedCategory ? (
          <CategorySelection onSelectCategory={setSelectedCategory} />
        ) : (
          <GameScreen categoryId={selectedCategory} onBackToMenu={handleBackToMenu} />
        )}
      </main>
    </div>
  )
}

export default App;
