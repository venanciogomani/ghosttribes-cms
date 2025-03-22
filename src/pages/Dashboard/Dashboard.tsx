import { useState } from 'react';
import Header from '../../components/shared/Header/Header';
import Sidebar from '../../components/shared/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex justify-between w-screen h-screen bg-gray-200">
      <Sidebar open={isSidebarOpen} />
      <div
        className={`flex flex-col ${isSidebarOpen ? 'w-4/5' : 'w-[calc(100%_-_60px)]'}`}
      >
        <Header closeSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className=" h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
