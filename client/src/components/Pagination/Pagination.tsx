import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Pagination } from '@mui/material';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';
// import service from '../../services/index';
import { getTodoLists } from '../../services/api';

interface Props {
	limit: number;
	setTodos(data: TodoLists[]): void;
}
export default function PaginationList({ limit, setTodos }: Props) {
	const [count, setCount] = useState(0);
	// const [from, setFrom] = useState(0);
	// const [to, setTo] = useState(0);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const paginationCount = Math.ceil(count / limit);

	useEffect(() => {
		(async () => {
			// const data = await getTodoLists();
			// setTodos(data?.data);
			// console.log(data?.data);
			const todoLists = await getTodoLists(limit, offset);
			console.log('limit', limit);
			console.log('todoLists2', todoLists);
			const totalCount = todoLists.length;
			console.log('totalCount', totalCount);
			setTodos(todoLists);
			setCount(totalCount);
		})();
	}, [limit, offset]);

	// useEffect(() => {
	// 	setTo(pageSize);
	// 	setCount(0);
	// 	setFrom(0);
	// }, [pageSize]);

	// useEffect(() => {
	// 	service.getData({ from, to }).then((response) => {
	// 		setCount(response.count);
	// 		setTodos(response.data);
	// 	});
	// }, [count, from, to, setTodos]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page);
		console.log('page', page);
		// const from = (page - 1) * pageSize;
		// const to = (page - 1) * pageSize + pageSize;
		// setFrom(from);
		// setTo(to);
	};

	// const paginationCount = Math.ceil(count / pageSize);

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
