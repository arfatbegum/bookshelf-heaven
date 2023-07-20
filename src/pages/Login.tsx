import { Link } from 'react-router-dom';
import { BookOpenCheckIcon } from 'lucide-react';
import { LoginForm } from '@/components/LoginForm';

export default function Login() {
  return (
    <>
      <div className='h-[calc(100vh-80px)] max-w-7xl mx-auto pt-8'>
        <div className='flex justify-between'>
          <Link
            to="/"
          >
            <h1 className='flex items-center uppercase font-bold'><BookOpenCheckIcon className='mr-2 text-[#37be4e]' /> BookShelf Heaven</h1>
          </Link>
          <Link
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
        <div className="lg:mt-24">
          <div className="mx-auto sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-700">
                Sign In
              </h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div >
    </>
  );
}