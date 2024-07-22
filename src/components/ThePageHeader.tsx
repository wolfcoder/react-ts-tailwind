import React from 'react';
import iconHome from '../assets/icons/iconHome.svg';
import iconArrowNext from '../assets/icons/iconArrowNext.svg';

function ThePageHeader() {

    return (
        <div className=" mx-6 mt-4 flex justify-between mb-4">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-VINBlue">Contacts</h1>
                <div className='flex items-center text-sm'>
                    <a href='#' className='flex items-center'>
                        <img src={iconHome} alt="home" className="w-3 h-3 mr-2" /> <span className='underline'>Search</span>
                    </a>
                    <img src={iconArrowNext} alt=">" className="w-3 h-3 mx-2" />
                    <a href='#' className='flex items-center'>
                        <span className='underline'>Keyword Info</span>
                    </a>
                    <img src={iconArrowNext} alt=">" className="w-3 h-3 mx-2" />
                    <a href='#' className='flex items-center'>
                        <span className='underline'>Information</span>
                    </a>
            
                </div>
            </div>
            <div>
                {/* right */}
            </div>

        </div>
    )
}

export default ThePageHeader;