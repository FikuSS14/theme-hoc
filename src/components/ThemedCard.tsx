import React from 'react';
import { withTheme } from '../hoc/withTheme';
import type { ThemedComponentProps } from '../types/theme.types';  // ← import type

/**
 * Компонент карточки с поддержкой темы
 * @param theme - текущая тема ('light' или 'dark')
 * @param title - заголовок карточки
 * @param children - содержимое карточки
 */
interface ThemedCardComponentProps extends ThemedComponentProps {
  title?: string;
  children?: React.ReactNode;
}

function ThemedCardComponent({ theme, title, children }: ThemedCardComponentProps) {
  // Стили в зависимости от темы
  const cardStyles: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#2d2d2d',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
    border: `1px solid ${theme === 'light' ? '#ddd' : '#444'}`,
    borderRadius: '12px',
    padding: '20px',
    margin: '16px',
    transition: 'all 0.3s ease',
    boxShadow: theme === 'light' 
      ? '0 2px 8px rgba(0,0,0,0.1)' 
      : '0 2px 8px rgba(0,0,0,0.3)',
  };

  const titleStyles: React.CSSProperties = {
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: '600',
  };

  return (
    <div style={cardStyles}>
      {title && <h3 style={titleStyles}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

// Оборачиваем компонент в HOC withTheme
export const ThemedCard = withTheme(ThemedCardComponent);

export default ThemedCard;