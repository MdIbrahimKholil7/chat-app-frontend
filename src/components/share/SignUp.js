import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className='h-screen my-20'>
            <h1 className='text-center my-10 text-2xl font-bold'>Chat App</h1>
            <div className='flex justify-center items-center '>
                <div className="card flex-shrink-0 w-full lg:max-w-[500px] shadow-2xl bg-base-100 py-10">

                    <div className="card-body">
                        <div className='flex justify-between items-center mb-5'>
                            <button
                                onClick={() => navigate('/')}
                                className={`w-full ${!location?.pathname.includes('/signUp') && 'bg-gray-500 text-white'} px-5 py-3  rounded-full text-xl`}>Login</button>
                            <button
                                onClick={() => navigate('/signUp')}
                                className={`w-full ${location?.pathname.includes('/signUp') && 'bg-gray-500 text-white'} px-5 py-3  rounded-full text-xl`}>Sign Up</button>
                        </div>
                        {
                            location?.pathname?.includes('signUp') && <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        {
                            location?.pathname?.includes('signUp') && <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>}
                        {
                            !location?.pathname?.includes('signUp') && <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>}
                        {
                            location?.pathname?.includes('signUp') && <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


