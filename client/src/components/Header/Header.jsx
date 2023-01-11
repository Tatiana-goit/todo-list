import {Box, Typography} from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        height: 140,
        backgroundColor: 'background.primary',
      }}
    >
      <Typography variant="h6" component="h1" sx={{ color: 'text.secondary', fontSize: 64}}>
        Todo
      </Typography>
    </Box>
  )
}