import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function TodoListButton() {
	return (
		<Button variant="contained">
			<AddIcon sx={{ marginRight: 1 }} />
			Create new Todolist
		</Button>
	);
}
