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
        <li><Link href={'/myProfile'}>My Profile</Link></li>
    </>

    return (
        <div className="container mx-auto py-10">
            <div className="navbar bg-white rounded-full px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="max-md:hidden">
                        <Link className="bg-pink-800 rounded-full text-white px-6 py-3 font-bold" href={'/'}>RT Gallery</Link>
                    </div>
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
                            <Link href={'/'}>
                                <button onClick={handleLogout} className="px-6 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-600">Logout</button>
                            </Link>
                            </div></> :

                            <div className="flex gap-2">
                                <Link href={'/login'}>
                                <button className="px-6 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-600 cursor-pointer">Login</button>
                                </Link>
                                <Link href={'/register'}>
                                <button className="px-6 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-600 cursor-pointer">Register</button>
                                </Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;