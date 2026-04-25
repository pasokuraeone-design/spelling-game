import React, { useEffect, useState } from 'react';
import { categories } from '../data/words';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import './CategorySelection.css';

interface CategorySelectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  const { user } = useAuth();
  const [clearedCategories, setClearedCategories] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // クリア済みカテゴリをSupabaseから取得
  useEffect(() => {
    const fetchCleared = async () => {
      if (!user) { setLoading(false); return; }
      const { data } = await supabase
        .from('game_results')
        .select('category_id')
        .eq('user_id', user.id);
      if (data) {
        const ids = new Set(data.map((r: { category_id: string }) => r.category_id));
        setClearedCategories(ids);
      }
      setLoading(false);
    };
    fetchCleared();
  }, [user]);

  // カテゴリがアンロックされているかチェック
  const isUnlocked = (index: number) => {
    if (index === 0) return true; // 最初のステージは常にアンロック
    // 前のステージがクリア済みならアンロック
    const prevCategoryId = categories[index - 1].id;
    return clearedCategories.has(prevCategoryId);
  };

  // カテゴリがクリア済みかチェック
  const isCleared = (categoryId: string) => clearedCategories.has(categoryId);

  if (loading) {
    return (
      <div className="category-selection">
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="category-selection">
      <h2>ステージを選ぶ</h2>
      <div className="category-grid">
        {categories.map((category, index) => {
          const unlocked = isUnlocked(index);
          const cleared = isCleared(category.id);
          return (
            <button
              key={category.id}
              className={`category-card category-${category.id} ${!unlocked ? 'locked' : ''} ${cleared ? 'cleared' : ''}`}
              onClick={() => unlocked && onSelectCategory(category.id)}
              disabled={!unlocked}
            >
              {/* ステージ番号 */}
              <span className="stage-number">STAGE {index + 1}</span>
              {/* カテゴリ名 */}
              <span className="stage-name">{category.name}</span>
              {/* 状態アイコン */}
              {!unlocked && <span className="stage-lock">🔒</span>}
              {cleared && <span className="stage-clear">✅</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
