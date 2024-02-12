import { useEffect, useState } from "react";
import { USERS_API } from "../../api/api";
import Title from "../../components/Title";
import Badge from "../../components/Badge";
import Progress from "../shared/Progress";
import User from "./User";
import Sorting from "../../components/Sorting";
import Search from "../../components/Search";
import AddUser from "./AddUser";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [originalUsers, setOriginalUsers] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchUsers() {
			try {
				const res = await fetch(USERS_API, { signal });
				const data = await res.json();

				setUsers(data.users);
				setOriginalUsers(data.users);
			} catch (error) {
				console.error("Error fetching users:", error.message);
			}
		}

		fetchUsers();

		return () => {
			controller.abort();
		};
	}, []);

	const handleSort = (event) => {
		const sortType = event.target.value;

		if (sortType === "name") {
			const sortedList = [...users].sort((a, b) => {
				if (a.username < b.username) {
					return -1;
				} else if (a.username > b.username) {
					return 1;
				}
				return 0;
			});

			setUsers(sortedList);
		} else if (sortType === "email") {
			const sortedList = [...users].sort((a, b) => {
				if (a.email < b.email) {
					return -1;
				} else if (a.email > b.email) {
					return 1;
				}
				return 0;
			});
			setUsers(sortedList);
		} else if (sortType === "company") {
			const sortedList = [...users].sort((a, b) => {
				if (a.company.name < b.company.name) {
					return -1;
				} else if (a.company.name > b.company.name) {
					return 1;
				}
				return 0;
			});
			setUsers(sortedList);
		}
	};

	const handleUserSearch = (event) => {
		const searchTerm = event.target.value.toLowerCase();

		const filteredUsers = [...originalUsers].filter((user) => user.username.toLowerCase().includes(searchTerm));

		if (!searchTerm) setUsers(originalUsers);
		else setUsers(filteredUsers);
	};

	const handleAddUser = (user) => {
		// console.log(user);
		user = { ...user, id: originalUsers.length + 1 };

		setUsers((originalUsers) => [...originalUsers, user]);
		setOriginalUsers((originalUsers) => [...originalUsers, { ...user, user }]);
	};

	return (
		<div className="w-5/6 mx-auto tablet:w-full tablet:px-4 laptop:max-w-7xl">
			{/* Search User Name, Filter */}
			<div className="flex justify-end mt-20">
				<div className="max-w-sm flex gap-2 flex-col sm:flex-row ">
					<Search handleUserSearch={handleUserSearch} users={users} />
					<Sorting handleSort={handleSort} position="end" />
				</div>
			</div>
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

			{/* Add user */}
			<div className="my-20 space-y-8">
				<Title title="Add User" position="center" />
				<AddUser handleAddUser={handleAddUser}></AddUser>
			</div>
		</div>
	);
};

export default Users;
