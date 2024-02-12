import { IMGBB_API } from "../../api/api";
import toast from "react-hot-toast";
import InputBox from "../../components/InputBox";

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
			toast.error("Something went wrong");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md max-w-xl mx-auto">
			<InputBox htmlFor="firstName" type="text" label="First Name" labelClasses="my-custom-after-content" required={true}></InputBox>
			<InputBox htmlFor="lastName" type="text" label="Last Name"></InputBox>
			<InputBox htmlFor="email" type="email" label="Email" labelClasses="my-custom-after-content" required={true}></InputBox>
			<InputBox htmlFor="company" type="text" label="Company" labelClasses="my-custom-after-content" required={true}></InputBox>
			<InputBox htmlFor="street" type="text" label="Street" labelClasses="my-custom-after-content" required={true}></InputBox>
			<InputBox htmlFor="suite" type="text" label="Suite"></InputBox>
			<InputBox htmlFor="city" type="text" label="City" labelClasses="my-custom-after-content" required={true}></InputBox>

			<div className="mb-4">
				<label htmlFor="image" className="my-custom-label-style my-custom-after-content">
					Avatar
				</label>
				<input
					type="file"
					id="image"
					name="image"
					accept="image/*"
					className="my-custom-input-style block text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-violet-100"
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
