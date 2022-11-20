import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = res.json(res);
            return data;
        }
    })
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(formData => {
                if (formData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: formData.data.url
                    }
                    // save doctor to the database
                    fetch("http://localhost:5000/doctors", {
                        method: "POST",
                        headers: {
                            "content-type": "Application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} added successfully`);
                            navigate("/dashboard/managedoctors");
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h3 className='text-3xl'>Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select {...register("specialty", { required: "Option is required" })} className="select input-bordered w-full max-w-xs mb-6">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >
                                {specialty.name}
                            </option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is required",
                    })} className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;