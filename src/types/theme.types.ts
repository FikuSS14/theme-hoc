/**
 * Тип для темы
 */
export type ThemeType = 'light' | 'dark';

/**
 * Пропсы, которые добавляет HOC withTheme
 */
export interface WithThemeProps {
  theme: ThemeType;
}

/**
 * Тип для компонента с поддержкой темы
 */
export type ThemedComponentProps = WithThemeProps & {
  children?: React.ReactNode;
  onClick?: () => void;
};

/**
 * Тип для пропсов App
 */
export interface AppProps {
  initialTheme?: ThemeType;
}