import { Grid } from '@mui/material';
import CardViewTodoList from '../CardViewTodoList/CardViewTodoList';
import PropTypes from 'prop-types';

export default function CardView({ todoLists }) {
	return (
		<Grid container spacing={3} rowSpacing={5} p={5}>
			{todoLists.map(({ id, name, todos }) => (
				<CardViewTodoList key={id} id={id} name={name} todos={todos} />
			))}
		</Grid>
	);
}

CardView.propTypes = {
	todoLists: PropTypes.array,
};
