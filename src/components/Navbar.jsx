import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PIC_SEEK</a>
      </div>
      <div className="flex-none">
        <ul className="px-1">
          <li className="flex gap-6">
            <Link>Home</Link>
            <Link>All Images</Link>
            <Link>Generate Images</Link>
            <Link>Login</Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
