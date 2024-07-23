import React from "react";
import ListSection from "../../../components/ListSection";

export default function AnatomicalSection() {

    const Info = [
        { title: '3D Anatomy chapters will be the default if available' },
        { title: 'More top rated VIN content and/or images in their subcategories may also be seen' }
    ]

    const RelatedTopics = [
        {
            title: 'Tree',
            children: [
                { title: "Explore broader and narrower terms if the body part you picked is not quite what you wanted" },
            ]
        },
        {
            title: 'More',
            children: [
                { title: "Explore related terms" },
            ]
        },
    ]

    return (
        <>
            <section className=" bg-VINYellowLight md:px-28 py-16 md:mx-8 px-4 mb-16 ">
                <div className="max-w-[1312px] mx-auto">
                    <div className="flex md:flex-row flex-col gap-x-8">
                        <div className="w-full">
                            <section className="py-4">
                                <h2 className=" font-medium text-2xl mb-6 text-VINBlue">Anatomical Terms</h2>
                                <p className="leading-6 mb-4">
                                    If you picked a body part you may see:
                                </p>
                                <h3 className=" text-lg text-VINBlue mb-5">Info</h3>
                                <ListSection items={Info} />
                            </section>
                        </div>
                        <div className="w-full">
                            <section className="mt-4 py-4">
                                <h3 className=" text-lg text-VINBlue mb-5">Related Topics</h3>
                                <ListSection items={RelatedTopics} />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

