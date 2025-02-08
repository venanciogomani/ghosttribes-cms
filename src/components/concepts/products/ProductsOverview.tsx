import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { useEffect, useState } from 'react';
import { DataTable, IDataItem } from '../../shared/DataTable/DataTable';
import { categories, products, tags } from '../../../constants/data';
import { createProductsDataTable } from './controllers/ProductsController';
import { createCategoriesDataTable } from './controllers/CategoriesController';
import { createTagsDataTable } from './controllers/TagsController';
import FilterDrawer from '../../shared/FilterDrawer/FilterDrawer';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';

export default function ProductsOverview() {
  const [show, setShow] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>('products');
  const [tableData, setTableData] = useState<IDataItem>({} as IDataItem);
  const navigate = useNavigate();

  const productsData = createProductsDataTable(products);
  const categoriesData = createCategoriesDataTable(categories);
  const tagsData = createTagsDataTable(tags);

  useEffect(() => {
    if (Object.keys(productsData).length) {
      setTableData(productsData);
      setSelectedTab('products');
      setShow(false);
      setOpenCreate(false);
    }
  }, [products]);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
    setShow(false);
    setOpenCreate(false);
    if (tab === 'products') {
      setTableData(productsData);
    } else if (tab === 'collections') {
      setTableData(categoriesData);
    } else if (tab === 'categories') {
      setTableData(categoriesData);
    } else if (tab === 'tags') {
      setTableData(tagsData);
    }
  };

  return (
    <div className="relative flex flex-col h-full p-4">
      <h1 className="text-2xl text-bold text-slate-800">Products Overview</h1>
      <div className="mt-4 bg-white rounded-lg w-full h-full shadow-lg">
        <div className="p-4 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center grow">
              <div
                className={
                  selectedTab === 'products'
                    ? `p-2 rounded-t-lg border-t border-l border-r border-slate-300`
                    : `p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out`
                }
                onClick={() => {
                  if (selectedTab !== 'products') {
                    handleSelectTab('products');
                  }
                }}
              >
                <span className="cursor-pointer">Products</span>
              </div>
              <div
                className={
                  selectedTab === 'collections'
                    ? `p-2 rounded-t-lg border-t border-l border-r border-slate-300`
                    : `p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out`
                }
                onClick={() => {
                  if (selectedTab !== 'collections') {
                    handleSelectTab('collections');
                  }
                }}
              >
                <span className="cursor-pointer">Collections</span>
              </div>
              <div
                className={
                  selectedTab === 'categories'
                    ? `p-2 rounded-t-lg border-t border-l border-r border-slate-300`
                    : `p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out`
                }
                onClick={() => {
                  if (selectedTab !== 'categories') {
                    handleSelectTab('categories');
                  }
                }}
              >
                <span className="cursor-pointer">Categories</span>
              </div>
              <div
                className={
                  selectedTab === 'tags'
                    ? `p-2 rounded-t-lg border-t border-l border-r border-slate-300`
                    : `p-2 border-b border-slate-300 bg-tranparent rounded-t-lg
                hover:bg-gray-100 transition duration-300 ease-in-out`
                }
                onClick={() => {
                  if (selectedTab !== 'tags') {
                    handleSelectTab('tags');
                  }
                }}
              >
                <span className="cursor-pointer">Tags</span>
              </div>
              <div className="p-2 grow border-b border-slate-300">&nbsp;</div>
            </div>
            <div className="flex items-center">
              <div
                className="relative flex items-center px-3 py-2 bg-sky-800 rounded
                hover:bg-sky-600 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => setOpenCreate(!openCreate)}
              >
                <span className="text-white">Create</span>
                <ExpandMoreOutlinedIcon className="ml-2 text-white" />
                {openCreate && (
                  <div className="absolute bg-white shadow-lg rounded flex flex-col top-12 right-0 min-w-40 border border-gray-200">
                    <div
                      className="w-full p-2 text-sm cursor-pointer bg-transparent 
                      hover:bg-gray-100 transition duration-300 ease-in-out"
                      onClick={() => navigate('/admin/products/create')}
                    >
                      Product
                    </div>
                    <div
                      className="w-full p-2 text-sm cursor-pointer bg-transparent 
                      hover:bg-gray-100 transition duration-300 ease-in-out"
                      onClick={() =>
                        navigate('/admin/products/create?type=collection')
                      }
                    >
                      Collection
                    </div>
                    <div
                      className="w-full p-2 text-sm cursor-pointer bg-transparent 
                      hover:bg-gray-100 transition duration-300 ease-in-out"
                      onClick={() => {
                        console.log('open create modal');
                      }}
                    >
                      Category
                    </div>
                    <div
                      className="w-full p-2 text-sm cursor-pointer bg-transparent 
                      hover:bg-gray-100 transition duration-300 ease-in-out"
                      onClick={() => {
                        console.log('open create modal');
                      }}
                    >
                      Tag
                    </div>
                  </div>
                )}
              </div>
              {selectedTab === 'products' && (
                <div className="relative p-4">
                  <TuneOutlinedIcon
                    className="text-sky-600 cursor-pointer"
                    onClick={() => setShow(true)}
                  />
                  <span className="absolute top-2 right-2 bg-pink-600 px-1 rounded-full text-white text-xs">
                    2
                  </span>
                </div>
              )}
            </div>
          </div>
          <DataTable columns={tableData.columns} rows={tableData.rows} />
        </div>
      </div>
      <FilterDrawer show={show} setShow={setShow} />
    </div>
  );
}
