import { IMGBB_API } from "../../api/api";
import toast from "react-hot-toast";

const AddUser = ({ handleAddUser }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData(e.target);
		const photo = form.get("image");

		const data = new FormData();
		data.append("image", photo);

		try {
			const res = await fetch(`${IMGBB_API}?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
				method: "POST",
				body: data,
			});
			const imageData = await res.json();
			// console.log(imageData.data.url);
			const image = imageData.data.url;
			const firstName = e.target.firstName.value;
			const lastName = e.target.lastName.value;
			const username = firstName + " " + lastName;
			const email = e.target.email.value;
			const company = e.target.company.value;
			const street = e.target.street.value;
			const suite = e.target.suite.value;
			const city = e.target.city.value;

			// console.log({ firstName }, { lastName }, { username }, { email }, { company }, { street }, { city }, { suite }, { image });

			const newUser = {
				firstName,
				lastName,
				username: username.toLowerCase(),
				email,
				company: {
					name: company,
				},
				address: {
					address: street,
					city,
					suite,
				},
				image,
			};

			handleAddUser(newUser);

			e.target.firstName.value = "";
			e.target.lastName.value = "";
			e.target.email.value = "";
			e.target.company.value = "";
			e.target.street.value = "";
			e.target.suite.value = "";
			e.target.city.value = "";
			e.target.image.value = "";

			toast.success("Successfully added!");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md max-w-xl mx-auto">
			<div className="mb-4">
				<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="company" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Company
				</label>
				<input
					type="text"
					id="company"
					name="company"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="street" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Street
				</label>
				<input
					type="text"
					id="street"
					name="street"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="suite" className="block text-sm font-medium text-gray-700">
					Suite
				</label>
				<input
					type="text"
					id="suite"
					name="suite"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="city" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ">
					City
				</label>
				<input
					type="text"
					id="city"
					name="city"
					className="border px-3 py-2 text-sm mt-1 w-full rounded-md focus:outline-none focus:ring-1 focus:border-sky-500"
					required
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="image" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Avatar
				</label>
				<input
					type="file"
					id="image"
					name="image"
					accept="image/*"
					className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-violet-100 border px-3 py-2 mt-1  rounded-md focus:outline-none focus:ring-1 focus:border-y-sky-500"
					required
				/>
			</div>
			<div className="flex justify-end">
				<button
					type="submit"
					className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-1 focus:border-sky-500"
				>
					Add User
				</button>
			</div>
		</form>
	);
};

export default AddUser;
