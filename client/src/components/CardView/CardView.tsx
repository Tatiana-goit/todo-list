import React from 'react';
import { Grid } from '@mui/material';
import CardViewTodoList from '../CardViewTodoList/CardViewTodoList';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	todoLists: TodoLists[];
}

export default function CardView({ todoLists }: Props) {
	return (
		<Grid container spacing={3} rowSpacing={5} padding={5}>
			{todoLists.map(({ id, name, todos }) => (
				<CardViewTodoList key={id} id={id} name={name} todos={todos} />
			))}
		</Grid>
	);
}
