import React from "react";
import Slidervalue from "react-bna-modern";

function Compare() {
    const first = {
        FIRST_IMAGE: {
            imageUrl:
                "https://i.pinimg.com/736x/56/d6/93/56d69375010be9490d2902624bac3241.jpg",
        },
        SECOND_IMAGE: {
            imageUrl:
                "https://i.pcmag.com/imagery/articles/01eGstfLC8DcJFtCbjOVe69-12..v1623096915.jpg",
        },
    };
    const before =
        "https://i.pinimg.com/736x/56/d6/93/56d69375010be9490d2902624bac3241.jpg";
    const after =
        "https://i.pcmag.com/imagery/articles/01eGstfLC8DcJFtCbjOVe69-12..v1623096915.jpg";

    return (
        <div className="w-[80%] md:w-[600px] lg:w-[800px]   mx-auto flex-col flex gap-4 object-cover mt-[40px] md:mt-[100px]">
        <h4 className="text-center mb-2 text-lg  md:text-2xl">Value Increase</h4>
            <h5 className="mb-[40px] text-center text-sm md:text-xl">20% increase in market value after project completion.</h5>
            <Slidervalue
                before={first.FIRST_IMAGE.imageUrl}
                after={first.SECOND_IMAGE.imageUrl}
                imageHeight={true}
                showControls={true}
                divisorBorder={true}
                showWidth={true}
            />
            <Slidervalue
                before={first.FIRST_IMAGE.imageUrl}
                after={first.SECOND_IMAGE.imageUrl}
                imageHeight={true}
                showControls={true}
                divisorBorder={true}
                showWidth={true}
            />
        </div>
    );
}

export default Compare;
