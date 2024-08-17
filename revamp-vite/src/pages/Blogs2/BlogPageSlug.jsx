import { useParams } from "react-router-dom";
import { AiFillLike } from 'react-icons/ai';
import { useEffect } from "react";
import BlogsComponent from "../../components/Blog/BlogsComponent";
import useBlogById from "../../hooks/getBlogsById";
import useLike from "../../hooks/useLike";

const BlogPageSlug = () => {
  const { id } = useParams(); // Get the id from the URL
  const { data, loading, refetch } = useBlogById(id); // Add refetch to re-fetch data

  // Call the useLike hook with initial values
  const initialLikes = data && data.blog ? data.blog.likes : 0;
  const { likes, likeBlog } = useLike(initialLikes, id);

  useEffect(() => {
    // Refetch the blog data whenever likes change
    refetch();
  }, [likes, refetch]);

  if (loading) return <div>Loading...</div>;

  // Ensure 'data' is not null or undefined before trying to access its properties
  if (!data || !data.blog) return <div>Blog not found</div>;

  const blog = data.blog;
  let blog_body = blog.body;

  return (
    <div className="p-4 pt-20 bg-black">
      <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
        <button className="pb-6 text-black">Blog &gt; {blog.title}</button>
        <div className="relative bg-gradient-to-bl from-white to-black rounded-3xl">
          <h1 className="text-3xl font-bold mb-4 absolute text-black bottom-1 z-10 left-5">
            {blog.title}
          </h1>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-[100rem] h-[50rem] min-h-full object-cover rounded-3xl opacity-75 bg-black bg-blend-hard-light"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium text-orange-400">By {blog.author.name}</p>
            <div className="flex items-center">
              <AiFillLike className="h-10 w-10 text-orange-400 cursor-pointer" onClick={likeBlog} />
              <span className="ml-2 text-xl text-black">{blog.likes}</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog_body }} />
        </div>
        <div>
          <p className="text-start text-5xl text-black font-semibold">Popular Post</p>
        </div>
      </div>
      <div className="px-20">
        <BlogsComponent />
      </div>
    </div>
  );
};

export default BlogPageSlug;
