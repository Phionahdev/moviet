import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Watche(){
    const{mid}=useParams();
    console.log(mid)
    return(
        <div>
            <YouTube videoId={`${mid}`} />
        </div>
    );

}
export  default Watche
