import React from 'react'

const RecentBlogPosts = () => {

  const posts = [
    {
      author: "Olivia Rhye • 20 Jan 2022",
      heading: "UX review presentations",
      excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      image: 'src/assets/5_post-1.png'
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


  return (
    <div className='w-full px-16 py-8 flex flex-col'>
      <p className='px-5 text-3xl font-semibold'>Recent blog post</p>
      <div id='grid' className='flex flex-col lg:flex-row gap-4'>
        <div id='big-card' className='lg:w-1/2 p-5 flex flex-col gap-4'>
          <img src={posts[0].image} className=' rounded-2xl'/>
          <div className='flex flex-col p-4 gap-4'>
            <p className='text-cyan-700 font-semibold'>{posts[0].author}</p>
            <div className='flex w-full justify-between'>
              <p className='text-2xl font-semibold'>{posts[0].heading}</p>
              <button>Q</button>
            </div>  
            <p className='text-lg text-gray-400'>{posts[0].excerpt}</p>
            <div className='lg:flex lg:flex-row'>
              {posts[0].tags.map((tag) => {
                return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full'>{tag} </a>
                })}
            </div>
          </div>
        </div>
        <div id='little-cards-container' className='lg:w-1/2 flex flex-col gap-4 justify-between' >
          <div id='little-card-1' className='flex flex-col py-5 px-1 sm:flex-row'>
            <img src={posts[1].image} className=' rounded-2xl sm:w-1/2'/>
            <div className='flex flex-col p-4 gap-4'>
              <p className='text-cyan-700 font-semibold'>{posts[1].author}</p>
              <p className='text-2xl font-semibold'>{posts[1].heading}</p>
              <p className='text-lg text-gray-400'>{posts[1].excerpt}</p>
              <div>
                {posts[1].tags.map((tag) => {
                  return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full'>{tag} </a>
                  })}
              </div>
            </div>
          </div>
          <div id='little-card-2' className='flex flex-col py-5 px-1 sm:flex-row'>
            <img src={posts[2].image} className=' rounded-2xl sm:w-1/2'/>
            <div className='flex flex-col p-4 gap-4'>
              <p className='text-cyan-700 font-semibold'>{posts[2].author}</p>
              <p className='text-2xl font-semibold'>{posts[2].heading}</p>
              <p className='text-lg text-gray-400'>{posts[2].excerpt}</p>
              <div>
                {posts[2].tags.map((tag) => {
                  return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full'>{tag} </a>
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogPosts