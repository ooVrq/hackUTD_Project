import React from 'react';

function Navbar()
{
    return(
    <>
        <div className="text-darkblue flex flex-row justify-between items-center px-20 py-4 text-2xl poppins-semibold bg-pastelblue">
            <div className="text-darkgreen text-3xl poppins-bold hover:text-pastelgreen transition duration-300">
                Ripple & Refresh
            </div>
            <p className="hover:text-pastelgreen transition duration-300">map</p>
            <p className="hover:text-pastelgreen transition duration-300">rsvp</p>
            <p className="hover:text-pastelgreen transition duration-300">activity</p>
        </div>
        <hr className="w-full border-t-2 border-pastelgreen border-opacity-50"></hr>
    </>
    )
}

export default Navbar;

