import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Pagination } from '@mui/material';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';
import { getTodoLists } from '../../services/api';

interface Props {
	limit: number;
	setTodos(data: TodoLists[]): void;
}

export default function PaginationList({ limit, setTodos }: Props) {
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const paginationCount = Math.ceil(count / limit);

	useEffect(() => {
		(async () => {
			const { todoLists, totalCount } = await getTodoLists(limit, offset);
			setTodos(todoLists);
			setCount(totalCount);
		})();
	}, [limit, offset]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page);
	};

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				p: 2,
			}}
		>
			<Pagination
				page={page}
				count={paginationCount}
				onChange={handlePageChange}
				color="primary"
				variant="outlined"
				shape="rounded"
			/>
		</Container>
	);
}
