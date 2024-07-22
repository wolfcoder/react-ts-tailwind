import React from 'react'
import iconSearch from '../assets/icons/iconSearch.svg'

export default function SearchBarAndClear() {
    return (
        <div>
            <label htmlFor="search-keyword" className="text-sm font-medium leading-6 text-gray-900 hidden">
                Search keyword
            </label>
            <div className="flex rounded-md ">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <input
                        id="search-keyword"
                        name="search-keyword"
                        type="text"
                        placeholder="lymphoma"
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-VINBrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-[#6CACE4]   focus:ring-[#6CACE4] focus:ring-opacity-50 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center p-2  text-gray-900 ring-1 ring-inset ring-VINBlue hover:ring-VINBlueHover bg-VINBlue hover:bg-VINBlueHover active:ring-VINBlueLight"
                >
                    <img src={iconSearch} alt=">" className="w-4 h-4 mx-2" />
                </button>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md px-3 text-sm text-white ring-inset ring-VINGold hover:ring-VINGoldHover bg-VINGold hover:bg-VINGoldHover active:ring-VINGoldHover"
                >
                    Clear
                </button>
            </div>
        </div>
    )
}
