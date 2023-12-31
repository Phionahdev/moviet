import React from 'react'
import axios from 'axios'
import {useState,useEffect} from "react";
import { useParams,Link } from 'react-router-dom';
const Detailspage =() =>{
    const [movieDetail, setDetail]=useState([]);
    const{ mid }=useParams();
    console.log(movieDetail);
    useEffect(() => {
        const getData=async()=>{
        const url=`https://api.themoviedb.org/3/movie/${mid}/videos?language=en-US`;
        const options={
            method:"GET",
            headers:{
                accept:'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI',
            }
        }

    try {
        const resp=await axios.get(url,options);
        setDetail(resp.data.results);
    }
    catch (error) {
    console.log(error);
    }
    }
    getData();
},[]);
return (
    <div className='flex flex-col justify-center text-black'>
        {
            movieDetail.map((item, index) => (
                <Link key={index} to={`/watch/${item.key}`}>
                    <div className='shadow my-4 w[20rem] p-4 hover:bg-slate-400 text-center rounded-md'>
                      {item.name}
                    </div>
                    </Link>
            ))}
    </div>
)}
            
export default Detailspage;
