import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useState } from 'react';

export interface IDataItem {
  columns: string[] | undefined;
  rows: JSX.Element[] | undefined;
}
export function DataTable({ columns = [], rows = [] }: IDataItem) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(rows.length / pageSize);

  const handlePageClick = (page: number) => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="overflow-x-auto p-2 flex flex-col">
      <div className="grid grid-cols-6 p-2 bg-[#214162] text-white font-semibold">
        {columns.map((col, colIndex) => (
          <div key={colIndex}>{col}</div>
        ))}
      </div>
      <div className="flex flex-col">
        {rows.length === 0 ? (
          <div className="w-full text-center p-4">No data to show</div>
        ) : (
          <>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex}>{row}</div>
            ))}
          </>
        )}
      </div>
      <div className="bg-slate-100 p-2 flex items-center justify-between">
        <div className="text-sm text-slate-400">
          Page {currentPage} of {totalPages}
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-center">
            <div
              className="flex items-center justify-center border-2 border-blue-400 w-8 
                    h-8 text-sm text-center cursor-pointer mx-1 text-slate-600"
            >
              <ChevronLeftOutlinedIcon />
            </div>
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className={`flex items-center justify-center border-2 border-blue-400 w-8 
                        h-8 text-sm text-center mx-1 font-semibold 
                        ${
                          currentPage === pageIndex + 1
                            ? 'text-white bg-blue-400'
                            : 'text-slate-600 cursor-pointer'
                        }`}
                onClick={() => handlePageClick(pageIndex + 1)}
              >
                {pageIndex + 1}
              </div>
            ))}
            <div
              className="flex items-center justify-center border-2 border-blue-400 w-8 
                    h-8 text-sm text-center cursor-pointer mx-1 text-slate-600"
            >
              <ChevronRightOutlinedIcon />
            </div>
          </div>
        )}
        <div className="text-sm text-slate-400">{rows.length} items</div>
      </div>
    </div>
  );
}
