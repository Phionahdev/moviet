import React from 'react'
import Card from './Card'
import { Data } from './Data'


function Home3() {
    return (
      <div>
        Hello
    {
      Data.map(item=>(
        <div>
          {item.title}
        </div>
      ))
    }
      </div>
    )
  }
  
  export default Home3