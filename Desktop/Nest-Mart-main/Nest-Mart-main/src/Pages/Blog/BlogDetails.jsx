import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blog = useLoaderData();
  return (
    <div>
      {blog.details}
    </div>
  );
}

export default BlogDetails;
