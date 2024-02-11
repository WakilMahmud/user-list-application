import { Link, useRouteError } from "react-router-dom";
import { ROOT } from "../../routes/routes";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
			<p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
			<p className="text-gray-600 mb-4">
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to={ROOT}>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
					Back To Home
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
