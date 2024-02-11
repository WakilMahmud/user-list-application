import React from "react";

const Sorting = ({ handleSort, position = "start" }) => {
	return (
		<div className={`flex-1 justify-${position}`}>
			<select
				className="px-2 py-2 w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
				onChange={handleSort}
				defaultValue=""
			>
				<option value="" disabled>
					Sort by
				</option>
				<option value="name">Name</option>
				<option value="email">Email</option>
				<option value="company">Company</option>
			</select>
		</div>
	);
};

export default Sorting;
