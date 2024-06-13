import { useState } from 'react'

const SearchContainer = () => {

  const posts = [
    {
      author: "Olivia Rhye • 20 Jan 2022",
      heading: "UX review presentations",
      excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      image: 'src/assets/6_post-1.png'
    },
    {
      author: "Phoenix Baker • 19 Jan 2022",
      heading: "Migrating to Linear 101",
      excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      tags: ["Design", "Research"],
      image: 'src/assets/6_post-2.png'
    },
    {
      author: "Lana Steiner • 18 Jan 2022",
      heading: "Building your API Stack",
      excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: ["Design", "Research"],
      image: 'src/assets/7_post-3.png'
    },
    {
      author: "Olivia Rhye • 20 Jan 2022",
      heading: "UX review presentations",
      excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      image: 'src/assets/6_post-1.png'
    },
    {
      author: "Phoenix Baker • 19 Jan 2022",
      heading: "Migrating to Linear 101",
      excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      tags: ["Design", "Research"],
      image: 'src/assets/6_post-2.png'
    },
    {
      author: "Lana Steiner • 18 Jan 2022",
      heading: "Building your API Stack",
      excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: ["Design", "Research"],
      image: 'src/assets/7_post-3.png'
    },
  ]

  const [input, setInput ]  = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState('hidden')

  const search = (e)=>{
    e.preventDefault()
    const results = posts.filter(podcast => podcast.heading.includes(input))
    console.log(results);
    setSearching('')
    setSearchResults(results)
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
  }

  return (
    <>
      <section className='mx-16 px-10 py-6 rounded-2xl shadow-xl shadow-slate-200/75 bg-indigo-50 flex flex-col items-center lg:flex lg:flex-row-reverse' style={{backgroundColor:'rgb(227, 242, 255)'}}>
        <div id='video-container' className='lg:w-1/2'>
          <video autoPlay loop muted playsInline src='src\assets\2_hero.webm' type='video/webm'>
            <source />
          </video>
        </div>
        <div id='search-container' className='flex flex-col gap-6 lg:w-1/2'>
          <p className='font-medium text-base text-sky-600 '>Articles, videos and more</p>
          <p className='font-medium text-5xl text-cyan-950'>Find the most relevant content in the IT world</p>
          
            <form onSubmit={search} className='sm:h-12 sm:w-3/4 w-full flex flex-col-reverse sm:flex-row'>
              <button type='submit' className='p-1 sm:py-3 sm:px-5 bg-sky-500 sm:rounded-l-lg'>🔍</button>
              <input className='p-2 sm:rounded-r-lg sm:w-full' type='text' placeholder='I’m looking for…' value={input} onChange={handleChange}/>
            </form>
          
          <p className='font-normal text-sm text-slate-400'>We care about your data in our <u className='hover:cursor-pointer'>privacy policy</u></p>
        </div>
      </section>
      <div id='search-component' className={'fixed inset-0 min-h-full h-fit bg-white bg-opacity-80 backdrop-blur-lg flex flex-col justify-start items-start mt-16 p-16 gap-5 lg:items-center overflow-auto max-h-screen ' + searching} >
        <form onSubmit={search} className='h-12 w-full lg:w-2/4 flex flex-row sm:flex-row justify-center'>
          <button type='submit' className='p-1 sm:py-3 sm:px-5 bg-sky-500 rounded-l-lg'>🔍</button>
          <input className='p-2 rounded-r-lg sm:w-full' type='text' placeholder='I’m looking for…' value={input} onChange={handleChange}/>
        </form>
        <div className='flex flex-wrap justify-center px-4'>
        {
          searchResults.map((post, index) => {
            return (<div className='flex flex-col items-center lg:w-1/2 p-4 rounded-2xl' key={index}>
              <img src={post.image} className=' rounded-2xl'/>
              <div className='flex flex-col p-4'>
                <p className='text-cyan-700 font-semibold text-md'>{post.author}</p>
                <p className='text-md font-medium'>{post.heading}</p>
                <p className='text-md text-gray-400'>{post.excerpt}</p>
              </div>
            </div>)
          })  
        }
        </div>
      </div>
    </>
  )
}

export default SearchContainer