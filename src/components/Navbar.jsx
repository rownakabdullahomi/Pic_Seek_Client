import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PIC_SEEK</a>
      </div>
      <div className="flex-none">
        <ul className="px-1">
          <li className="flex gap-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/generate"}>Generate Images</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
