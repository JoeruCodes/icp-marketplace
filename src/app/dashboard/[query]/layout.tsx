import Link from 'next/link';
import React from 'react';

const Layout = ({ children, params }: Readonly<{
  children: React.ReactNode;
  params: { query: string };
}>) => {
  return (
    <div className="flex bg-black rounded-lg">
      <div className="w-18 ">
        <div className='bg-gray-800/50 w-full h-full flex flex-col'>
          <Link href={`/dashboard/${params.query}`} className="text-white py-2 px-4 hover:bg-gray-700 text-center">
            Info
          </Link>
          <Link href={`/dashboard/${params.query}/annotate`} className="text-white py-2 px-4 hover:bg-gray-700 text-center">
            Annotate
          </Link>
        </div>
      </div>
      <div className="flex-1 overflow-scroll">
        <div className='w-full rounded-lg h-full bg-gray-700/30 overflow-scroll'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
