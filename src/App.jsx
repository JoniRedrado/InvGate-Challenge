import './App.css'
import NavBar from './components/NavBar'
import Podcast from './components/Podcast'
import RecentBlogPosts from './components/RecentBlogPosts'
import SearchContainer from './components/SearchContainer'

function App() {

  return (
    <div>
      <NavBar />
      <SearchContainer />
      <RecentBlogPosts />
      <Podcast />
    </div>
  )
}

export default App
