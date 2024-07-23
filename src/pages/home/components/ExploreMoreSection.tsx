import React from "react";
import placeHolder289 from '../../../assets/images/placeHolder-289.svg';

export default function ExploreMore() {
    const images = [
        {
            title: 'Lymphoma',
            image: placeHolder289
        },
        {
            title: 'Trazadone',
            image: placeHolder289
        },
        {
            title: 'Femur',
            image: placeHolder289
        }
    ];

    return (
        <>
            <section className="text-center max-w-[1135px] mx-auto mb-20 px-4 md:px-0">
                <h2 className=" font-medium text-2xl mb-6 ">Explore More</h2>
                <p className="leading-6 mb-10">
                    To get started go to the upper right search box and enter a disease, drug, body part, or other topic you want to explore. <br />
                    After you enter a few letters you should see a list of suggested terms. Click on a term to select it. If it is the first term in the list you can just hit Enter to select it.
                </p>

                <h3 className="font-semibold mb-8 md:mb-14">Here are a few examples to get you started</h3>

                {/* map images */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-8 max-w-[1027px] mx-auto">
                    {images.map((image, index) => (
                        <div key={index} className="relative border p-4">
                            <img src={image.image} alt={image.title} className="rounded-sm w-full h-[262px] object-cover"  />
                            <p className="text-sm font-medium text-gray-900 mt-2">{image.title}</p>
                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}

