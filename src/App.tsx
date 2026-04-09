import { useState } from 'react';
import './App.css';
import { ThemedButton } from './components/ThemedButton';
import { ThemedCard } from './components/ThemedCard';
import type { ThemeType } from './types/theme.types';  


function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const appStyles: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
    minHeight: '100vh',
    padding: '20px',
    transition: 'background-color 0.3s ease',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '30px',
    color: theme === 'light' ? '#333' : '#fff',
  };

  const themeInfoStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: theme === 'light' ? '#e0e0e0' : '#333',
    borderRadius: '8px',
    color: theme === 'light' ? '#333' : '#fff',
  };

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        <h1 style={headerStyles}>HOC для управления темой</h1>
        
        <div style={themeInfoStyles}>
          <p>Текущая тема: <strong>{theme}</strong></p>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <ThemedButton theme={theme} onClick={toggleTheme}>
            Переключить тему (сейчас: {theme})
          </ThemedButton>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <ThemedCard theme={theme} title="Карточка 1">
            <p>Эта карточка использует тему {theme}</p>
            <p>Стили меняются автоматически при переключении темы.</p>
          </ThemedCard>
          
          <ThemedCard theme={theme} title="Карточка 2">
            <p>HOC withTheme передаёт тему через пропсы.</p>
            <p>Управление темой находится в родительском компоненте App.</p>
          </ThemedCard>
          
          <ThemedCard theme={theme} title="Карточка 3">
            <p>Тема передаётся сверху вниз без использования Context API.</p>
            <ThemedButton theme={theme} onClick={() => alert('Кнопка внутри карточки!')}>
              Внутренняя кнопка
            </ThemedButton>
          </ThemedCard>
        </div>
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#2d2d2d', borderRadius: '12px' }}>
          <h3 style={{ color: theme === 'light' ? '#333' : '#fff' }}>Как это работает:</h3>
          <ul style={{ color: theme === 'light' ? '#555' : '#ccc' }}>
            <li>HOC <code>withTheme</code> оборачивает компоненты</li>
            <li>Тема хранится в состоянии <code>App</code></li>
            <li>Тема передаётся через пропсы (не Context)</li>
            <li>Сохранён <code>displayName</code> для отладки</li>
            <li>Полная поддержка TypeScript (без <code>any</code>)</li>
            <li>Поддержка <code>forwardRef</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;