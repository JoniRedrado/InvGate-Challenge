/* eslint-disable react/prop-types */
const SearchResults = (props) => {

  const {post, styles} = props

  return (
    <div className={styles} key={post.author}>
      <img src={post.image} className=' rounded-2xl'/>
      <div className='flex flex-col p-4'>
        <p className='text-cyan-700 font-semibold text-md'>{post.author}</p>
        <p className='text-md font-medium'>{post.heading}</p>
        <p className='text-md text-gray-400'>{post.excerpt}</p>
      </div>
    </div>
  )
}

export default SearchResults