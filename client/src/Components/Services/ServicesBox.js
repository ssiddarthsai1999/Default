import React from "react";
import serv from "../../Assets/serv.jpg";
function ServicesC({ heading, desc, img }) {
    return (
        <div className="  mx-auto justify-center flex flex-col items-center p-3">
            <img
                src={img}
                className="w-[250px] sm:w-[600px] lg:w-[900px] h-[400px] object-cover md:mt-24 mb-5"
                alt="servicespic"
            />
            <h4 className="mt-4 text-center text-lg md:text-2xl">{heading}</h4>
            <h5 className="mt-6 text-center text-sm mb-24 md:text-xl">{desc}</h5>
        </div>
    );
}

export default ServicesC;
