import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
    return ( 
        <nav className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost text-xl">Srikandi</Link>
            </div>
            <div className="flex-none gap-2">
                <CartIcon></CartIcon>
                <div className="dropdown dropdown-end mr-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={100} height={100} />
                    </div>
                    </div>
                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
      </nav>
    );
}
 
export default Navbar;