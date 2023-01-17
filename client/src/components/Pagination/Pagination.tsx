import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Pagination } from '@mui/material';
import { TodoLists } from '../../shared/interfaces/todolist.interfaces';
import service from '../../services/index';

interface Props {
	pageSize: number;
	setTodos(data: TodoLists[]): void;
}
export default function PaginationList({ pageSize, setTodos }: Props) {
	const [count, setCount] = useState(0);
	const [from, setFrom] = useState(0);
	const [to, setTo] = useState(0);

	useEffect(() => {
		setTo(pageSize);
		setCount(0);
		setFrom(0);
	}, [pageSize]);

	useEffect(() => {
		service.getData({ from, to }).then((response) => {
			setCount(response.count);
			setTodos(response.data);
		});
	}, [count, from, to, setTodos]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		const from = (page - 1) * pageSize;
		const to = (page - 1) * pageSize + pageSize;
		setFrom(from);
		setTo(to);
	};

	const paginationCount = Math.ceil(count / pageSize);

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				p: 2,
			}}
		>
			<Pagination
				count={paginationCount}
				onChange={handlePageChange}
				color="primary"
				variant="outlined"
				shape="rounded"
			/>
		</Container>
	);
}
