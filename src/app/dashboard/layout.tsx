import Link from 'next/link';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';


const Layout = ({children}: Readonly<{
    children: React.ReactNode;
  }> ) => {
  return (
    <div className="flex bg-black flex-1">
        
    <div className="max-w-32 min-w-6 p-4 pr-2">
      <div className='bg-gray-800/50 w-full rounded-lg h-full'>
        <Link href={`/dashboard`} className="flex justify-center items-center text-white py-2 px-4 hover:bg-gray-700">
          <FaFolderOpen className="h-6 w-6"/>
        </Link>
      </div>
    </div>
    <div className="flex-1 p-4 pl-2">
      <div className='w-full rounded-lg h-full bg-gray-700/30 overflow-scroll'>
        {children}
      </div>
    </div>
  </div>
  )
}

export default Layout;
