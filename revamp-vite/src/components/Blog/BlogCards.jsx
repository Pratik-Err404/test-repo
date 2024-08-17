/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

const truncate = (str, length) => {
  if (!str) return '';  // Return an empty string if str is null or undefined
  return str.length > length ? str.substring(0, length) + '...' : str;
};

const BlogCard = ({ imageSrc, title, description, author, date,id }) => {
  const navigate = useNavigate();
  const truncatedTitle = truncate(title, 30); 
  const truncatedDescription = truncate(description, 150); 
  const handleOnClick = () => {
    navigate(`/blogs/${id}`);
  }
  return (
    <div className="card w-full md:w-96 mb-4">
      <figure>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body p-4">
        <p className="text-sm text-red-700">{`by ${author} - ${date}`}</p>
        <h2 className="card-title text-xl text-white font-semibold mt-2">{truncatedTitle}</h2>
        <p className="text-sm text-white mt-1">{truncatedDescription}</p>
        <div className="card-actions justify-start mt-2">
        <button className="btn btn-ghost btn-sm text-red-700 font-bold" onClick={handleOnClick}>Read More...</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
