import React from 'react';
import { DateTime } from 'luxon';
import {
	List,
	ListItem,
	Checkbox,
	Card,
	CardContent,
	Typography,
	Grid,
	Box,
	CardHeader,
	Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../../shared/interfaces/todolist.interfaces';

interface Props {
	id: number;
	name: string;
	todos: Todo[];
}

export default function CardViewList({ id, name, todos }: Props) {
	return (
		<Grid item key={id} xs={12} sm={6} md={4}>
			<Card sx={{ height: '278px' }}>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						bgcolor: 'secondary.main',
					}}
				>
					<CardHeader
						title={
							<Typography
								sx={{
									color: 'text.primary',
									fontSize: 22,
									pt: 1,
									pb: 1,
								}}
							>
								{name}
							</Typography>
						}
					/>
					<DeleteIcon sx={{ mr: 3 }} />
				</Container>

				<CardContent sx={{ height: '186px', overflowY: 'scroll' }}>
					<List>
						{todos.map(({ _id, text, isDone, createdDate }) => {
							const date = DateTime.fromFormat(
								createdDate,
								'dd MMM yyyy, T'
							).toFormat('dd MMM');
							return (
								<ListItem
									key={id}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										pr: 0,
										pt: 0,
									}}
								>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<Checkbox edge="start" checked={isDone} disableRipple />
										<Typography sx={{ fontSize: 14 }}>{text}</Typography>
									</Box>
									<Box
										component="span"
										sx={{
											display: 'flex',
											justifyContent: 'flex-end',
											fontSize: 14,
											width: 60,
											ml: 2,
										}}
									>
										{date}
									</Box>
								</ListItem>
							);
						})}
					</List>
				</CardContent>
			</Card>
		</Grid>
	);
}
