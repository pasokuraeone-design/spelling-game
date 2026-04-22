import React from 'react';
import { categories } from '../data/words';
import './CategorySelection.css';

interface CategorySelectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  return (
    <div className="category-selection">
      <h2>カテゴリを選ぶ</h2>
      <div className="category-grid">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-card category-${category.id}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
