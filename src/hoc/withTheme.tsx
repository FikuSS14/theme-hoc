import React from 'react';
import { WithThemeProps, ThemeType } from '../types/theme.types';

/**
 * HOC для добавления темы в компонент
 */
export function withTheme<P extends WithThemeProps>(
  WrappedComponent: React.ComponentType<P>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
  const ComponentWithTheme = (props: Omit<P, keyof WithThemeProps> & { theme: ThemeType }) => {
    const { theme, ...restProps } = props;
    return <WrappedComponent {...(restProps as P)} theme={theme} />;
  };
  
  ComponentWithTheme.displayName = `withTheme(${displayName})`;
  
  return ComponentWithTheme;
}