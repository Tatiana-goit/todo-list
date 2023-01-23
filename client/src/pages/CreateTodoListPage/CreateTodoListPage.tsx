import { Box, TextField, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Header from '../../components/Header/Header';
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';

interface FormFields {
	name: string;
	todo: string;
}

const schema = object({
	name: string().required(),
	task: string().required(),
});

export default function CreateTodoListPage() {
	const { handleSubmit, control } = useForm<FormFields>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<>
			<Header />
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
				>
					<Box display="flex" justifyContent="space-between">
						<Controller
							control={control}
							name="name"
							defaultValue={''}
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
									color="primary"
									sx={{ width: 700 }}
								/>
							)}
						/>
						<ButtonCreate />
					</Box>

					<Box display="flex" justifyContent="space-between" mt={6}>
						<Controller
							control={control}
							name="todo"
							defaultValue={''}
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
									sx={{ width: 700 }}
								/>
							)}
						/>
						<Button variant="contained" color="secondary" sx={{ width: 230 }}>
							<AddIcon sx={{ mr: 1 }} />
							Add task
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
