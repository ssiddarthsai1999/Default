import React from 'react'
import room from "../../Assets/room.jpg"
import "./Home.css"
function HomeC() {
  return (
      <div className="homebg h-screen relative p-4">
          <h1 className="pt-[80px] md:pt-[200px] text-black text-center text-2xl md:text-6xl">
              BoFiks - Eiendomsforvaltning av Høyeste Kvalitet
          </h1>

          <h2 className="text-black text-center text-xl md:text-4xl mt-5 md:mt-10">
              Ditt hjem, vårt ansvar.
          </h2>
      </div>
  );
}

export default HomeC