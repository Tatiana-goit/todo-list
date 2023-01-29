import {
	Container,
	Box,
	TextField,
	Button,
	Typography,
	Checkbox,
	Link,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { login } from '../../services/authApi';
import Header from '../../components/Header/Header';
import { useAuthContext } from '../../context/authContext';

interface FormFields {
	email: string;
	password: string;
}

const schema = object({
	email: string().email().required(),
	password: string().required(),
});

export default function LoginPage() {
	const { control, handleSubmit } = useForm<FormFields>({
		resolver: yupResolver(schema),
	});
	const auth = useAuthContext();

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const response = await login(data);
		auth?.changeAuthInfo({ ...auth.authInfo, isLoggedIn: true, ...response });
	};

	return (
		<>
			<Header />
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					opacity: '0.9',
				}}
				disableGutters
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					width="600px"
					mt={10}
					sx={{
						borderRadius: '4px',
						boxShadow:
							'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
					}}
				>
					<Box>
						<Typography
							textAlign="center"
							variant="h6"
							textTransform="uppercase"
							color="text.secondary"
							bgcolor="primary.main"
							p={3}
						>
							Login
						</Typography>
					</Box>
					<Box
						onSubmit={handleSubmit(onSubmit)}
						component="form"
						display="flex"
						flexDirection="column"
						rowGap={3}
						p={4}
					>
						<Controller
							control={control}
							name="email"
							defaultValue=""
							render={({
								field: { onChange, value, ref },
								fieldState: { error, invalid },
							}) => (
								<TextField
									error={invalid}
									helperText={error?.message}
									label="Email"
									type={'email'}
									onChange={onChange}
									value={value}
									inputRef={ref}
									fullWidth
								/>
							)}
						/>
						<Controller
							control={control}
							name="password"
							defaultValue=""
							render={({
								field: { onChange, value, ref },
								fieldState: { error, invalid },
							}) => (
								<TextField
									error={invalid}
									helperText={error?.message}
									label="Password"
									type="password"
									onChange={onChange}
									value={value}
									inputRef={ref}
									fullWidth
								/>
							)}
						/>
						<Box display="flex" alignItems="center">
							<Checkbox edge="start" disableRipple />
							<Typography>Remember me</Typography>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
						>
							<Button type="submit" variant="contained" size="large" fullWidth>
								Login
							</Button>
						</Box>
						<Box display="flex">
							Don't have an account?
							<Link
								component={RouterLink}
								to="/registration"
								color="text.primary"
								ml={1}
							>
								Registration
							</Link>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
}
