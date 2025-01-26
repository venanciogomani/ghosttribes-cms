import ProductsOverview from '../../components/concepts/products/ProductsOverview';
import Header from '../../components/shared/Header/Header';
import Sidebar from '../../components/shared/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex justify-between w-screen h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col w-4/5">
        <Header />
        <div className="p-4 h-full">
          <ProductsOverview />
        </div>
      </div>
    </div>
  );
}
