import { useState } from 'react'

const SearchContainer = () => {

  const podcasts = [
    {
      author: "Alec Whitten • 17 Jan 2022",
      heading: "Bill Walsh leadership lesson",
      excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management"],
      image: 'src/assets/3_card-1.jpeg'
    },
    {
      author: "Demi WIlkinson • 16 Jan 2022",
      heading: "PM mental models",
      excerpt: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      image: 'src/assets/4_card-2.jpeg'
    },
    {
      author: "Candice Wu • 15 Jan 2022",
      heading: "What is Wireframing?",
      excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research"],
      image: 'src/assets/5_card-3.jpeg'
    },
  ]

  const [input, setInput ]  = useState('')

  const search = (e)=>{
    e.preventDefault()
    const results = podcasts.filter(podcast => podcast.heading.includes(input))
    console.log(results);
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
  }

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
        
          <form onSubmit={search} className='sm:h-12 sm:w-3/4 w-full flex flex-col-reverse sm:flex-row'>
            <button type='submit' className='p-1 sm:py-3 sm:px-5 bg-sky-500 sm:rounded-l-lg'>🔍</button>
            <input className='p-2 sm:rounded-r-lg sm:w-full' type='text' placeholder='I’m looking for…' value={input} onChange={handleChange}/>
          </form>
        
        <p className='font-normal text-sm text-slate-400'>We care about your data in our <u className='hover:cursor-pointer'>privacy policy</u></p>
      </div>
    </section>
  )
}

export default SearchContainer