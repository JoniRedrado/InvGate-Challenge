import React from 'react'

const SearchContainer = () => {
  return (
    <section className='mx-16 px-10 py-6 rounded-2xl shadow-xl shadow-slate-200/75 bg-indigo-50 flex flex-col items-center lg:flex lg:flex-row-reverse' style={{backgroundColor:'rgb(227, 242, 255)'}}>
      <div id='video-container' className='lg:w-1/2'>
        <video autoPlay loop muted playsInline src='src\assets\2_hero.webm' type='video/webm'>
          <source />
        </video>
      </div>
      <div id='search-container' className='flex flex-col gap-6 lg:w-1/2' /*Buscar color de fondo del video!*/>
        <p className='font-medium text-base text-sky-600 '>Articles, videos and more</p>
        <p className='font-medium text-5xl text-cyan-950'>Find the most relevant content in the IT world</p>
        <div className='sm:h-12 sm:w-3/4 w-full flex flex-col-reverse sm:flex-row'>
          <button className='p-1 sm:py-3 sm:px-5 bg-sky-500 sm:rounded-l-lg'>🔍</button>
          <input className='p-2 sm:rounded-r-lg sm:w-full' type='text' placeholder='I’m looking for…'/>
        </div>
        <p className='font-normal text-sm text-slate-400'>We care about your data in our <u className='hover:cursor-pointer'>privacy policy</u></p>
      </div>
    </section>
  )
}

export default SearchContainer