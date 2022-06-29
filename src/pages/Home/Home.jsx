import React, { useState } from 'react'
import Header from '../../components/Home/Header/Header'
import { blogList } from '../../config/config'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import BlogList from '../../components/Home/BlogList/BlogList'
import EmptyList from '../../components/common/EmptyList/EmptyList'



const Home = () => {

    const [blogs, setBlogs] = useState(blogList)
    const [searchKey, setSearchKey] = useState('')

    //
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        handleSearchResults()
    }
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter(blog => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

        setBlogs(filteredBlogs)
    }

    const handleClearSearchKey = () => {
        setBlogs(blogList)
        setSearchKey('')
    }

    return (
        <div>
            <Header />
            <SearchBar
                value={searchKey}
                formSubmit={handleSearchSubmit}
                handleSearchKey={e => setSearchKey(e.target.value)}
                clearSearchKey={handleClearSearchKey}
            />
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
    )
}

export default Home