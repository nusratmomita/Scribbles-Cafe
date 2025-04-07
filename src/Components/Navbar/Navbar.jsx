import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#805c5c] shadow-sm p-5 ">
                <div className="flex-1">
                    <a className="border-2 border-amber-50 btn btn-ghost text-lg">Scribbles Cafe</a>
                </div>
                <button className='border-2 border-amber-50 btn btn-ghost text-lg'>Learn What matters!</button>
             </div>
        </div>
    );
};

export default Navbar;