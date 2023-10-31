import React from 'react'
import Compare from '../../Components/Projects/Compare'
import Project from "../../Components/Projects/Project";
function Projects() {
  return (
    <div className='md:pt-[100px] pt-[10px]'>
    <h1 className='text-center text-3xl md:text-5xl'>Our Projects</h1>
<Compare/>
<Project/>

    </div>
  )
}

export default Projects