import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogList } from '../../config/config'
import { Link } from 'react-router-dom'
import EmptyList from '../../components/common/EmptyList/EmptyList'
import Chip from '../../components/common/Chip/Chip'
import './blog.css'


const Blog = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
            console.log(blog.id)
        }
    }, [id]);
    return (
        <div>
            <Link to="/" className="link-goback">Go back
            </Link>
            {
                blog ? (<div className="blog-wrap" key={blog.id}>
                    <header>
                        <p className="blog-date">{blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className="blogSubCategory">
                            {
                                blog.subCategory.map((category, i) => (
                                    <div key={i}><Chip label={category} key={i} className="chip" />
                                    </div>))
                            }
                        </div>
                    </header>
                    <img className="blog-img" src={blog.cover} alt="cover" />
                    <p className="blog-desc">{blog.description}</p>
                </div>) : <EmptyList />
            }
        </div>
    )
}

export default Blog