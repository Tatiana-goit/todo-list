import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ButtonCreate() {
	return (
		<Button variant="contained" sx={{ width: 230 }}>
			<AddIcon sx={{ mr: 1 }} />
			Create new todo list
		</Button>
	);
}
