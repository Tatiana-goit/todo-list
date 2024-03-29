import React from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface Props {
	view: string;
	handleChange(viewType: string): void;
}

export default function Switcher({ view, handleChange }: Props) {
	return (
		<ToggleButtonGroup
			value={view}
			onChange={(e, value) => {
				handleChange(value);
			}}
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
