import { FaPhone } from "react-icons/fa";
import logo from "../../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex-1 flex gap-24">
        <a href="index.html" className="">
          <img src={logo} alt="Redx" />
        </a>
        <div className="flex flex-row gap-5">
          <a href="#" className="text-xl">
            এন্টারপ্রাইজ
          </a>
          <a href="#" className="text-xl">
            কুরিয়ার
          </a>
        </div>
      </div>
      <div className="flex-none">
        <div className="flex items-center gap-5">
          <p className="text-xl flex gap-4">
            <span className="text-red-500">
              <FaPhone />
            </span>{" "}
            কল করুন
            <span className="text-red-500">০৯৬১০০০৭৩৩৯</span>
          </p>
          <a className="btn btn-outline btn-error text-xl">লগ ইন </a>
        </div>
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaLuggageCart className="cartIcon"/>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt="Azad Hossain" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
