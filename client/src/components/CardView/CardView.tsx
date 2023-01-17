import React from 'react';
import { Grid } from '@mui/material';
import CardViewList from '../CardViewList/CardViewList';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	todoLists: TodoLists[];
}

export default function CardView({ todoLists }: Props) {
	return (
		<Grid container spacing={3} rowSpacing={5} p={5}>
			{todoLists.map(({ id, name, todos }) => (
				<CardViewList key={id} id={id} name={name} todos={todos} />
			))}
		</Grid>
	);
}
