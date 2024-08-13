// pages/index.js
"use client"
import React, { useState } from 'react';
import ProjectCard from './components/projectCard';
import ProjectPopup from './components/projectPopup';


export type ProjectDataView = {
  name: string,
  isPrivate: boolean,
  tags: string[],
  n: number,
  icon: string,
  id: string
};

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const projects: ProjectDataView[] = [{
    name: "Hard Hat",
    isPrivate: true,
    tags: ["Object detection"],
    n: 100,
    icon: "www.xyz.com",
    id: "1"
  }];

  return (
    <div className="space-y-4 px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-700 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="p-2 text-sm bg-black text-white border border-white rounded-lg hover:bg-white hover:text-black transition duration-200"
        >
          New Project
        </button>
      </div>
      <div>
        {projects.map((d, i) => (
          <ProjectCard project={d} key={i} />
        ))}
      </div>
      <ProjectPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default Page;
