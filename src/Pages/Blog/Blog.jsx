import React, { useEffect, useState } from "react";
import blog1 from "../../assets/391.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { data } from "react-router-dom";
import BlogCard from './BlogCard'

const Blog = () => {
  const [productC, setProductC]= useState([])
  useEffect(()=>{
    fetch("/blogs.json")
    .then(res => res.json())
    .then(data => setProductC(data))
  },[])
  return (
    <section className="w-8/12 mx-auto mt-20">
      <div className=" flex justify-between">
        <div className="flex items-center justify-start gap-5 text-black text-2xl">
          <img src={blog1} alt="" />
          <p>Recipies Articles</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium flex items-center gap-3 p-2 rounded-md">
            Show:50
            <RiArrowDropDownLine />
          </span>
          <span className="text-gray-600 font-medium flex items-center gap-3 p-2 rounded-md">
            Short Featured:50
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {
          productC.map(blog=>(
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          ))
        }
      </div>
    </section>
  );
};

export default Blog;
