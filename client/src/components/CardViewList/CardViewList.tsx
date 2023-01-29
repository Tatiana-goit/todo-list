import React from 'react';
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
	ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTime } from 'luxon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Todo } from '../../shared/interfaces/todolist.interfaces';
import { deleteTodoList } from '../../services/api';

interface Props {
	id: string;
	name: string;
	todos: Todo[];
}

export default function CardViewList({ id, name, todos }: Props) {
	const handleDeleteTodoList = (id: string) => {
		deleteTodoList(id);

		location.reload();
		toast.success('You have successfully deleted Todo List', {
			position: 'top-right',
			autoClose: 2000,
			closeOnClick: true,
			theme: 'colored',
		});
	};

	return (
		<Grid item key={id} xs={12} sm={6} md={4}>
			<Card sx={{ height: '240px' }}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					bgcolor="secondary.main"
				>
					<CardHeader
						title={
							<Typography
								sx={{
									color: 'text.primary',
									fontSize: 22,
									pl: 2,
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

				<CardContent sx={{ height: '186px', overflowY: 'scroll' }}>
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
										pr: 0,
										pt: 0,
									}}
								>
									<Box display="flex" alignItems="center">
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
										display="flex"
										justifyContent="flex-end"
										fontSize={14}
										width={60}
										ml={2}
									>
										{date}
									</Box>
								</ListItem>
							);
						})}
					</List>
				</CardContent>
			</Card>
			<ToastContainer />
		</Grid>
	);
}
