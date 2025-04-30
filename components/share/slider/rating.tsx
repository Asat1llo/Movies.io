import React from 'react'
import { Star } from 'lucide-react'


interface rating{
  rating:number
}

const Rating  =({rating}:rating) => {
  const fullStars = Math.round(rating);
  return (
    <>
    {
        [...Array(fullStars)].map((star,index)=>{
            return(
                <Star key={index} size={15} fill="currentColor" strokeWidth={0}/>
            )
        })
    }
    </>
  )
}

export default Rating