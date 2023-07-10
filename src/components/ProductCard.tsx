import React from 'react'
import Image, {StaticImageData} from 'next/image'
import p1 from "@/assets/Images/p1.png"

const ProductCard = (props: {title:string, price:number, img:StaticImageData}) => {
  return (
    <div>
        <Image src={props.img} alt={props.title} />
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg mt-3'>${props.price}</p>
    </div>
  )
}

export default ProductCard