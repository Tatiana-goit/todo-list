import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, IconButton } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { object, string } from 'yup';
import { DateTime } from 'luxon';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header/Header';
import { save, load, remove } from '../../services/localStorage';
import { createTodoList } from '../../services/api';

interface FormFields {
	name: string;
	task: string;
}

interface Task {
	text: string;
	createdDate: string;
}

const schema = object({
	name: string().required(),
	task: string(),
});

export default function CreateTodoListPage() {
	const navigate = useNavigate();

	const [tasks, setTasks] = useState<Task[]>([]);

	const currentDate = DateTime.now().toFormat('dd MMM yyyy, T');

	const { handleSubmit, control, watch, setValue, reset, getValues } =
		useForm<FormFields>({
			resolver: yupResolver(schema),
		});

	useFormPersist('createTodoList', {
		watch,
		setValue,
		storage: window.localStorage,
	});

	useEffect(() => {
		const savedTasks = load('tasks');
		if (savedTasks) {
			setTasks(savedTasks);
		}
	}, []);

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const todo = {
			name: data.name,
			todos: data.task
				? [{ text: data.task, createdDate: currentDate }, ...tasks]
				: [...tasks],
		};

		const response = await createTodoList(todo);

		if (response?.statusText === 'Created') {
			setTasks([]);
			remove('createTodoList');
			remove('tasks');
			// toast.success('Maybe you want to create another Todo List', {
			// 	autoClose: 3000,
			// 	closeOnClick: true,
			// 	theme: 'colored',
			// });
			navigate('/');
		}
	};

	const handleAddTask = () => {
		const value = getValues('task');

		if (value.length > 0) {
			const updatedTasks = [
				...tasks,
				{ text: value, createdDate: currentDate },
			];
			setTasks(updatedTasks);
			reset((formValues) => ({ ...formValues, task: '' }));
			save('tasks', updatedTasks);
		}
	};

	const handleRemoveTask = (index: number) => {
		const tasksCopy = [...tasks];
		tasksCopy.splice(index, 1);
		setTasks(tasksCopy);
		save('tasks', tasksCopy);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') e.preventDefault();
	};

	const notify = () =>
		toast.success('You have successfully created a new Todo List', {
			autoClose: 3000,
			closeOnClick: true,
			theme: 'colored',
		});

	return (
		<>
			<Header />
			<Button
				component={RouterLink}
				to="/"
				variant="contained"
				sx={{ ml: 5, mt: '50px' }}
			>
				<ArrowLeftIcon sx={{ mr: 1 }} />
				Back
			</Button>
			<Box display="flex" justifyContent="center" alignItems="center">
				<Box
					component="form"
					display="flex"
					flexDirection="column"
					rowGap={3}
					width={1000}
					p={3}
					mt={8}
					onSubmit={handleSubmit(onSubmit)}
					onKeyDown={handleKeyDown}
				>
					<Box display="flex" justifyContent="space-between">
						<Controller
							control={control}
							name="name"
							defaultValue=""
							render={({
								field: { onChange, value, ref },
								fieldState: { error, invalid },
							}) => (
								<TextField
									error={invalid}
									helperText={error?.message}
									label="Todo List Name"
									type="search"
									variant="standard"
									onChange={onChange}
									value={value}
									inputRef={ref}
									size="small"
									color="secondary"
									sx={{ width: 700 }}
								/>
							)}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ width: 230 }}
							onClick={notify}
						>
							<AddIcon sx={{ mr: 1 }} />
							Create new todo list
						</Button>
					</Box>

					<Box display="flex" justifyContent="space-between" mt={6}>
						<Controller
							control={control}
							name="task"
							defaultValue=""
							render={({
								field: { onChange, value, ref },
								fieldState: { error, invalid },
							}) => (
								<TextField
									label="Todo"
									value={value}
									onChange={onChange}
									inputRef={ref}
									error={invalid}
									helperText={error?.message}
									size="small"
									color="secondary"
									onKeyDown={(e) => {
										if (e.code === 'Enter') {
											handleAddTask();
										}
									}}
									required={tasks.length === 0 ? true : false}
									sx={{ width: 700 }}
								/>
							)}
						/>
						<Button
							variant="contained"
							color="secondary"
							onClick={handleAddTask}
							sx={{ width: 230 }}
						>
							<AddIcon sx={{ mr: 1 }} />
							Add task
						</Button>
					</Box>
					{tasks.length > 0 &&
						tasks.map((task, index) => {
							return (
								<Box key={index} display="flex">
									<TextField
										value={task.text}
										size="small"
										color="primary"
										sx={{ width: 670 }}
									/>
									<IconButton
										onClick={() => {
											handleRemoveTask(index);
										}}
										color="primary"
									>
										<DeleteIcon />
									</IconButton>
								</Box>
							);
						})}
				</Box>
			</Box>
			<ToastContainer />
		</>
	);
}
