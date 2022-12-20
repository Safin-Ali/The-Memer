import React from 'react';
import {FaSearch,FaHome,} from 'react-icons/fa';
import {MdGroups} from 'react-icons/md';
import {HiUserPlus} from 'react-icons/hi2';

const Navbar = () => {
    return (
        <nav className={`bg-whiteSecondary shadow-md p-5`}>
            <section className={`mx-[3%] grid grid-cols-3 justify-center items-center`}>
                {/* Brand Text & Search bar */}
                <div className={`flex items-center gap-x-3`}>

                    <div><h2 className={`font-lobster text-3xl font-bold`}>The Memer</h2></div>

                    {/* Search Area */}
                    <div className={`flex py-1.5 px-2 rounded-lg border items-center`}>
                        <div className={`mr-1`}><FaSearch></FaSearch></div>
                        <div>
                            <input type="search" className={`p-1 bg-whitePrimary focus:outline-none`} placeholder={`Search`}/>
                    </div>
                    </div>
                </div>

                {/* Nav item */}
                <div className={`flex justify-center gap-x-10 items-center`}>
                    <div className={`cursor-pointer hover:text-purplePrimary`}><FaHome className={`text-3xl`}></FaHome></div>
                    <div className={`cursor-pointer hover:text-purplePrimary`}><MdGroups className={`text-3xl`}></MdGroups></div>
                </div>

                {/* user info */}
                <div className={`justify-self-end`}>
                    <div className={`cursor-pointer border rounded-full p-1 border-borderWhite`}><HiUserPlus className={`text-3xl`}></HiUserPlus></div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;