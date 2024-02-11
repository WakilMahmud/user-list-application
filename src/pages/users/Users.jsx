import { useEffect, useState } from "react";
import { USERS_API } from "../../api/api";
import Title from "../../components/Title";
import Badge from "../../components/Badge";
import Progress from "../shared/Progress";
import User from "./User";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchUsers() {
			try {
				const res = await fetch(USERS_API, { signal });
				const data = await res.json();

				setUsers(data.users);
			} catch (error) {
				console.error("Error fetching users:", error.message);
			}
		}

		fetchUsers();

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<div className="w-5/6 mx-auto tablet:w-full tablet:px-4 laptop:max-w-7xl">
			<div className="flex items-center gap-2 my-3">
				<Title title="Users" />
				<Badge length={users.length}></Badge>
			</div>

			{/* Users */}
			{users.length ? (
				<div className=" grid gap-4  grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
					{users?.map((user) => (
						<User key={user.id} user={user}></User>
					))}
				</div>
			) : (
				<Progress></Progress>
			)}
		</div>
	);
};

export default Users;
