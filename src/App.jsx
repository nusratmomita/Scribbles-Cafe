import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  // event handler jekane state manage shekhne

  const [bookmarked , setBookmarked] = useState([]);

  const handleBookmarkAction = (blog) => {
    // console.log(blog)
    setBookmarked([...bookmarked , blog])
  }

  console.log(bookmarked);
  
  return (
    <>
     <Navbar></Navbar>

     <div className='main-container mt-20 flex gap-4 text-center mb-12'>
      <div className="left-side rounded-2xl ml-20 w-[70%] bg-linear-65 from-purple-500 to-pink-500">
          <Blogs handleBookmarkAction={handleBookmarkAction} ></Blogs>
      </div>

      <div className="right-side rounded-2xl  ml-5 p-10 w-[20%] bg-linear-to-t from-sky-500 to-indigo-500">
        <h1 className='font-extrabold text-xl text-amber-100'>Reading Time : </h1>
        <h1 className='mt-4 font-extrabold text-xl text-amber-100 '>Bookmarked blogs : </h1>
        
        {
          bookmarked.map(blog => <div className='border-4 border-blue-50 m-3 p-2 font-medium text-base'>{blog.title}</div>)
        }
      </div>
     </div>
    </>
  )
}

export default App
