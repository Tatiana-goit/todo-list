import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Header() {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			p={5}
			height={110}
			sx={{ backgroundColor: 'primary.main' }}
		>
			<Box display="flex" alignItems="center">
				<AddTaskIcon sx={{ color: 'text.secondary', fontSize: 60, mr: 3 }} />
				<Link component={RouterLink} to="/">
					<Typography
						variant="h6"
						component="h1"
						sx={{ color: 'text.secondary', fontSize: 64 }}
					>
						Todo
					</Typography>
				</Link>
			</Box>
			<Box>
				<Link
					component={RouterLink}
					to="/login"
					color="text.secondary"
					fontSize={28}
				>
					Login
				</Link>
				<Link
					component={RouterLink}
					to="/registration"
					color="text.secondary"
					ml={3}
					mr={1}
					fontSize={28}
				>
					Registration
				</Link>
			</Box>
		</Box>
	);
}
