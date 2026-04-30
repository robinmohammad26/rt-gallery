'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;


    const handleLogout = async () => {
        await authClient.signOut();
    }

    const navLinks = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/all-tiles'}>All Tiles</Link></li>
        <li><Link href={'/my-profile'}>My Profile</Link></li>
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-sky-200 rounded-full px-6 my-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl font-bold">RT Gallery</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    { user ?
                         <><div className="avatar avatar-online">
                            <div className="w-12 rounded-full relative aspect-square">
                                <Image 
                                    src={user.image}
                                    fill
                                    className="object-cover"
                                    alt="user Image"
                                />
                            </div>
                        </div><div>
                                <button onClick={handleLogout} className="px-6 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-600"><Link href={'/'}>Logout</Link></button>
                            </div></> :

                            <div>
                                <button className="px-6 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-600"><Link href={'/login'}>Login</Link></button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;