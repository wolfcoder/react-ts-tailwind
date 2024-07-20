import React from 'react';
import SearchBarAndClear from '../components/SearchBarAndClear';

function Homepage (){
    return(
        <>
        <div className='border-2 border-VINBlueLight m-4'>
                <h1 className="text-center text-3xl font-semibold text-VINBlue uppercase mt-8 md:mt-16 mb-5 md:mb-10">Keyword Info Help Document</h1>
                <div className='bg-VINYellowLight max-w-[918px] mx-auto px-8 py-4 shadow-md mb-5 md:mb-10 rounded-none md:rounded-lg'>
                    <div className='max-w-[700px] mx-auto'>
                        <SearchBarAndClear />
                    </div>
                    
                </div>
        </div>

        
        </>
    );
}

export default Homepage;