import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("")
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data);
        setLoginError("")
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(err => {
                console.error(err)
                setLoginError(err.message);
            })
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 character length or more" }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    {
                        loginError && <p className='my-3 text-red-500'>{loginError}</p>
                    }
                </form>
                <p>New to Doctor's portal ? <Link to="/signup" className='text-secondary font-bold'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;