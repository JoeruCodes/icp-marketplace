"use client"
import React, { useState, DragEvent, ChangeEvent } from 'react';

const Page: React.FC = () => {
  // Define the type for the files state, which is an array of File objects
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [annotating, setAnnotating] = useState<boolean>(false);

  // Event handler types
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDeleteFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div className="flex px-6 py-4 space-x-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-screen">
      {/* Drag and Drop Section */}
      <div className="flex flex-col items-center justify-center w-1/3 p-4">
        <div
          className="w-full h-64 border-2 border-dashed border-gray-500 flex flex-col items-center justify-center text-gray-400 p-6 rounded-lg bg-gray-800"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p>Drag & Drop your files here</p>
          <p>or</p>
          <input
            type="file"
            multiple
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300">
              Browse Files
            </button>
          </label>
        </div>
        <p className="mt-2 text-sm text-gray-400">Supported formats: JPG, PNG, etc.</p>
        <div className="mt-4 w-full max-h-32 overflow-y-auto text-gray-400">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded mt-2">
              <span>{file.name}</span>
              <button
                onClick={() => handleDeleteFile(index)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Annotating Section */}
      <div className="flex flex-col items-start justify-start w-1/3 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-100">Annotate</h2>
        <div className="w-full h-full p-2 text-gray-400">
          {annotating ? (
            <p>Annotating in progress...</p>
          ) : (
            <p>Upload and assign images to an annotator.</p>
          )}
        </div>
      </div>

      {/* Dataset Section */}
      <div className="flex flex-col items-start justify-start w-1/3 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-100">Dataset</h2>
        <div className="w-full h-full p-2 text-gray-400">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm">Forked on 8/12/2024</p>
            <p className="text-sm">Labeler: Yeah_i_code</p>
            <p className="text-sm mt-2">100 Images</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300">
              See all 100 images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
