import React, {useRef} from 'react';
const App = () => {
  const showMenu = () => {
    const menu = document.querySelector('#menuNav');
    menu.classList.toggle('hidden');
  }

  return (
    <>
      <nav>
        <div className='container mx-auto flex flex-wrap items-center justify-around py-3'>
          <div>
            <a href="/home">
              <span className='font-bold text-5xl hover:opacity-60 duration-300'>ClothEs</span>
            </a>
          </div>
          <div>
            <button className='lg:hidden' onClick={showMenu}>
              <svg className='hover:opacity-60 duration-300' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="44" height="44" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z"/></svg>
            </button>
          </div>
          <div className='my-3 mx-5 w-full flex flex-col gap-y-3 lg:flex lg:items-center lg:gap-x-5 lg:w-auto lg:flex-row' id='menuNav'>
            <a href="/home">
              <span className='text-lg font-bold hover:opacity-60 duration-300'>Inicio</span>
            </a>
            <a href="/catalogue">
              <span className='text-lg font-bold hover:opacity-60 duration-300'>Catalogo</span>
            </a>
            <a href="/faqs">
              <span className='text-lg font-bold hover:opacity-60 duration-300'>Preguntas Frecuentes</span>
            </a>
            <a href="/contact">
              <span className='text-lg font-bold hover:opacity-60 duration-300'>Contactanos</span>
            </a>
            <div className='flex gap-x-5'>
              <a href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="44" height="44" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m239 206.2l-14.3-128A15.9 15.9 0 0 0 208.8 64h-33.5a48 48 0 0 0-94.6 0H47.2a15.9 15.9 0 0 0-15.9 14.2L17 206.2a16.2 16.2 0 0 0 4 12.5a15.9 15.9 0 0 0 11.9 5.3h190.2a15.9 15.9 0 0 0 11.9-5.3a16.2 16.2 0 0 0 4-12.5ZM96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm1-40a32 32 0 0 1 62 0Zm79 40a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"/></svg>
              </a>
              <a href="/user">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="44" height="44" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/><path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )

}

export default App