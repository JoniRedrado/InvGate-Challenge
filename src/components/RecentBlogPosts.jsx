import { useState } from 'react'

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

  const [ filteredBlogPosts, setFilteredBlogPosts] = useState(posts)
  
  const filterByTag = (tag) => {
    const filtered = posts.filter((e)=> e.tags.includes(tag))
    setFilteredBlogPosts(filtered)
  }

  return (
    <div className='w-full px-12 lg:px-16 py-8 flex flex-col'>
      <p className='px-5 text-3xl font-semibold'>Recent blog post</p>
      <div id='grid' className='flex flex-col lg:flex-row gap-4'>
        
        {/*Main card */}
        <div id='big-card' className='lg:w-1/2 p-5 flex flex-col gap-4'>
          <img src={filteredBlogPosts[0].image} className=' rounded-2xl'/>
          <div className='flex flex-col p-4 gap-4'>
            <p className='text-cyan-700 font-semibold'>{filteredBlogPosts[0].author}</p>
            <div className='flex w-full justify-between'>
              <p className='text-lg font-medium'>{filteredBlogPosts[0].heading}</p>
              <button>Q</button>
            </div>  
            <p className='text-lg text-gray-400'>{filteredBlogPosts[0].excerpt}</p>
            <div className='lg:flex lg:flex-row'>
              {filteredBlogPosts[0].tags.map((tag) => {
                return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full' onClick={()=>{filterByTag(tag)}}>{tag} </a>
                })}
            </div>
          </div>
        </div>
        
        <div id='little-cards-container' className='lg:w-1/2 flex flex-col gap-4 justify-between' >
        {/*Little card 1*/}
        {
          filteredBlogPosts.map((post, index) => {
            if (index === 0 || filteredBlogPosts.length === 1) return
            return (<div id='little-card-1' className='flex flex-col py-5 px-1 sm:flex-row' key={index}>
              <img src={post.image} className=' rounded-2xl sm:w-1/2'/>
              <div className='flex flex-col p-4 gap-4'>
                <p className='text-cyan-700 font-semibold'>{post.author}</p>
                <p className='text-lg font-medium'>{post.heading}</p>
                <p className='text-lg text-gray-400'>{post.excerpt}</p>
                <div>
                  {post.tags.map((tag) => {
                    return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full' onClick={()=>{filterByTag(tag)}}>{tag} </a>
                    })}
                </div>
              </div>
            </div>)
          })  
        }
          
        </div>
      </div>
    </div>
  )
}

export default RecentBlogPosts