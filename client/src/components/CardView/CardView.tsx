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
			{todoLists.map(({ _id, name, todos }) => (
				<CardViewList key={_id} id={_id} name={name} todos={todos} />
			))}
		</Grid>
	);
}
