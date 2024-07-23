import React from "react";

type ListSectionProps = {
    items: any[];
};

export default function ListSection(props: ListSectionProps) {

    const { items } = props;

    return (
        <ul className="list-disc pl-10 marker:text-VINBlue leading-6 space-y-4">
            {items.map((item, index) => (
                <li key={index} className="text-sm text-gray-900">{item.title}
                    {item.children && (
                        <ul className="list-disc pl-4 marker:text-VINBlueLight space-y-2 mt-4">
                            {item.children.map((child: any, index: number) => (
                                <li key={index} className="text-sm text-gray-900">{child.title}</li>
                            ))}
                        </ul>)}
                </li>
            ))}
        </ul>
    )
}
