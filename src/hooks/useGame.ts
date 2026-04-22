import { useState, useEffect, useCallback, useRef } from 'react';
import type { Word, GameState } from '../types';
import { wordList, shuffleArray } from '../data/words';

export function useGame(categoryId: string) {
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [gameState, setGameState] = useState<GameState>('playing');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null); // ゲーム開始時刻を記録

  // 初期化：カテゴリで絞り込んで問題をシャッフルしてセット
  useEffect(() => {
    resetGame();
  }, [categoryId]); // categoryIdが変わったらリセット

  const resetGame = useCallback(() => {
    const filteredWords = wordList.filter(word => word.categoryId === categoryId);
    setWords(shuffleArray(filteredWords));
    setCurrentIndex(0);
    setCurrentInput('');
    setGameState('playing');
    setErrorIndex(null);
    setElapsedSeconds(0);
    startTimeRef.current = Date.now(); // タイマーリセット
  }, [categoryId]);

  const currentWord = words[currentIndex];

  const handleKeyPress = useCallback((key: string) => {
    if (gameState !== 'playing' || !currentWord) return;
    
    // スペースの場合は自動でスキップするか、スペースキー入力を求めるか
    // 今回は文字の入力のみを判定。スペースは自動補完する実装にする
    let actualInput = currentInput;
    let actualTargetChar = currentWord.english[actualInput.length];
    
    // 現在のターゲットがスペースなら、スペースを自動的に追加する
    if (actualTargetChar === ' ') {
      actualInput += ' ';
      actualTargetChar = currentWord.english[actualInput.length];
    }
    
    if (key.toLowerCase() === actualTargetChar.toLowerCase()) {
      // 正解の文字が入力された
      const newInput = actualInput + actualTargetChar;
      setCurrentInput(newInput);
      setErrorIndex(null);

      // 全部入力し終えたかチェック
      // 次の文字がスペースならそれも自動で埋める
      let finalInput = newInput;
      while (currentWord.english[finalInput.length] === ' ') {
        finalInput += ' ';
      }
      
      if (finalInput !== newInput) {
         setCurrentInput(finalInput);
      }

      if (finalInput.length === currentWord.english.length) {
        setGameState('correct');
        setTimeout(() => {
          if (currentIndex < words.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setCurrentInput('');
            setGameState('playing');
          } else {
            // 全問クリア時に経過時間を計算して保存
            if (startTimeRef.current !== null) {
              const seconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
              setElapsedSeconds(seconds);
            }
            setGameState('finished');
          }
        }, 1000); // 1秒後に次の問題へ
      }
    } else {
      // 不正解の文字が入力された
      setErrorIndex(actualInput.length);
      // 0.3秒後にエラー表示をリセット
      setTimeout(() => setErrorIndex(null), 300);
    }
  }, [currentWord, currentInput, gameState, currentIndex, words.length]);

  return {
    currentWord,
    currentInput,
    gameState,
    errorIndex,
    elapsedSeconds,
    progress: {
      current: currentIndex + 1,
      total: words.length
    },
    handleKeyPress,
    resetGame
  };
}
