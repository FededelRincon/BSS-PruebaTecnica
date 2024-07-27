import React from 'react';

interface ProductsProps {
  picture: string;
  title: string;
}

export const Products: React.FC<ProductsProps> = ({ picture, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-10 sm:my-6 md:my-8 lg:my-10">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>

      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md -mt-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white text-sm sm:text-base md:text-lg lg:text-xl">
          {title}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg">$129</span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-orange-400 dark:hover:text-orange-300 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
