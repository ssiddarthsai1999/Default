import React, { useState } from "react";
import logo from "../Assets/aklogo.svg";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./navbar.css";
function NavbarS() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(isMenuOpen === false);
    };

    return (
        <div
            className="w-full py-2 shadow-xl bg-white"
            style={{ filter: "drop-shadow(0 -2px 9px #00FF66)" }}
        >
            <div className="flex justify-between align-middle items-center ">
                <div className="pl-5 flex gap-5">
                    <img
                        src={logo}
                        className="sm:w-[200px] min-w-[100px]"
                        alt="logo"
                    />
                    <div className="sm:flex flex-col justify-center">
                        <p className="font-bold lg:text-[36px] hidden lg:flex">
                            AK Insurance Agency
                        </p>
                        <p className="hidden lg:flex text-[20px] text-left">
                            All types of insurance
                        </p>
                    </div>
                </div>
                <div className="pr-10">
                    {/* Conditionally render the FontAwesome icon for smaller screens */}
                    <div className="md:hidden">
                        <FontAwesomeIcon
                            icon={faBars}
                            size="lg"
                            className="cursor-pointer relative"
                            onClick={handleMenuOpen}
                        />
                        {isMenuOpen && (
                            <div className="absolute top-0 inset-x-0 bg-green-400 shadow-2xl p-2">
                                <FontAwesomeIcon
                                    onClick={() => setIsMenuOpen(false)}
                                    icon={faX}
                                    className="justify-end ml-auto p-2 flex cursor-pointer "
                                />
                                <ul className="flex flex-col gap-4 font-bold text-[14px] mt-2 text-black">
                                    <li className="cursor-pointer navlink">
                                        {" "}
                                        <Link to="/" onClick={closeMenu}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer navlink">
                                        {" "}
                                        <Link to="/about" onClick={closeMenu}>
                                            About
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer navlink">
                                        {" "}
                                        <Link
                                            to="/services"
                                            onClick={closeMenu}
                                        >
                                            {" "}
                                            Services
                                        </Link>
                                    </li>
                                    {/* <div className="dropdown ">
                                        <li className="cursor-pointer navlink dropbtn  ">
                                            Contact
                                        </li>
                                        <div class="dropdown-content">
                                            <a href="https://api.whatsapp.com/send/?phone=919176096365&text&type=phone_number&app_absent=0">
                                                Whatsapp Chat 24/7
                                            </a>
                                            <a href="#">Customer Care 24/7</a>
                                            <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x3a525f6ef7404d4d:0x21f38e986e939ced!12e1?source=g.page.m.np._&laa=nmx-review-solicitation-promoted-recommendation-card">
                                                Feedback/Review
                                            </a>
                                        </div>
                                    </div> */}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Conditionally render the navigation links for larger screens */}
                    <ul className="hidden md:flex gap-4 font-bold text-[24px]">
                        <li className="cursor-pointer navlink">
                            {" "}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer navlink">
                            {" "}
                            <Link to="/about">About</Link>
                        </li>
                        <li className="cursor-pointer navlink">
                            {" "}
                            <Link to="/services">Services</Link>
                        </li>
                        <div className="dropdown ">
                            <li className="cursor-pointer navlink dropbtn  ">
                                Contact
                            </li>
                            <div class="dropdown-content">
                                <a href="https://api.whatsapp.com/send/?phone=919176096365&text&type=phone_number&app_absent=0">
                                    Whatsapp Chat 24/7
                                </a>
                                <a href="#">Customer Care 24/7</a>
                                <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x3a525f6ef7404d4d:0x21f38e986e939ced!12e1?source=g.page.m.np._&laa=nmx-review-solicitation-promoted-recommendation-card">
                                    Feedback/Review
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarS;
