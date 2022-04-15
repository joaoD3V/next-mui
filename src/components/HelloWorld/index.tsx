import { Box, Button, Icon, Typography } from '@mui/material';
import { useMode } from 'hooks/useMode';

export default function HelloWorld() {
  const { toggleTheme } = useMode();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">Hello World</Typography>
      <Button
        startIcon={<Icon>dark_mode</Icon>}
        variant="contained"
        onClick={toggleTheme}
      >
        Alternar Tema
      </Button>
    </Box>
  );
}
