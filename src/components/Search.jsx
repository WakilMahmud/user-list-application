import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
const Search = ({ handleUserSearch, users }) => {
	const [show, setShow] = useState(true);
	return (
		<div className="relative flex-1">
			<label>
				<input
					type="search"
					list="usernames"
					className="border w-full px-3 py-2 placeholder:text-slate-400   border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
					placeholder="Search user"
					onChange={handleUserSearch}
					onFocus={() => setShow(false)}
					onBlur={() => setShow(true)}
				/>

				{show && (
					<span className="absolute inset-y-0 right-0 flex items-center px-2">
						<HiOutlineSearch />
					</span>
				)}
			</label>

			<datalist id="usernames">
				{users?.map((user) => (
					<option key={user.id} value={user.username} />
				))}
			</datalist>
		</div>
	);
};

export default Search;
