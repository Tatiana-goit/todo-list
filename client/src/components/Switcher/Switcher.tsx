import React from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface Props {
	viewVersion: string;
	handleChange(event: React.MouseEvent<HTMLElement>, viewVersion: string): void;
}

export default function Switcher({ viewVersion, handleChange }: Props) {
	return (
		<ToggleButtonGroup value={viewVersion} onChange={handleChange} exclusive>
			<ToggleButton value="card" aria-label="card">
				<ViewModuleIcon fontSize="medium" />
			</ToggleButton>
			<ToggleButton value="list" aria-label="list">
				<ViewHeadlineIcon fontSize="medium" />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
