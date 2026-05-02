'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const LoginPage = () => {

    const handleLoginForm = async (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });


        if (error) {
            toast.warning('Wrong User Or Password!')
        }
    }


    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

    }



    return (
        <div className="flex flex-col justify-center min-h-[50vh]">
            <h2 className="text-3xl font-bold text-center text-white">Login Page</h2>
            <div className="mt-8 flex justify-center mb-5 w-[500px] mx-auto">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">

                    <form className="space-y-3" onSubmit={handleLoginForm}>
                        <label className="label">Email</label>
                        <input type="email" className="input w-full validator" name="email" placeholder="Enter Your Email" required />
                        <p className="validator-hint hidden">Required Provide Valid Email</p>

                        <label className="label">Password</label>
                        <input type="password" className="input w-full validator" name="password" placeholder="Enter Your Password" required />
                        <span className="validator-hint hidden">Required</span>

                        <button className="btn bg-pink-800 hover:bg-pink-500 text-white rounded-full mt-4 w-full">Login</button>

                        <div className="my-2 space-y-2">
                            <p className="text-center font-semibold text-sm">Don&apos;t have a account? <span className="text-pink-700 font-semibold cursor-pointer"><Link href={'/register'}>Register</Link></span></p>
                            <p className="text-center font-semibold text-sm">or</p>
                            <p><button type="button" onClick={handleGoogleLogin} className="btn bg-purple-600 hover:bg-purple-500 p-4 text-white w-full rounded-full"><FaGoogle /> Continue with Google</button></p>
                        </div>
                    </form>

                </fieldset>
            </div>
        </div>
    );
};

export default LoginPage;