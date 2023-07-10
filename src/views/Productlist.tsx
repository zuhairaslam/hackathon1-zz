import React from 'react'
import ProductCard from '@/components/ProductCard'
import P1 from "@/assets/Images/p1.png"
import P2 from "@/assets/Images/p2.png"
import P3 from "@/assets/Images/p3.png"
import P4 from "@/assets/Images/p4.png"
import P5 from "@/assets/Images/p5.png"

const Productlist = () => {
  return (    
    <div className='flex justify-evenly'>
        <ProductCard title="Brush Reglan Sweatshirt" price={195} img={P1} />
        <ProductCard title="Cameryn Sash Tie Dress" price={545} img={P2} />
        <ProductCard title="Flex Sweatshirt" price={175} img={P3} />
        {/* <ProductCard title="Flex Sweatpants" price={175} img={P4} /> */}
        {/* <ProductCard title="Pink Fleece Sweatpants" price={195} img={P5} /> */}
    </div>
  )
}

export default Productlist