import React from 'react';
import SearchBarAndClear from '../components/SearchBarAndClear';
import ExploreMore from './home/components/ExploreMoreSection';
import DiseasesSection from './home/components/DiseasesSection';
import DrugsSection from './home/components/DrugsSection';
import AnatomicalSection from './home/components/AnatomicalSection';

function Homepage() {
    return (
        <>
            <div className='border-2 border-VINBlueLight m-4'>
                <h1 className="text-center text-3xl font-semibold text-VINBlue uppercase mt-8 md:mt-16 mb-5 md:mb-10">Keyword Info Help Document</h1>
                <div className='bg-VINYellowLight max-w-[918px] mx-auto px-8 py-5 shadow-md mb-10 md:mb-12 rounded-none md:rounded-lg'>
                    <div className='max-w-[700px] mx-auto'>
                        <SearchBarAndClear />
                    </div>
                </div>
                <ExploreMore />
                <DiseasesSection />
                <DrugsSection />
                <AnatomicalSection />
            </div>


        </>
    );
}

export default Homepage;