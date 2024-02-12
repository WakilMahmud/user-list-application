import React from "react";

const InputBox = ({ htmlFor, type, label, labelClasses = "", inputClasses = "", required = false }) => {
	return (
		<div className="mb-4">
			<label htmlFor={htmlFor} className={`my-custom-label-style ${labelClasses}`}>
				{label}
			</label>
			<input type={type} id={htmlFor} name={htmlFor} className={`my-custom-input-style ${inputClasses}`} required={required} />
		</div>
	);
};

export default InputBox;
