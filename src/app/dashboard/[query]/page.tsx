"use client";
import React, { useState, useEffect } from 'react';

export type ProjectData = {
  name: string,
  isPrivate: boolean,
  tags: string[],
  n: number,
  icon: string,
  id: string,
  classes: string[],
  dataset: string[]
};

export default function Page({ params }: { params: { query: string } }) {
  const data: ProjectData = {
    name: "Hard Hat",
    isPrivate: true,
    tags: ["Object detection"],
    n: 100,
    icon: "https://via.placeholder.com/150",
    id: "1",
    classes: ["head", "helmet", "person"],
    dataset: [
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
      "https://via.placeholder.com/600x400?text=Image+3",
      "https://via.placeholder.com/600x400?text=Image+4",
      "https://via.placeholder.com/600x400?text=Image+5",
      "https://via.placeholder.com/600x400?text=Image+6",
      "https://via.placeholder.com/600x400?text=Image+7",
      "https://via.placeholder.com/600x400?text=Image+8",
      "https://via.placeholder.com/600x400?text=Image+9",
      "https://via.placeholder.com/600x400?text=Image+10"
    ]
  };

  const [imagesToShow, setImagesToShow] = useState<number>(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImagesToShow(5); // Large screens
      } else if (window.innerWidth >= 768) {
        setImagesToShow(3); // Medium screens
      } else {
        setImagesToShow(1); // Small screens
      }
    };

    handleResize(); // Set initial images per row
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(data.dataset.length / imagesToShow);

  const startIndex = currentPage * imagesToShow;
  const endIndex = startIndex + imagesToShow;
  const currentImages = data.dataset.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="space-y-8 px-8 py-8 text-white h-full bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-100">{data.name}</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${data.isPrivate ? 'bg-red-600 text-red-100' : 'bg-green-600 text-green-100'}`}>
          {data.isPrivate ? 'Private' : 'Public'}
        </span>
      </div>

      {/* Dataset Split Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-500 text-center py-6 rounded-lg">
          <h4 className="text-xl font-bold">TRAIN SET</h4>
          <p className="text-3xl font-semibold mt-2">70 Images</p>
          <p className="text-lg font-medium mt-2">70%</p>
        </div>
        <div className="bg-blue-500 text-center py-6 rounded-lg">
          <h4 className="text-xl font-bold">VALID SET</h4>
          <p className="text-3xl font-semibold mt-2">20 Images</p>
          <p className="text-lg font-medium mt-2">20%</p>
        </div>
        <div className="bg-purple-500 text-center py-6 rounded-lg">
          <h4 className="text-xl font-bold">TEST SET</h4>
          <p className="text-3xl font-semibold mt-2">10 Images</p>
          <p className="text-lg font-medium mt-2">10%</p>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Image ${startIndex + index + 1}`} 
              className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button 
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors duration-300 disabled:opacity-50"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            &lt; Previous
          </button>
          
          <button 
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors duration-300 disabled:opacity-50"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next &gt;
          </button>
        </div>
      </div>

      <div className="text-sm mt-4">
        {data.tags.map((tag, index) => (
          <span key={index} className="bg-blue-600 text-blue-100 px-4 py-2 rounded-full mr-2 font-semibold">{tag}</span>
        ))}
      </div>

      {/* Classes Table */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Classes</h3>
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="px-6 py-4 text-left text-lg font-medium">Class Name</th>
            </tr>
          </thead>
          <tbody>
            {data.classes.map((cls, index) => (
              <tr key={index} className="border-t border-gray-600 hover:bg-gray-700">
                <td className="px-6 py-4 text-gray-100">{cls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
