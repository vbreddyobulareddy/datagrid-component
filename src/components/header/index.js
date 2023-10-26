import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <div>
        <nav className="bg-blue-500 dark:bg-gray-800 text-white shadow py-2 ">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-8">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  DataGrid-Component
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;
