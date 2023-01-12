import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Pagination } from '@mui/material';

export default function PaginationTodoLists() {
	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
			<Pagination
				count={10}
				color="primary"
				variant="outlined"
				shape="rounded"
			/>
		</Container>
	);
}
