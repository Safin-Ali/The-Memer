import React, { useState } from 'react';
import PrimaryButton from '../button/PrimaryButton';
import CommonField from '../input-field/CommonField';
import {BsGithub,BsEyeSlash,BsEye} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {TfiLinkedin} from 'react-icons/tfi';
import {FcGoogle} from 'react-icons/fc';


const Login = () => {

    const [toggle,setToggle] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPass = form.userPass.value;
    }

    return (
        <main className={`max-h-screen overflow-hidden`}>
            <section className={`grid grid-cols-1 md:grid-cols-2 gap-x-5 h-screen`}>
                {/* Form Side Image */}
                <div className={`hidden md:block bg-beautyPrimary h-screen border-r border-borderWhite`}>
                    <div className={`flex items-center h-full`}>
                        <img src="https://i.postimg.cc/ydd2YGjH/Privacy-policy-rafiki.png" className={`align-middle`} alt="Auth_Image" />
                    </div>
                </div>

                {/* Form Division */}
                <div className={`m-[3%] ml-[10%]`}>

                    {/* Form Top Header */}
                    <div className={`flex gap-x-3 items-center lg:justify-end`}>
                                <h4 className={`font-semibold text-greyPrimary`}>Already have an account?</h4>
                                <PrimaryButton className={`border hover:border-purplePrimary hover:text-purplePrimary duration-300`}>Sign up</PrimaryButton>
                    </div>

                    {/* Form Main Header */}
                    <div className={`my-5 lg:my-10`}>
                        <h3 className={`text-2xl lg:text-3xl text-blackQuaternary my-2 font-bold`}>Welcome to The Memer!</h3>
                        <p className={`text-greyPrimary font-medium`}>Please login your account</p>
                    </div>

                    {/* Form Field */}
                    <form onSubmit={handleForm}>
                        <div className={`my-3 lg:my-5`}>
                            <p className={`text-lg lg:text-xl text-blackQuaternary font-semibold my-2`}>Name</p>
                            <CommonField className={'p-2 lg:p-2.5 focus:text-purplePrimary w-[90%]'} type='text' placeholder='Full name' name={`userName`}></CommonField>
                        </div>
                        <div className={`my-3 lg:my-5`}>
                            <p className={`text-lg lg:text-xl text-blackQuaternary font-semibold my-2`}>Email</p>
                            <CommonField className={'p-2 lg:p-2.5 focus:text-purplePrimary w-[90%]'} type='email' placeholder='Email' name={`userEmail`}></CommonField>
                        </div>
                        <div className={`my-3 lg:my-5`}>
                            <p className={`text-lg lg:text-xl text-blackQuaternary font-semibold my-2`}>Password</p>
                            <div className={`relative w-[90%]`}>
                                <CommonField className={'p-2 lg:p-2.5 focus:text-purplePrimary w-full'} type={toggle ? 'text' : 'Password'} placeholder='Password' name={`userPass`}></CommonField>

                                <div onClick={()=>setToggle(!toggle)}>
                                    {
                                        toggle ?
                                        <BsEyeSlash className={`absolute text-greyPrimary cursor-pointer top-1/2 transform -translate-y-1/2 right-[4%]`}></BsEyeSlash>
                                        :
                                        <BsEye className={`absolute text-greyPrimary cursor-pointer top-1/2 transform -translate-y-1/2 right-[4%]`}></BsEye>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`my-3 lg:my-5`}>
                            <PrimaryButton className='bg-purplePrimary text-whiteQuinary shadow-[0_5px_20px_-4px] hover:shadow-purplePrimary08 hover:bg-purpleSecondary duration-200' padding={`px-[7%] py-[2%]`}>LOGIN</PrimaryButton>
                        </div>
                    </form>

                    {/* Form Bottom Header */}
                    <div className={`flex gap-y-3 my-2 md:my-0 lg:gap-x-3 flex-col lg:flex-row items-center justify-start`}>
                        <h4 className={`font-semibold text-greyPrimary`}>Create account with</h4>

                    <div className={`flex flex-row gap-x-3`}>
                        <div className={`rounded-full border border-borderWhite p-2 cursor-pointer`}>
                                <FaFacebookF className={`text-blue-700 text-xl`}></FaFacebookF>
                            </div>

                            <div className={`rounded-full border border-borderWhite p-2 cursor-pointer`}>
                                <TfiLinkedin className={`text-[#0072b1] text-xl`}></TfiLinkedin>
                            </div>

                            <div className={`rounded-full border border-borderWhite p-2 cursor-pointer`}>
                                <FcGoogle className={`text-xl`}></FcGoogle>
                            </div>

                            <div className={`rounded-full border border-borderWhite p-2 cursor-pointer`}>
                                <BsGithub className={`text-xl text-blackTertiary`}></BsGithub>
                            </div>
                    </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;