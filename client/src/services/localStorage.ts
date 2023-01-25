export function save(key: string, value: object) {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(key, serializedState);
	} catch (error) {
		console.error(error);
	}
}

export function load(key: string) {
	try {
		const serializedState = localStorage.getItem(key);
		return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (error) {
		console.error(error);
	}
}

export function remove(key: string) {
	try {
		localStorage.removeItem(key);
		console.log('delll');
	} catch (error) {
		console.log(error);
	}
}
