import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface Props {
	setListsOnPage(event: SelectChangeEvent): void;
	listsOnPage: string;
}

export default function CountLists({ setListsOnPage, listsOnPage }: Props) {
	return (
		<Box sx={{ minWidth: 64, mr: 5 }}>
			<FormControl fullWidth color="secondary" sx={{ m: 1 }} size="small">
				<InputLabel id="demo-simple-select-label">Count</InputLabel>
				<Select
					value={listsOnPage}
					onChange={setListsOnPage}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Count"
					sx={{ textAlign: 'center' }}
				>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={6}>6</MenuItem>
					<MenuItem value={9}>9</MenuItem>
					<MenuItem value={12}>12</MenuItem>
					<MenuItem value={24}>24</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
