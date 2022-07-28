import { createContext, useCallback, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { DarkTheme } from '../themes/dark';
import { LightTheme } from '../themes/light';
import { Theme } from '@mui/material';

type ModeContexType = {
  themeName: 'light' | 'dark';
  modeTheme: Theme;
  toggleTheme: () => void;
};

type ModeContextProviderProps = {
  children: React.ReactNode;
};

export const ModeContext = createContext({} as ModeContexType);

export function ThemeContextProvider({ children }: ModeContextProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ModeContext.Provider value={{ themeName, toggleTheme, modeTheme: theme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}
