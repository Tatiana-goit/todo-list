import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CreateTodoListPage from './pages/CreateTodoListPage/CreateTodoListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistarationPage';

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
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/registration',
		element: <RegistrationPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
