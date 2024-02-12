import { useLocation } from "react-router-dom";

const SingleUser = () => {
	let { state: user } = useLocation();
	const { image, firstName, lastName, username, email, company, address } = user;

	return (
		<div className="mx-auto flex flex-col gap-4 my-16  px-2 justify-between rounded-md text-wrap tablet:flex-row  laptop:max-w-7xl">
			<div className="w-full flex flex-col gap-4 justify-center items-center border rounded-md shadow-sm  tablet:w-1/4">
				<img src={image} alt="Avatar" className="size-36 mt-4 rounded-full" />
				<div className="mb-8 w-full text-center">
					<h1 className="font-bold text-lg first-letter:uppercase">{username}</h1>
					<p className="text-gray-500 text-sm">{company.name}</p>
				</div>
			</div>
			<div className="w-full px-4 flex flex-col justify-center divide-y border rounded-md shadow-sm text-sm tablet:w-4/5">
				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">First Name</h1>
					<p className="w-3/5 text-gray-500">{firstName}</p>
				</div>
				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">Last Name</h1>
					<p className="w-3/5 text-gray-500">{lastName}</p>
				</div>
				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">User Name</h1>
					<p className="w-3/5 text-gray-500 first-letter:uppercase">{username}</p>
				</div>

				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">Email</h1>
					<p className="w-3/5 text-gray-500 truncate">{email}</p>
				</div>
				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">Company</h1>
					<p className="w-3/5 text-gray-500">{company.name}</p>
				</div>
				<div className="flex gap-2 py-2">
					<h1 className="w-2/5 tablet:w-1/5 font-bold">Address</h1>
					<p className="w-3/5  text-gray-500">
						{address.address}
						{address?.suite && `, Suite ${address.suite}`}, {address.city}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleUser;
