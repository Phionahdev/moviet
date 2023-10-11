import React from 'react'
function Nav2(){
    return <>
    
  <div className=" bg-blue-950 flex justify-center h-[20]  w-[20] item-center">
            GOOJARA.to <input type="text"name="GOOJARA.TO" className='w-[20vw] rouded-sm bg-red-500 text-white-400 font-bold placeholder=SEARCH'/>
        </div>
     <div className="flex bg-blue gap-12 justify-around ">
         <div className="w-100 py-2 ">
          
         </div>
         <div className="flex text-blue">
         <div className="flex text-blue">
             <ul className="flex gap-10  py-8 pl-20">
                 <li className="hover:text-blue-600 cursor-pointer font-bold">Browse</li>
                 <li className="hover:text-blue-600 cursor-pointer font-bold">Movies</li>
                 <li className="hover:text-blue-600 cursor-pointer font-bold">Series</li>
                 
             </ul>
         </div>  
         </div>  
     </div>
     {/* </div> */}
     
    {/* <div className="bg-black flex justify-rounded gap-8  my-100 ">
     <img src="1.jpg"className="hover:scale-110 w-[10px] h-[10px] "alt="hello"/>
     <img src="2.jpg"className="hover:scale-110 w-[30px] h-[30px] "/>
     <img src="3.jpg"className="hover:scale-110 w-[30px] h-[30px] "/>
     <img src="4.jpg"className="hover:scale-110 w-[30px] h-[30px] "/>
     <img src="5.jpg"className="hover:scale-110 w-[30px] h-[30px] "/>
    
    </div> */}
    //  </>
 }
 export default Nav2;