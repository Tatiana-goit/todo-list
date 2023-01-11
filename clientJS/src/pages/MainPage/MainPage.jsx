import { useState } from 'react';
import Header from '../../components/Header/Header';
import CardView from '../../components/CardView/CardView';
import todoLists from '../../data/todoLists';
import ListView from '../../components/ListView/ListView';
import TodoListButton from '../../components/TodoListButton/TodoListButton';
import Switcher from '../../components/Switcher/Switcher';
import { Box } from '@mui/material';

export default function MainPage() {
	const [viewVersion, setViewVersion] = useState('card');

	function handleChange(_, nextViewVersion) {
		setViewVersion(nextViewVersion);
	}

	return (
		<>
			<Header />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: 5,
					paddingBottom: 0,
				}}
			>
				<TodoListButton />
				<Switcher
					viewVersion={viewVersion}
					handleChangeViewVersion={handleChange}
				/>
			</Box>
			{viewVersion === 'card' && <CardView todoLists={todoLists} />}
			{viewVersion === 'list' && <ListView todoLists={todoLists} />}
		</>
	);
}
