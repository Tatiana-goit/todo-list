import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CreateTodoListPage from './pages/CreateTodoListPage/CreateTodoListPage';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/todolist/create',
		element: <CreateTodoListPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
