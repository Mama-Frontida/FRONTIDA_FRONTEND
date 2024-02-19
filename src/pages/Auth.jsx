import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../contexts/AppContexts";
import CustomToast from "../components/toast";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from 'react-hook-form'
import { RiLockPasswordFill, RiLockPasswordLine, RiProfileLine, RiUser2Fill, RiUser3Fill } from "react-icons/ri";
import { MdEmail, MdInfo } from "react-icons/md";
function Auth() {
    const { login, signup, userData } = useContext(AppContext)
    const [errorMessage, setErrorMessage] = useState()

    const [inL, setIn] = useState(true)
    const navigate = useNavigate();

    console.log('userdata', userData)

    const signupEmailRef = useRef()
    const signupPass = useRef()

    const toggleAuth = () => {
        setIn(!inL)
    }


    const handleSignIn = async (data) => {

        const userData = {
            email: data.email,
            password: data.password,
        }
        try {
            await login(email, password);
            CustomToast({ type: 'success', message: 'User logged in successfully.' })
            navigate('/');

        } catch (error) {
            // Handle error (e.g., set error message)
            CustomToast({ type: 'danger', message: 'Login Failed' });
            setErrorMessage(error.message);
        }
    }

    async function handleSignUp(data) {

        const username = data.username
        const email = data.email
        const password = data.password

        try {
            // Await the login function and handle successful login
            await signup(username, email, password);

            CustomToast({ type: 'success', message: 'User account created successfully.' })
            navigate('/chat')

        } catch (error) {

            CustomToast({ type: 'danger', message: 'Sign up Failed' });
        }
    }

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const SignInForm = () => (
        <div className="w-full flex flex-row justify-center items-center h-full">
            <form
                onSubmit={handleSubmit(handleSignIn)}
                className="w-1/3 rounded-lg items-center flex flex-col ">
                <h2 className="text-5xl  w-3/4 text-center py-5"><b>Welcome back</b>, we missed you.</h2>
                <h3 className="text-xl font-base text-gray-800 text-center py-5">
                    Continue where you left off...
                </h3>
                <div className="flex flex-col w-full gap-5 items-center justify-center py-10">
                    <div className="flex flex-col gap-1 w-3/4">
                        <Label >Enter your email here:</Label>
                        <TextInput
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email Address is required.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address format.',
                                },
                            })}
                            className=" border  text-cream-900 text-sm rounded-lg  block w-full "
                            placeholder="sampleemail@gmail.com"
                            icon={RiUser3Fill}
                            color={errors.email?.message ? 'failure' : 'gray'}
                            helperText={errors.email?.message}
                        /></div>
                    <div className="flex flex-col gap-1 w-3/4">
                        <Label >Enter your password here:</Label>
                        <TextInput
                            type="password"
                            id="password"
                            icon={RiLockPasswordFill}
                            {...register('password', {
                                required: 'Password is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long.',
                                },
                            })}
                            className=" text-cream-900 text-sm rounded-lg  block w-full"
                            placeholder="*****************"
                            color={errors.password ? 'failure' : 'gray'}
                            helperText={errors.password?.message}
                        />
                    </div>

                </div>
                <div className="flex flex-col gap-3 w-full items-center">
                    <div className="flex flex-row-reverse w-10/12 lg:w-3/4 justify-between">
                        <Link to={""} onClick={toggleAuth} >Create an account?</Link>
                    </div>
                    <Button
                        type="submit"
                        color="dark"
                        pill
                        className=" text-white  w-fit px-10 font-semibold text-2xl">
                        Log In
                    </Button>
                </div>

            </form>
        </div>
    )
    const SignUpForm = () => (
        <div className="w-full  flex flex-row-reverse justify-center items-center h-fit">
            <form
                onSubmit={handleSubmit(handleSignUp)}
                className="w-1/3 card items-center flex flex-col gap-5 py-10">
                <h2 className="text-5xl  w-10/12 text-center py-5">Create a <b className="me-3 text-gray-700">free</b>
                    account with us</h2>
                <h3 className="text-xl font-medium text-center py-5">
                    Get started with an account to help us improve our services for you.
                </h3>
                <div className="flex w-full items-center flex-col gap-4">
                    <div className="flex flex-col gap-1 w-3/4">
                        <Label >Enter your username here:</Label>
                        <TextInput
                            type="text"
                            id="username"
                            {...register('username', {
                                required: 'Username is required.',
                            })}
                            className=" border  text-cream-900 text-sm rounded-lg  block w-full "
                            placeholder="Jane Doe"
                            icon={RiUser3Fill}
                            color={errors.username?.message ? 'failure' : 'gray'}
                            helperText={errors.username?.message}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-3/4">
                        <Label >Enter your email here:</Label>
                        <TextInput
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email Address is required.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address format.',
                                },
                            })}
                            className=" border  text-cream-900 text-sm rounded-lg  block w-full "
                            placeholder="sampleemail@gmail.com"
                            icon={MdEmail}
                            color={errors.email?.message ? 'failure' : 'gray'}
                            helperText={errors.email?.message}
                        />
                    </div>
                    <div className="flex flex-row gap-3 w-3/4">
                        <div className="flex flex-col !w-full gap-1">
                            <Label >Choose a password:</Label>
                            <TextInput
                                {...register("password", {
                                    required: 'Password is required.',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long.',
                                    },
                                })}
                                type="password"
                                placeholder="Password"
                                className='w-full'
                                icon={RiLockPasswordLine}
                                color={errors.password ? 'failure' : 'gray'}
                                helperText={errors.password?.message}
                            />
                        </div>

                        <div className="flex flex-col w-full gap-1">
                            <Label >Confirm password:</Label>
                            <TextInput
                                {...register("confirm_password", {
                                    required: 'Please confirm your password.',
                                    validate: (value) => value === getValues('user_password') || 'Passwords do not match.',
                                })}
                                icon={MdInfo}
                                type="password"
                                placeholder="Confirm Password"
                                className='w-full'
                                helperText={errors.confirm_password?.message}
                                color={errors.confirm_password ? 'failure' : (watch('user_password') === getValues('confirm_password') ? 'success' : 'gray')}
                            />

                        </div>
                    </div>

                </div>


                <Button pill type="submit" color="dark" >Create An Account</Button>
                <div className="flex flex-row py-4 pb-10 w-10/12 lg:w-3/4 justify-between">
                    <Link to={""} onClick={toggleAuth}>Already have an account?</Link>
                </div>
            </form>
        </div>

    )
    return (
        inL ? <SignInForm /> : <SignUpForm />
    );
}

export default Auth;
