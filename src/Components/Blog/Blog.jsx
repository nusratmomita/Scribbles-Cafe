import React from 'react';
import { IoBookmarksSharp } from "react-icons/io5";

const Blog = ({blog , handleBookmarkAction , handleReadNowButton , handleRemoveBookmark}) => {
    // console.log(blog)
    return (
        <div>
            <div className="card bg-base-100 w-100 h-130 shadow-sm rounded-2xl text-center">
                <figure>
                    <img
                    src={blog.cover}
                    alt="BLogs" />
                </figure>
                <div className="card-body">
                    <h1 className="text-lg font-bold text-center">{blog.title}</h1>
                    <div className='flex justify-around items-center'>
                        <img className="w-16" src={blog.author_img} alt="" />
                        <h2 className='text-lg font-semibold'>Author : {blog.author}</h2>

                    </div>
                    <div className="mt-2 p-2 hashtags flex gap-2 border border-amber-100">
                        {
                            blog.hashtags.map((hashtag) => <h3 key={hashtag} className='font-bold text-xl'>#{hashtag}</h3>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <div className='mt-4 grid grid-cols-2 gap-40 justify-end'>
                            <button onClick={() => handleReadNowButton(blog.reading_time)} className="btn btn-primary -ml-5 font-bold">Read Now</button>                        <div className='mt-3 ml-10'>
                            <button onClick = {() => handleBookmarkAction(blog)} className='cursor-pointer'> <IoBookmarksSharp size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-2 bg-red-300 w-30 h-11 rounded-xl text-black'>
                        <button onClick={() => handleRemoveBookmark(blog.id)} className="cursor-pointer whitespace-nowrap p-3 font-bold hover:bg-red-200">Done Reading?</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;