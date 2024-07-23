import React, { Children } from "react";
import placeHolder370 from '../../../assets/images/placeHolder-370.svg';
import ListSection from "../../../components/ListSection";

export default function DiseasesSection() {

    const Info = [
        { title: 'VINCyclopedia chapters will be the default if available' },
        { title: 'More top rated VIN content and/or images in their subcategories may also be seen' }
    ]

    const ClinicalCases = [{
        title: 'VIN Case discussions with signalment are available for many diseases. Dogs, then cats have the most cases.',
        children: [
            { title: "Signalment Summary - shows % of cases with the disease compared to the % of that signalment factor in all cases for that species" },
            { title: "Age Distribution" },
            { title: "Weight Distribution" },
            { title: "Cases - use this to go to the VIN Case Discussions.You can filter by signalment factors" },
            { title: "Top breeds affected" },
            { title: "Geographic distribuion" },
            { title: "Tree - many diseases can be broken down further eg., different kinds of Lymphoma.The tree lets you explore these." }
        ]
    },
    { title: 'Related Topics' }

    ]

    return (
        <>
            <section className=" bg-VINYellowLight md:px-28 py-16 md:mx-8 px-4 ">
                <div className="max-w-[1312px] mx-auto">
                    <h2 className=" font-medium text-2xl mb-6 text-VINBlue">Diseases</h2>
                    <p className="leading-6 mb-10">
                        If you picked a common disease you should see the following tabs:
                    </p>


                    <div className="flex md:flex-row flex-col gap-x-8">
                        <img src={placeHolder370} alt='' className="w-[370px] object-cover" />
                        <div className="w-full">
                            <section className="border-b py-4">
                                <h3 className=" text-lg text-VINBlue mb-5">Info</h3>
                                <ListSection items={Info} />
                            </section>
                            <section className="py-4">
                                <h3 className=" text-lg text-VINBlue mb-5">Clinical Cases</h3>
                                <ListSection items={ClinicalCases} />
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

