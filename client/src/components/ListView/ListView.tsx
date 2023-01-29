import React from 'react';
import { Container } from '@mui/material';
import ListViewList from '../ListViewList/ListViewList';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	todoLists: TodoLists[];
}

export default function ListView({ todoLists }: Props) {
	// todoLists.sort(function (a, b) {
	// 	if (a.name < b.name) {
	// 		return 1;
	// 	}
	// 	if (a.name > b.name) {
	// 		return -1;
	// 	}
	// 	return 0;
	// });
	// console.log('todoLists', todoLists);

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: 5,
			}}
		>
			{todoLists.map(({ _id, name, todos }) => (
				<ListViewList key={_id} id={_id} name={name} todos={todos} />
			))}
		</Container>
	);
}
