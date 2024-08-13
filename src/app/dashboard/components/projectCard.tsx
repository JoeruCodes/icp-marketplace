"use client "
import React from 'react';
import { ProjectDataView } from '../page';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: ProjectDataView }) => {

  return (
    <Link 
      href={`/dashboard/${project.id}`} 
      className="flex items-center px-6 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-red-800 shadow-lg rounded-lg transition-transform transform hover:scale-105"
    >
      <img
        src={project.icon}
        alt={project.name}
        className="w-12 h-12 rounded-md object-cover"
      />
      <div className="ml-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-gray-200 bg-red-700 rounded-sm px-1 py-[2px]">
            {project.tags[0]}
          </span>
          {project.isPrivate && (
            <span className="text-md text-red-500">
              <i className="fas fa-lock"></i>
            </span>
          )}
        </div>
        <h2 className="text-lg font-semibold text-white">
          {project.name}
        </h2>
        <div className="text-md text-gray-500">
          Private • {project.n} Images
        </div>
      </div>
      <div className="ml-auto">
        <i className="fas fa-ellipsis-h text-gray-500"></i>
      </div>
    </Link>
  );
};

export default ProjectCard;
