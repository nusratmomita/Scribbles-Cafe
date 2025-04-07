import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmarkAction }) => {

    // setting the blogs.json API to a variable and using useState to set the blogs state
    const [blogs , setBlogs] = useState([])
    
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])

    // console.log(blogs)
    

    return (
        <div>
            <h1 className='mt-16 font-extrabold text-4xl text-amber-100'>Total Blogs : {blogs.length}</h1>
            <div className='grid grid-cols-2 gap-5 mt-10 items-center justify-items-center p-4 '>
            {
                blogs.map((blog) => <Blog handleBookmarkAction={handleBookmarkAction} blog={blog} key={blog.id}>
                    
                </Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;