import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';

export default function Switcher({ viewVersion, handleChangeViewVersion }) {
	return (
		<ToggleButtonGroup
			value={viewVersion}
			onChange={handleChangeViewVersion}
			exclusive
		>
			<ToggleButton value="card" aria-label="card">
				<ViewModuleIcon fontSize="medium" />
			</ToggleButton>
			<ToggleButton value="list" aria-label="list">
				<ViewHeadlineIcon fontSize="medium" />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

Switcher.propTypes = {
	viewVersion: PropTypes.string.isRequired,
	handleChangeViewVersion: PropTypes.func.isRequired,
};
