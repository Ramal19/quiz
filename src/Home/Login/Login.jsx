import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'

export const Login = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        axios.post("http://localhost:8000/login/", data)
        reset()
    }

    return (
        <div className="login">
            <div className="background">

                <h1>Login</h1>

                <form className='loginAdd' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='enter your name' />
                    {errors.name && <span>enter your name</span>}


                    <input {...register("surname", { required: true })} placeholder='enter your surname' />
                    {errors.surname && <span>enter your surname</span>}

                    <input type='email' {...register("email", { required: true })} placeholder='enter your email' />
                    {errors.email && <span>enter your email</span>}

                    <input type='password' {...register("password", { required: true })} placeholder='enter password' />
                    {errors.password && <span>enter password</span>}

                    <input type="submit" />
                </form>

            </div>
        </div>
    )
}
