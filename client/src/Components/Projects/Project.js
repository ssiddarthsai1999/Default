import React from 'react'
import serv from "../../Assets/serv.jpg"
function Project() {
  return (
      <div>
          <div className="mt-[100px]  flex flex-col justify-center w-full items-center">
              <h4 className="mb-4 text-lg  md:text-2xl">Modern Solutions</h4>
              <h5 className="mb-8 text-center text-sm  md:text-xl">
                  Oppdatering av interiør for å møte dagens standarder.
              </h5>
              <img
                  src={serv}
                  className="w-[250px] sm:w-[600px] lg:w-[900px] h-[400px] object-cover"
                  alt="projectspic"
              />
          </div>
          <div className="mt-[100px]  flex flex-col justify-center w-full items-center">
              <h4 className="mb-4 text-lg  md:text-2xl">
                  Long-Term Partnerships
              </h4>
              <h5 className="mb-8 text-center text-sm  md:text-xl">
                  Oppdatering av interiør for å møte dagens standarder.
              </h5>
              <img
                  src={serv}
                  className="w-[250px] sm:w-[600px] lg:w-[900px] h-[400px] object-cover"
                  alt="projectspic"
              />
          </div>
      </div>
  );
}

export default Project