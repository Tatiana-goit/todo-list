import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ListViewTodoList from '../ListViewTodoList/ListViewTodoList';

export default function ListView({ todoLists }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: 5,
			}}
		>
			{todoLists.map(({ id, name }) => (
				<ListViewTodoList key={id} id={id} name={name} />
			))}
		</Box>
	);
}

ListView.propTypes = {
	todoLists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			todos: PropTypes.array,
		})
	),
};
