import { posts } from "../data/posts";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/blogs/${post.id}`} className="bg-white rounded-md shadow-md p-2">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div> 
  );
};

export default Blogs;
