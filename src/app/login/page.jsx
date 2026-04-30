import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const SignInPage = () => {
    return (
        <div className="flex flex-col justify-center min-h-[50vh]">
            <h2 className="text-3xl font-bold text-center">Login Page</h2>
            <div className="mt-8 flex justify-center mb-5">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">

                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Enter Your Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter Your Password" />

                    <button className="btn bg-pink-800 hover:bg-pink-500 text-white rounded-full mt-4">Login</button>

                    <div className="my-2 space-y-2">
                        <p className="text-center font-semibold text-sm">Don't have a account? <span className="text-pink-700 font-semibold cursor-pointer"><Link href={'/register'}>Register</Link></span></p>
                        <p className="text-center font-semibold text-sm">or</p>
                        <p><button className="btn bg-purple-600 hover:bg-purple-500 p-4 text-white w-full rounded-full"><FaGoogle /> Continue with Google</button></p>
                    </div>

                </fieldset>
            </div>
        </div>
    );
};

export default SignInPage;