'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";


const RegisterPage = () => {

    const handleRegisterForm = async(e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if(error){
            toast.warning('User Register Failed')
        }
        else if(data){
            toast.success(`${data.user.name} Register Successfully`)
        }
    }

    return (
        <div className="flex flex-col justify-center min-h-[50vh]">
            <h2 className="text-3xl font-bold text-center">Registration Page</h2>
            <div className="mt-8 flex justify-center mb-5">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">

                    <form className="space-y-3" onSubmit={handleRegisterForm}>
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name="name" placeholder="Enter Your Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input w-full" name="email" placeholder="Enter Your Email" />

                        <label className="label">Photo</label>
                        <input type="photo" className="input w-full" name="image" placeholder="Enter Photo URL" />

                        <label className="label">Password</label>
                        <input type="password" className="input w-full" name="password" placeholder="Enter Your Password" />

                        <button className="btn bg-pink-800 hover:bg-pink-500 text-white rounded-full mt-4 w-full">Register</button>
                    </form>

                    <div className="my-2 space-y-2">
                        <p className="text-center font-semibold text-sm">Already have a account? <span className="text-pink-700 font-semibold cursor-pointer"><Link href={'/login'}>Login</Link></span></p>
                    </div>

                </fieldset>
            </div>
        </div>
    );
};

export default RegisterPage;