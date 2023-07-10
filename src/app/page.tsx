import Image from 'next/image'
import Hero from "@/views/Hero"
import Productlist from '@/views/Productlist'
import Promotions from '@/views/Promotions'


export default function Home() {
  return (
    <div>
      {/*Hero Section*/}
      <Hero />

      {/*Promotions */}
      <Promotions />

      {/*Product List */}
      <h1 className="text-center text-blue-700 font-bold">
        PRODUCTS
      </h1>
      <h3 className=" text-center scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl mt-6 mb-6">
        Check What We Have
      </h3>
      <Productlist />

    </div>
  )
}
