import { Link } from "react-router-dom";
import { USERS } from "../../routes/routes";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { RiBuilding4Fill } from "react-icons/ri";
const User = ({ user }) => {
	const { id, image, firstName, lastName, username, email, company, address } = user;
	return (
		<div className="flex flex-col  bg-slate-50 border rounded-lg shadow-md px-2 py-4 text-gray-500 tablet:gap-4 laptop:gap-2 laptop:flex-row laptop:items-center">
			<div className="flex items-center justify-center rounded-lg">
				<img src={image} alt="Avatar" className="rounded-lg  tablet:size-48 laptop:size-28" />
			</div>

			<div className="w-full flex flex-col text-xs space-y-0.5  pl-4  tablet:text-sm laptop:pl-0 laptop:text-xs desktop:text-sm">
				<div className="my-3">
					<Link to={`${USERS}/${id}`} state={user}>
						<span className="text-base text-sky-700">{username.toUpperCase()}</span>
					</Link>
					<p>
						{firstName} {lastName}
					</p>
				</div>

				<div className="flex items-center gap-2">
					<HiMail className="text-black" />
					<span>{email}</span>
				</div>

				<div className="flex items-center gap-2">
					<RiBuilding4Fill className="text-black" />
					<span>{company.name}</span>
				</div>

				<div className="flex items-center gap-2  ">
					<HiLocationMarker className="text-black" />
					<address>
						<span>
							{address.address}
							{address?.suite && `, Suite ${address.suite}`}, {address.city}
						</span>
					</address>
				</div>
			</div>
		</div>
	);
};

export default User;
