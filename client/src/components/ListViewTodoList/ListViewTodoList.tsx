import React from 'react';
import { Card, Typography, CardHeader } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';

interface Props {
	id: number;
	name: string;
}

export default function ListViewTodoList({ id, name }: Props) {
	return (
		<Card
			key={id}
			sx={{
				height: '80px',
				width: '800px',
				marginBottom: 3,
				padding: 1,
				bgcolor: 'secondary.main',
			}}
		>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<CardHeader
					title={
						<Typography
							sx={{
								color: 'text.primary',
								fontSize: 22,
							}}
						>
							{name}
						</Typography>
					}
				/>
				<DeleteIcon sx={{ marginRight: 1 }} />
			</Container>
		</Card>
	);
}
