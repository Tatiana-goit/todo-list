import React from 'react';
import {
	List,
	ListItem,
	Checkbox,
	Card,
	Typography,
	Box,
	CardHeader,
	ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTime } from 'luxon';
import { Todo } from '../../shared/interfaces/todolist.interfaces';
import { deleteTodoList } from '../../services/api';

interface Props {
	id: string;
	name: string;
	todos: Todo[];
}

export default function ListViewList({ id, name, todos }: Props) {
	const handleDeleteTodoList = (id: string) => {
		deleteTodoList(id);
		location.reload();
	};

	return (
		<Card
			key={id}
			sx={{
				maxHeight: '200px',
				width: '800px',
				mb: 3,
			}}
		>
			<Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						bgcolor: 'secondary.main',
					}}
				>
					<CardHeader
						sx={{ p: 2 }}
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
					<Box
						onClick={() => {
							handleDeleteTodoList(id);
						}}
						sx={{ cursor: 'pointer' }}
					>
						<DeleteIcon sx={{ mr: 3 }} />
					</Box>
				</Box>

				<Box sx={{ overflowY: 'scroll', pl: 2, pr: 2 }}>
					<List>
						{todos.map(({ _id, text, isDone, createdDate }) => {
							const date = DateTime.fromFormat(
								createdDate,
								'dd MMM yyyy, T'
							).toFormat('dd MMM');
							return (
								<ListItem
									key={_id}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										p: 0,
									}}
								>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<Checkbox edge="start" checked={isDone} disableRipple />
										<ListItemText
											primary={text}
											sx={[
												{
													display: 'inline-flex',
													fontSize: 14,
												},
												() => {
													return isDone
														? { textDecoration: 'line-through' }
														: null;
												},
											]}
										/>
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
				</Box>
			</Box>
		</Card>
	);
}
