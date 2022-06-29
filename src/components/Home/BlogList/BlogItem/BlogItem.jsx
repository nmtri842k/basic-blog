import React from 'react'
import Chip from '../../../common/Chip/Chip'
import './blog-item.css'
import { Link } from 'react-router-dom'


const BlogItem = ({ blog: { id, title, description, category, createdAt, authorName, authorAvatar, cover } }) => {
    return (
        <div className="blog-item-wrap">
            <Link to={`/blog/${id}`}> <img src={cover} alt="cover" className='blog-item-cover' /></Link>
            <Chip label={category} />
            <h3>{title}</h3>
            <p className="blog-item-desc">{description}</p>

            <footer className="blog-item-author">
                <div className="blog-item-author-img">
                    <img src={authorAvatar} alt="avatar" />
                    <div >
                        <h5>{authorName}</h5>
                        <p>{createdAt}</p>
                    </div>

                </div>
                <Link to={`/blog/${id}`} className="blog-item-link"> ➝ </Link>
            </footer>

        </div >
    )
}

export default BlogItem