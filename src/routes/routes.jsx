import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { ROOT, USERS } from "./routes";
import ErrorPage from "../pages/shared/ErrorPage";
import SingleUser from "../pages/users/SingleUser";
import Users from "../pages/users/Users";

const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: ROOT,
				element: <Navigate to={USERS} />,
			},
			{
				path: USERS,
				element: <Users />,
			},
			{
				path: `${USERS}/:id`,
				element: <SingleUser />,
			},
		],
	},
]);

export default router;
