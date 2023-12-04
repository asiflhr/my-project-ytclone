import React, { useState, useEffect } from 'react'
import './styles/App.css'
import './styles/index.css'
import { search } from './lib/search'
import PlaylistSearchCard from './components/UI/cards/playlistSearchReasult'
import VideoSearchCard from './components/UI/cards/videoSearchReasult'
import ChannelSearchResult from './components/UI/cards/channelSearchResult'
import HomeFeed from './components/UI/cards/homeFeed'
import FileUploader from './components/UI/loaders/FileUploader'
import MainNav from './components/UI/nav/mainNav'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchData, setSearchData] = useState([])
  const [initialData, setInitialData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchInitialLoadData = async () => {
      setLoading(true)
      let data = await search('trending')
      setInitialData(data.contents)
      setLoading(false)
    }
    fetchInitialLoadData()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    const data = await search(searchQuery)
    setSearchData(data.contents)
    setLoading(false)
  }

  // console.log("search DAta: ", searchData);

  return (
    <div className='flex gap-3 flex-col items-center'>
      <MainNav />

      {/* <form
        className='flex gap-3 flex-col items-center mt-5'
        onSubmit={onSubmit}
      >
        <input
          type='text'
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder='Search here...'
          className='border rounded-md border-[#00ccff] pl-2 w-[300px] py-1'
        />

        <button
          type='submit'
          className='border border-[#00ccff] active:scale-50 shadow shadow-[#00ccff] hover:shadow-[#00ccff] hover:shadow-lg transition-all duration-700 px-7 py-2 font-semibold rounded-md hover:bg-[#00ccff]'
        >
          Search
        </button>
      </form>

      {loading ? (
        <FileUploader />
      ) : !searchData?.length > 0 &&
        initialData?.length > 0 &&
        !searchQuery?.length > 0 ? (
        <div className='flex flex-wrap gap-1'>
          {initialData.map((item, index) => (
            <HomeFeed data={item} key={index} />
          ))}
        </div>
      ) : (
        <div className='flex gap-3 flex-col bg-[#f8feff] p-5 rounded-xl shadow-lg'>
          {searchData?.length > 0 ? (
            searchData.map((item, index) =>
              item.type === 'playlist' ? (
                <PlaylistSearchCard key={index} data={item} />
              ) : item.type === 'video' ? (
                <VideoSearchCard key={index} data={item} />
              ) : item.type === 'channel' ? (
                <ChannelSearchResult key={index} data={item} />
              ) : null
            )
          ) : (
            <span>No Search Results Found</span>
          )}
        </div>
      )} */}
    </div>
  )
}

export default App
