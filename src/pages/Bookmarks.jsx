import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = id =>{
    deleteBlog(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }
  if (blogs.length<1) return <EmptyState message='No Bookmarks Available!!' address={'/blogs'} label={'Go To Blogs'}></EmptyState>
  return (
    <div className="max-w-7xl p-6 mx-auto">
      <div className="grid  justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard handleDelete={handleDelete} deletable={true} key={blog.key} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
