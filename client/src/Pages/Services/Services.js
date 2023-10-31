import React from "react";
import ServicesBox from "../../Components/Services/ServicesBox";
import serv from "../../Assets/serv.jpg";

function Services() {
    const data = [
        {
            img: serv,
            heading: "Custom Property Improvement",
            desc: " Vi tilbyr omfattende løsninger for å forbedre og bevare verdiene på din eiendom.",
        },
        {
            img: serv,
            heading: "Custom Property Improvement",
            desc: " Vi tilbyr omfattende løsninger for å forbedre og bevare verdiene på din eiendom.",
        },
        {
            img: serv,
            heading: "Custom Property Improvement",
            desc: " Vi tilbyr omfattende løsninger for å forbedre og bevare verdiene på din eiendom.",
        },
    ];
    return (
        <div className="mx-auto flex flex-col pt-[100px] items-center  ">
            <h1 className="mb-[50px] md:text-5xl text-3xl">Our services</h1>

            {data.map((item) => (
                <div>
                    <ServicesBox
                        img={item.img}
                        heading={item.heading}
                        desc={item.desc}
                    />
                </div>
            ))}
        </div>
    );
}

export default Services;
