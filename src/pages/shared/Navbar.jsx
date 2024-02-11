import { Link } from "react-router-dom";
import { ROOT } from "../../routes/routes";
import { HiOutlineUsers } from "react-icons/hi";

const Navbar = () => {
	return (
		<nav className="h-24 flex items-center  shadow-lg bg-slate-50">
			<div className="w-5/6 mx-auto">
				<Link to={ROOT}>
					<HiOutlineUsers className="size-12"></HiOutlineUsers>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
