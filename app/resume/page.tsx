import React from 'react';
import { BiBook } from 'react-icons/bi';
import { BsBriefcase, BsPhoneVibrate, BsWhatsapp } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { education, techStack, workExperience } from '../data/resume';
import PrintButton from '../components/PrintButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function Page() {
  return (
    <div className="w-full mt-14 lg:mt-32 p-4 lg:pl-[19%] text-white">
      {/* SECTION TO PRINT */}
      <div id="print-section" className="">
        <h1 className="text-4xl lg:text-5xl font-bold">RAJI SARAFADEEN</h1>
        <div className="flex flex-col md:flex-row gap-2">
          <Link href="mailto:omosanjos77@gmail.com" className="text-blue-500 flex gap-1 items-center">
            <FaEnvelope className="text-[#86a4c4]" /> <span>omosanjos77@gmail.com</span>
          </Link>
          <Link href="tel:+2347038699659" className="text-blue-500 flex gap-1 items-center">
            <BsPhoneVibrate className="text-[#86a4c4]" /> <span>+234 7038699659</span>
          </Link>
        </div>
        <Link
          href="https://wa.me/2347038699659"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 flex gap-1 items-center"
        >
          <BsWhatsapp /> <span>Chat on WhatsApp</span>
        </Link>

        <p className="text-[#86a4c4] mt-4 font-light">
          Frontend Web Developer specializing in ReactJS and Next.js — I build fast, scalable, and user-friendly web apps that help businesses grow.
        </p>

        {/* SKILLS */}
        <div className="relative overflow-hidden w-full my-12 lg:my-20">
          <h1 className="text-6xl lg:text-7xl font-bold absolute top-10 left-0 opacity-5 text-gray-400">My Skills</h1>
          <div className="lg:w-[260px]">
            <h1 className="font-manrope relative leading-tight text-3xl lg:text-4xl font-semibold">
              MY SKILLS
            </h1>
            <div className="w-[50%] h-[0.4rem] bg-[#0c3360] rounded-[10px] mt-4 relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']"></div>
          </div>

          <div className="relative overflow-hidden flex flex-col lg:flex-row justify-between items-center pr-8 py-8">
            <h1 className="text-6xl lg:text-7xl font-bold absolute top-1/3 right-0 opacity-5 text-gray-400">Frontend Developer</h1>
            <div>
              <h2 className="text-[#86a4c4] font-light">I constantly try to improve</h2>
              <h3 className="text-3xl">My tech stack</h3>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((skill) => (
                <div key={skill.name} className="bg-[#191d2b] p-2 rounded-[6px] text-[#86a4c4] font-light">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="relative overflow-hidden w-full my-12 lg:my-20 font-light">
          <h1 className="text-6xl lg:text-7xl font-bold absolute top-10 left-0 opacity-5 text-gray-400">My Resume</h1>
          <div className="lg:w-[300px]">
            <h1 className="font-manrope relative leading-tight text-3xl lg:text-4xl font-semibold">
              MY RESUME
            </h1>
            <div className="w-[50%] h-[0.4rem] bg-[#0c3360] rounded-[10px] mt-4 relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']"></div>
          </div>

          <div className="pt-10">
            <h1 className="text-xl lg:text-2xl font-bold mb-8 flex items-center gap-3">
              <BsBriefcase size={26} className="text-[#86a4c4] font-light" /> <span>Work Experience</span>
            </h1>
            <div className="relative">
              <div className="absolute left-1.5 top-0 h-full w-[0.20rem] bg-[#2e344e]"></div>
              <div className="space-y-8">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-8 flex flex-col lg:flex-row">
                    <div className="absolute z-[60] left-2 top-1.5 h-4 w-4 rounded-full bg-[#10121b] border-3 border-[#2e344e] transform -translate-x-1/2"></div>
                    <h2 className="text-xl text-[#86a4c4] font-light mb-1 lg:w-1/4">{exp.period}</h2>
                    <div className="lg:w-3/4">
                      <h3 className="text-xl font-medium text-blue-600 mb-1 relative before:bg-[#2e344e] before:absolute before:content-[''] before:h-[0.12rem] before:w-[40px] before:-left-14 before:top-1/2">
                        {exp.title}
                      </h3>
                      <h4 className="text-md font-medium text-white mb-2">{exp.company}</h4>
                      <p className="text-[#86a4c4]">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="-mt-10 pb-10 font-light">
          <h1 className="text-xl lg:text-2xl font-bold mb-8 flex items-center gap-3">
            <BiBook size={26} className="text-[#86a4c4] font-light" /> <span>Educational Qualifications</span>
          </h1>
          <div className="relative">
            <div className="absolute left-1.5 top-0 h-full w-[0.20rem] bg-[#2e344e]"></div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 flex flex-col lg:flex-row">
                  <div className="absolute z-[60] left-2 top-1.5 h-4 w-4 rounded-full bg-[#10121b] border-3 border-[#2e344e] transform -translate-x-1/2"></div>
                  <h2 className="text-xl text-[#86a4c4] font-light mb-1 lg:w-1/4">{edu.period}</h2>
                  <div className="lg:w-3/4">
                    <h3 className="text-xl font-medium text-blue-600 mb-1 relative before:bg-[#2e344e] before:absolute before:content-[''] before:h-[0.12rem] before:w-[40px] before:-left-14 before:top-1/2">
                      {edu.title}
                    </h3>
                    <h4 className="text-md font-medium text-white mb-2">{edu.school}</h4>
                    <p className="text-[#86a4c4]">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PrintButton targetId="print-section" documentTitle="Raji_Sarafadeen_Resume" />
    </div>
  );
}