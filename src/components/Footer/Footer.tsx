import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="container px-7 py-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">

          {/* Logo a la izquierda */}
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img 
                className='w-24 md:w-32'
                src="../../../../public/logo.jpg"
                alt="Logo" 
              />
            </Link>
          </div>
          
          {/* Derechos reservados en el centro */}
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © 2024 Restaurant. Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces a la derecha */}
          <div className="flex flex-col items-center md:items-end">
            <a
              href="#"
              className="mb-2 md:mb-1 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};