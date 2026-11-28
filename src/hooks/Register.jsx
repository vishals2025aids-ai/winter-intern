
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z.object({
    name: z.string().min(3, {
        message: "Name should be at least 3 characters long"
    }),

    email: z.string().email({
        message: "Invalid email address"
    }),

    password: z.string().min(6, {
        message: "Password should be at least 6 characters long"
    })
})

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data) => {
        console.log("Registration Details:", data)
        alert("Registration Successful!")
    }

    return (
        <div className="flex flex-col items-center justify-center p-6">

            <h1 className="text-2xl font-bold mb-4">
                Register Form
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 w-80"
            >

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className="border p-2 rounded"
                />
                {errors.name && (
                    <p className="text-red-500">
                        {errors.name.message}
                    </p>
                )}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="border p-2 rounded"
                />
                {errors.email && (
                    <p className="text-red-500">
                        {errors.email.message}
                    </p>
                )}

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className="border p-2 rounded"
                />
                {errors.password && (
                    <p className="text-red-500">
                        {errors.password.message}
                    </p>
                )}

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    SUBMIT
                </button>

            </form>
        </div>
    )
}

export default Register
