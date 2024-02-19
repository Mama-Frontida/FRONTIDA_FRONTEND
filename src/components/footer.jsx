import React from "react";
import { RiGithubLine, RiGoogleLine, RiMailAddFill, RiTwitterLine } from "react-icons/ri";


function Footer() {
    return (
        <footer className="bg-primary rounded-b-md px-5 sticky bottom-0 dark:bg-gray-800 w-full flex justify-center items-center">
            <div className="w-full  px-5 p-4 md:flex md:items-center md:justify-between lg:justify-between">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            Data
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            Source Code
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Documentation
                        </a>
                    </li>
                </ul>
                <span className="text-sm flex flex-row gap-5 justify-center items-center text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="">
                        <RiGithubLine className="text-3xl text-black" />
                    </a>
                    <a href="">
                        <RiTwitterLine className="text-3xl text-black" />
                    </a>
                    <a href="">
                        <RiMailAddFill className="text-3xl text-black" />
                    </a>

                </span>

            </div>
        </footer>
    );
}

export default Footer;
