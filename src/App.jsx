import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  // event handler jekane state manage shekhne

  // bookmark feature
  const [bookmarked , setBookmarked] = useState([]);

  const handleBookmarkAction = (blog) => {
    setBookmarked([...bookmarked , blog])
  }

  // remove from bookmark
  const handleRemoveBookmark = (id) => {
    const remainingBlogs = bookmarked.filter((blog) => blog.id !== id);
    console.log(remainingBlogs)
    setBookmarked(remainingBlogs);
  }

  // reading time feature
  const [readingTime , setReadingTime] = useState(0)

  const handleReadNowButton = (time) =>{
    setReadingTime(readingTime + time);
  }


  return (
    <>
     <Navbar></Navbar>

     <div className='main-container mt-20 flex gap-4 text-center mb-12'>
      <div className="left-side rounded-2xl ml-15 w-[70%] bg-linear-65 from-purple-500 to-pink-500">
          <Blogs handleBookmarkAction={handleBookmarkAction} handleReadNowButton={handleReadNowButton} handleRemoveBookmark={handleRemoveBookmark}></Blogs>
      </div>

      <div className="right-side rounded-2xl  ml-5 p-10 w-[20%] bg-linear-to-t from-sky-500 to-indigo-500">
        <h1 className='font-extrabold text-xl text-amber-100'>Reading Time : {readingTime}</h1>
        <h1 className='mt-4 font-extrabold text-xl text-amber-100 '>Bookmarked blogs : {bookmarked.length}</h1>
        {
          bookmarked.map(blog => <div key={blog.id} className='border-4 border-blue-50 m-3 p-2 font-medium text-base'>{blog.title}</div>)
        }
      </div>
     </div>
     <h2 className='text-center text-2xl font-medium'>May the oppressors suffer <span className='text-red-600'>10 times </span>more than the oppressed ones!</h2>
    </>
  )
}

export default App
