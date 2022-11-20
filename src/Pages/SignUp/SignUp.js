import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/UseToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signupError, setSignupError] = useState("");
    const [createUserEmail, setCreateUserEmail] = useState('')
    const navigate = useNavigate()
    const [token] = useToken(createUserEmail);

    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        setSignupError("");
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(result => {
                        toast.success('User created Successfully!');
                        saveUser(data.name, data.email)
                    })
                    .catch(err => {
                        setSignupError(err.message)
                        console.err(err)
                    })
            })
            .catch(err => {
                setSignupError(err.message)
                console.error(err)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>SingUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is required",
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least six character long" },
                            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/, message: "Password must be a later, number and special character" }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value="Signup" type="submit" />
                    {
                        signupError && <p className='my-3 text-red-500'>{signupError}</p>
                    }
                </form>
                <p>Already have an account ? <Link to="/login" className='text-secondary font-bold'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;