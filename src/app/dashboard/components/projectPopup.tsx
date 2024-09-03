"use client"
import React, { useState } from 'react';

const ProjectPopup = ({ isOpen, onClose }: any) => {
  const [projectName, setProjectName] = useState('');
  const [license, setLicense] = useState('CC BY 4.0');
  const [annotationGroup, setAnnotationGroup] = useState('');
  const [projectType, setProjectType] = useState('Object Detection');
  const [classificationType, setClassificationType] = useState('Multi-Label');

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ projectName, license, annotationGroup, projectType, classificationType });
    onClose(); // Close the popup after submission
  };

  const projectTypes = [
    { name: 'Object Detection', description: 'Identify objects and their positions with bounding boxes.', bestFor: ['Counting', 'Tracking'] },
    { name: 'Classification', description: 'Assign labels to the entire image.', bestFor: ['Filtering', 'Content Moderation'] },
    { name: 'Instance Segmentation', description: 'Detect multiple objects and their actual shape.', bestFor: ['Measurements', 'Odd Shapes'] },
    { name: 'Keypoint Detection', description: 'Identify keypoints on subjects.', bestFor: ['Pose Estimation'] },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 ">Let&apos;s create your project.</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500"
              placeholder="Enter project name"
            />
            {!projectName && <p className=" text-sm">Name cannot be empty.</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">License</label>
            <input
              type="text"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500"
              placeholder="Enter license"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 ">Annotation Group</label>
            <input
              type="text"
              value={annotationGroup}
              onChange={(e) => setAnnotationGroup(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500"
              placeholder="Enter annotation group"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 ">Project Type</label>
            <div className="grid grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <div
                  key={type.name}
                  onClick={() => setProjectType(type.name)}
                  className={`cursor-pointer p-4 border rounded-lg ${
                    projectType === type.name ? 'border-red-600 bg-gray-800' : 'border-gray-700 bg-gray-800'
                  }`}
                >
                  <h3 className="font-bold mb-2 text-red-400">{type.name}</h3>
                  <p className="text-sm text-gray-300">{type.description}</p>
                  <p className="mt-2 text-xs text-gray-500">Best For: {type.bestFor.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
          {projectType === 'Classification' && (
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">Classification Type</label>
              <select
                value={classificationType}
                onChange={(e) => setClassificationType(e.target.value)}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              >
                <option>Multi-Label</option>
                <option>Single-Label</option>
              </select>
            </div>
          )}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectPopup;
