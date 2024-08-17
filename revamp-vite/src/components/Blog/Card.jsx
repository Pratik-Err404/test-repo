/* eslint-disable react/prop-types */


const Card = ({ imageSrc, title, description, author, date }) => {
  return (
    <div className="card w-full h-full ">
      <figure>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-96 object-cover  rounded-2xl"
        />
      </figure>
      <div className="card-body p-4">
        <p className="text-sm text-red-700 font-semibold">{`by ${author} - ${date}`}</p>
        <h2 className="card-title text-xl font-semibold mt-2 text-white">{title}</h2>
        <p className="text-sm mt-1 text-white">{description}</p>
        <div className="card-actions justify-start mt-2">
          <button className="btn btn-ghost btn-sm text-red-700 font-bold">Read More...</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
