/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { ISignUp } from '@/types/global';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';

export function SignUpForm() {
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values: ISignUp = {
            name: {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
            },
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        const response: any = await register(values);
        if (response.error) {
            toast.error(response.error.data.errorMessages[0].message);
        } else {
            toast.success(response.data.message);
            navigate('/login');
        }
    };

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center h-[100vh]">
                    <Loader />
                </div>
            ) : (
                <div className="w-full max-w-xs">
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                First Name
                            </label >
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name" />
                        </div >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <button className="w-full bg-[#37be4e] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </form >
                </div >)
            }
        </>
    );
}