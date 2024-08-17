/* eslint-disable react/prop-types */


const CardHorizontal = ({ imageSrc, title, description, author, date }) => {
  return (
    <div className="card w-full  flex flex-row gap-x-8">
      <figure className="w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body w-2/3 flex flex-col justify-center">
        <p className="text-sm text-red-700">{`by ${author} - ${date}`}</p>
        <h2 className="card-title text-xl font-semibold mt-2 text-white">{title}</h2>
        <p className="text-sm mt-1 text-white">{description}</p>
        <div className="card-actions justify-end mt-2">
        <button className="btn btn-ghost btn-sm text-red-700 font-bold">Read More...</button>
        </div>
      </div>
    </div>
  );
}

export default CardHorizontal;
