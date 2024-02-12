import React from "react";

const Info = ({ property, value, classes = "" }) => {
	return (
		<div className="flex gap-2 py-2">
			<h1 className="w-2/5 tablet:w-1/5 font-bold">{property}</h1>
			<p className={`w-3/5 text-gray-500 ${classes}`}>{value}</p>
		</div>
	);
};

export default Info;
