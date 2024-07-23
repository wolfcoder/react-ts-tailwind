import React, { Children } from "react";
import placeHolder607 from '../../../assets/images/placeHolder-607.svg';
import ListSection from "../../../components/ListSection";

export default function DrugsSection() {

    const Info = [
        { title: 'VIN Veterinary Drug Handbook (VVDH) chapters will be the default if available' },
        { title: 'More top rated VIN content and/or images in their subcategories may also be seen' }
    ]

    const RelatedTopics = [
        {
            title: 'Tree',
            children: [
                { title: "Explore broader and narrower terms if the drug you picked is not quite what you wanted" },
            ]
        },
        {
            title: 'More',
            children: [
                { title: "More information about the drug and related areas you might be interested in" },
            ]
        },

    ]

    return (
        <>
            <section className="  md:px-28 py-16 md:mx-8 px-4 ">
                <div className="max-w-[1312px] mx-auto">
                    <div className="flex md:flex-row flex-col gap-x-8">
                        <div className="w-full md:w-1/2">
                            <h2 className=" font-medium text-2xl mb-6 text-VINBlue">Drugs</h2>
                            <p className="leading-6 mb-2">
                                If you picked a common disease you should see the following tabs:
                            </p>
                            <section className="border-b py-4">
                                <h3 className=" text-lg text-VINBlue mb-5">Info</h3>
                                <ListSection items={Info} />
                            </section>
                            <section className="py-4">
                                <h3 className=" text-lg text-VINBlue mb-5">Related Topics</h3>
                                <ListSection items={RelatedTopics} />
                            </section>
                        </div>
                        <img src={placeHolder607} alt='' className="w-full md:w-1/2 md:h-[384px]" />
                    </div>
                </div>
            </section>
        </>
    )
}

