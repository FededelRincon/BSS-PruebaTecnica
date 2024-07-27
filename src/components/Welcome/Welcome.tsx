// import React from 'react'

import { Link } from "react-router-dom"

export const Welcome = () => {
  return (
    <>
      {/* Hero section */}
      <section className="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="max-w-xl font-serif text-4xl font-medium tracking-wide text-gray-800 capitalize md:text-6xl">Una hermosa aventura te espera</h1>
          <p className="max-w-lg mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatibus perferendis odit optio.</p>
          <div className="mt-6 sm:flex sm:items-center">
            <Link to="/catalogo" 
              className="bg-gray-800 hover:bg-gray-800/80 duration-300 transition-colors border-2 border-gray-800 px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white">
                 Catalogo 
            </Link>
            <Link to="/contacto" className="border-2 text-sm duration-300 transition-colors hover:bg-orange-400 hover:text-gray-800 font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-gray-800 sm:mx-4 border-gray-800 px-6 block text-center py-3 uppercase">
               Contacto 
            </Link>
          </div>
        </div>
        <div className="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-gray-800/50">
          <img className="object-cover w-full h-full rounded-t-full" src="https://media-cdn.tripadvisor.com/media/photo-s/15/27/2e/4e/nuestro-jardin.jpg&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80" alt="main page" />
        </div>
      </section>

      {/* Us section */}
      <section className="bg-gray-800 mt-12">
        <div className="container flex flex-col px-6 py-16 mx-auto mt-12">
          <div className="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
            <img className="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96" src="https://www.laizquierdadiario.com/IMG/arton215100.jpg?1640643279&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1374&amp;q=80" alt="" />
            <div className="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
              <h3 className="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl"> Discover yourself with nature </h3>
              <p className="mt-4 text-gray-200"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi fugiat dicta impedit sed quisquam quas veritatis consectetur neque saepe, autem facilis dolore officiis minima explicabo perferendis ab porro magnam! </p>
              <Link to="/contacto" className="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:border-orange-400 hover:bg-white hover:text-gray-800 duration-300 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <img className="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12" src="https://media-cdn.tripadvisor.com/media/photo-s/1f/6a/9a/61/santa-calma.jpg&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1374&amp;q=80" alt="" />
        </div>
      </section>
      <div className="w-full h-1 bg-white mt-0"></div>

    </>
  )
}
