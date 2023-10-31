

import React from "react";
import fb from "../Assets/facebook.svg";
import yt from "../Assets//youtube.svg";
import twit from "../Assets/twitter.svg";
import linked from "../Assets/linkedin.svg";
import insta from "../Assets/instagram.svg";
function FooterS() {
    return (
        <div className="p-4">
            <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[1000px] mx-auto py-[100px] ">
                <h1 className="font-bold text-3xl md:text-5xl text-center mb-10">
                    Contact us{" "}
                </h1>
                <h4 className="text-center text-sm mb-10 md:text-xl">
                    We invite you to discuss the possibilities for your property
                    with our team of experts. Contact us for a non-committal
                    conversation.
                </h4>
                <div className="  md:flex-row flex flex-col justify-between p-10  items-center align-middle">
                    <div className="mb-10 md:mb-2">
                        <h2 className=" text-sm  md:text-xl mb-2">Norway</h2>

                        <h2 className="text-sm mb-2 md:text-xl ">
                            Customer care : 9176096365 , 04442352395
                        </h2>
                        <h2 className="text-sm  md:text-xl mb-2">
                            E-mail : Bofiks@yahoo.com
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-sm  md:text-xl mb-2 ">
                            Support us on social media
                        </h1>
                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/channel/UCdn2Jw_6Een7A5PZgg0zQgQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={yt}
                                    alt=""
                                    className="w-6 md:w-10 cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/AKINSURANCEAGENCY/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={fb}
                                    alt=""
                                    className="w-6 md:w-10 cursor-pointer"
                                />
                            </a>{" "}
                            <a
                                href="https://twitter.com/insurance_ak?s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={twit}
                                    alt=""
                                    className="w-6 md:w-10 cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/karthikeyan-nagarajan-ab6a5481/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={linked}
                                    alt=""
                                    className="w-6 md:w-10 cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/p/CPqlJxmNome/?utm_medium=twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={insta}
                                    alt=""
                                    className="w-6 md:w-10 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <h1 className="text-lg md:text-2xl mb-4">Bofiks</h1>
                    <h1 className="text-sm  md:text-xl mb-3" >Get Designed.</h1>
                    <h1 className="text-sm mb-2 md:text-xl">
                        Copyright © 2023 Bofiks. All rights reserved.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default FooterS;

