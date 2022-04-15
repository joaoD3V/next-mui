import { ModeContext } from '../contexts/ModeContext';
import { useContext } from 'react';

export function useMode() {
  const value = useContext(ModeContext);

  return value;
}
