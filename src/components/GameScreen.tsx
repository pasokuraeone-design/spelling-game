import React from 'react';
import { useGame } from '../hooks/useGame';
import { Keyboard } from './Keyboard';
import './GameScreen.css';

interface GameScreenProps {
  categoryId: string;
  onBackToMenu: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ categoryId, onBackToMenu }) => {
  const { currentWord, currentInput, gameState, errorIndex, progress, elapsedSeconds, handleKeyPress } = useGame(categoryId);

  if (!currentWord) return null;

  // 入力欄の描画
  const renderInput = () => {
    return currentWord.english.split('').map((char, index) => {
      const isSpace = char === ' ';
      const isTyped = index < currentInput.length;
      const isError = index === errorIndex;
      const isCurrent = index === currentInput.length;

      let className = 'letter-box';
      if (isSpace) className += ' space';
      if (isTyped) className += ' typed';
      if (isError) className += ' error shake';
      if (isCurrent && gameState !== 'correct') className += ' current';

      return (
        <div key={index} className={className}>
          {isTyped ? currentInput[index] : ''}
        </div>
      );
    });
  };

  if (gameState === 'finished') {
    return (
      <div className="game-screen result-screen">
        <div className="trophy">🏆</div>
        <h2>All Clear!</h2>
        <p>全問クリア！</p>
        <p className="time-result">⏱ {elapsedSeconds}秒でクリア！</p>
        <button className="primary-button" onClick={() => window.location.reload()}>
          もう一度
        </button>
        <button className="secondary-button" onClick={onBackToMenu} style={{ marginTop: '1rem' }}>
          違うカテゴリを選択
        </button>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button className="secondary-button back-btn" onClick={onBackToMenu} style={{ padding: '0.5rem 1rem' }}>
          ◀ 戻る
        </button>
        <div className="progress-bar" style={{ margin: 0, flex: 1, marginLeft: '1rem' }}>
          <span className="progress-text">{progress.current} / {progress.total}</span>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="question-area">
        <h2 className="japanese-word">{currentWord.japanese}</h2>
        {gameState === 'correct' && (
          <div className="correct-feedback bounce">
            Perfect! 🎉
          </div>
        )}
      </div>

      <div className="input-area">
        {renderInput()}
      </div>

      <div className="keyboard-area">
        <Keyboard 
          onKeyPress={handleKeyPress} 
          disabled={gameState !== 'playing'} 
          targetWord={currentWord.english}
          currentInput={currentInput}
        />
      </div>
    </div>
  );
};
