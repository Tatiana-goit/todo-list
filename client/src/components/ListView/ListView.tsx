import React from 'react';
import { Container } from '@mui/material';
import ListViewList from '../ListViewList/ListViewList';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	todoLists: TodoLists[];
}

export default function ListView({ todoLists }: Props) {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: 5,
			}}
		>
			{todoLists.map(({ id, name }) => (
				<ListViewList key={id} id={id} name={name} />
			))}
		</Container>
	);
}
