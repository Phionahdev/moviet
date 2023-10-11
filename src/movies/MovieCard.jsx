import React from "react";

const MovieCard = ({image,name}) => {
  return (
   <div className="text-black">
    <div>
      <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${image}`} alt="" />
    </div>
    <div>{name}</div>
   </div>
  );
};

export default MovieCard;
