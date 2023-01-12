import React from 'react';
import { Box, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Header() {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				padding: 5,
				height: 110,
				backgroundColor: 'primary.main',
			}}
		>
			<AddTaskIcon
				sx={{ color: 'text.secondary', fontSize: 60, marginRight: 3 }}
			/>
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
