import React from 'react'
import './blog-list.css'
import BlogItem from './BlogItem/BlogItem'

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
            {blogs.map((blog, i) => (<BlogItem blog={blog} key={blog.id} />))
            }
        </div>
    )
}

export default BlogList