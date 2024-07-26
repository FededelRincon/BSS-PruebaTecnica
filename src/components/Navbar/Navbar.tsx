import { useState } from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-7 py-0 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              className='md:mx-4 md:my-0 w-32'
              src="../../../../public/logo.jpg"
              alt="Logo" 
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:hidden`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link to="/" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
              Bienvenida
            </Link>
            <Link to="/catalog" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
              Catálogo
            </Link>
            <Link to="/contact" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
              Contacto
            </Link>
          </div>
        </div>

        {/* Normal Menu */}
        <div className="hidden md:flex md:flex-row md:mx-6">
          <Link to="/" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
            Bienvenida
          </Link>
          <Link to="/catalog" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
            Catálogo
          </Link>
          <Link to="/contact" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 md:mx-4 md:my-0">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};