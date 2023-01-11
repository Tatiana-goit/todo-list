import { Card, Typography, CardHeader } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

export default function ListViewTodoList({ id, name }) {
	return (
		<Card
			key={id}
			sx={{
				height: '80px',
				width: '800px',
				marginBottom: 3,
				padding: 1,
				bgcolor: 'background.secondary',
			}}
		>
			<Box
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
			</Box>
		</Card>
	);
}

ListViewTodoList.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};
