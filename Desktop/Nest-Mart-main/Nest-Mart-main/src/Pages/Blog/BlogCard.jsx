import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { image, title, category, date, views, readTime } = blog;

  return (
    <Link to={`/blog/${blog.id}`}>
    <div className=" p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="rounded-md mb-4" />

      <div className="text-center">
        <p className="text-sm text-green-600 font-semibold">{category}</p>

      <h2 className="text-xl font-bold mt-1 text-black">{title}</h2>

      <div className="text-gray-500 text-sm mt-2 flex items-center gap-3 justify-center">
        <p>{date}</p>
        <p>{views}</p>
        <p>{readTime}</p>
      </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
