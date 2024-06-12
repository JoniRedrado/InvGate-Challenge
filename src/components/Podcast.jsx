import {useState} from 'react'

const Podcast = () => {

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

  const [ filteredPodcasts, setFilteredPodcasts] = useState(podcasts)
  
  const filterByTag = (tag) => {
    const filtered = podcasts.filter((e)=> e.tags.includes(tag))
    setFilteredPodcasts(filtered)
  }
    
  return (
    <div className='w-full' style={{backgroundColor: 'rgba(253,242,250,0.45)'}}>
      <div className='px-12 py-7 lg:px-16'>

        <p className='text-2xl font-medium py-2 px-5'>Hear Ticket Volume, our podcast of ITSM world</p>
        <div id='cards-container' className='flex flex-col lg:flex-row'>
          {filteredPodcasts.map(podcast =>{
            return (
              <div id='big-card' className='lg:w-1/3 p-5 flex flex-col gap-4' key={podcast.author}>
                <img src={podcast.image} className=' rounded-2xl'/>
                <div className='flex flex-col p-4 gap-4'>
                  <p className='text-cyan-700 font-semibold'>{podcast.author}</p>
                  <div className='flex w-full justify-between'>
                    <p className='text-lg font-medium'>{podcast.heading}</p>
                    <button>Q</button>
                  </div>  
                  <p className='text-lg text-gray-400'>{podcast.excerpt}</p>
                  <div className='lg:flex lg:flex-row'>
                    {podcast.tags.map((tag) => {
                      return <a key={tag} className='px-2 m-1 bg-slate-100 rounded-full' onClick={()=>{filterByTag(tag)}}>{tag} </a>
                      })}
                  </div>
                </div>
              </div>
            )
            })}
        </div>
      </div>
    </div>
  )
}

export default Podcast