import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

import { FaNodeJs, FaCode, FaJava, FaCogs } from "react-icons/fa";  // Use FaJava and FaCogs
import { BiLogoPostgresql } from "react-icons/bi";
import { SiC, SiPython, SiR, SiHtml5, SiCss3, SiJavascript, SiSpringboot, SiDotnet } from 'react-icons/si';  // SiC, etc.

import React from 'react';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-6xl text-cyan-400"/>
        </div>
        {/* <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className="text-7xl"/>
        </div> */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className="text-6xl text-green-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-6xl text-green-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className="text-6xl text-orange-500"/> {/* Using FaJava */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCode className="text-6xl text-purple-600"/> {/* Using FaCode */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiC className="text-6xl text-blue-600"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className="text-6xl text-yellow-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiR className="text-6xl text-green-600"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className="text-6xl text-orange-600"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className="text-6xl text-blue-600"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className="text-6xl text-yellow-400"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpringboot className="text-6xl text-green-700"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDotnet className="text-6xl text-cyan-600"/>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
