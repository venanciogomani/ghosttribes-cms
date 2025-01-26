import Header from '../../components/shared/Header/Header';
import Sidebar from '../../components/shared/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex justify-between w-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-4/5 h-full">
        <Header />
        <div className="p-4">All pages and routes</div>
      </div>
    </div>
  );
}
