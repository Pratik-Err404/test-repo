import React from 'react'
import Hero from '../../components/Blog/Hero'
import BlogsComponent from "../../components/Blog/BlogsComponent"

const BlogPage2 = () => {
  return (
    <div className="lg:pt-36  ">
      <Hero />

      <div className="p-12 lg:p-24">
        <h1 className="text-5xl ps-20 text-white font-semibold mb-10 hidden md:flex">Recent Posts</h1>
        <BlogsComponent />
      </div>
    </div>
  )
}

export default BlogPage2