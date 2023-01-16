import { Box, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Header() {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				p: 5,
				height: 120,
				backgroundColor: 'background.primary',
			}}
		>
			<AddTaskIcon sx={{ color: 'text.secondary', fontSize: 60, mr: 3 }} />
			<Typography
				variant="h6"
				component="h1"
				sx={{ color: 'text.secondary', fontSize: 64 }}
			>
				Todo
			</Typography>
		</Box>
	);
}
