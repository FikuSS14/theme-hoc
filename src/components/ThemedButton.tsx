import React from 'react';
import { withTheme } from '../hoc/withTheme';
import type { ThemedComponentProps } from '../types/theme.types';  // ← import type
/**
 * Компонент кнопки с поддержкой темы
 * @param theme - текущая тема ('light' или 'dark')
 * @param children - содержимое кнопки
 * @param onClick - обработчик клика
 */
function ThemedButtonComponent({ theme, children, onClick }: ThemedComponentProps) {
  // Стили в зависимости от темы
  const buttonStyles: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#007bff' : '#4a4a4a',
    color: theme === 'light' ? '#ffffff' : '#e0e0e0',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    margin: '8px',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

// Оборачиваем компонент в HOC withTheme
export const ThemedButton = withTheme(ThemedButtonComponent);

// Для удобства экспортируем и исходный компонент
export default ThemedButton;