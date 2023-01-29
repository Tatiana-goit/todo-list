import { createContext, ReactNode, useContext, useState } from 'react';

interface Props {
	children?: ReactNode;
}

const SettingsContext = createContext<{
	view: string;
	listsOnPage: number;
	toggleView: (viewType: string) => void;
	changeListsOnPage: (items: number) => void;
} | null>(null);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: Props) => {
	const [view, setView] = useState('card');
	const [listsOnPage, setListsOnPage] = useState(6);

	const toggleView = (viewType: string) => {
		setView(viewType);
	};

	const changeListsOnPage = (items: number) => {
		setListsOnPage(items);
	};

	return (
		<SettingsContext.Provider
			value={{ view, listsOnPage, toggleView, changeListsOnPage }}
		>
			{children}
		</SettingsContext.Provider>
	);
};
