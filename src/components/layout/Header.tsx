import Wrapper from "@/components/shared/Wrapper";

import logo from "@/assets/Images/logo.webp"
import Image from "next/image"
import Link from "next/link";

import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react'

const Header = () => {
    return (
      <header className="sticky top-6 z-10 rounded-lg shadow-sm bg-white">
        <Wrapper>
          <div className="flex ml-20 mr-20 justify-between items-center py-6 px-8 sticky top-0 ">
            {/* logo */}
            <div>
                <Image src={logo} alt="logo"/>
            </div>
            
            {/* navigation bar */}
            <ul className="flex gap-x-3 ">
              <li className="text-lg">
                <Link href={"/"}>
                  Female
                </Link>
              </li>
              <li className="text-lg">
                <Link href={"/"}>
                  Male
                </Link>
              </li>
              <li className="text-lg">
                <Link href={"/"}>
                  Kids
                </Link>
              </li>
              <li className="text-lg">
                <Link href={"/"}>
                  All Products
                </Link>
              </li>
            </ul>
                        
            {/* Search Box */}
            <div className="flex space-x-2">
            <Search />
            <input type="text" placeholder="Search.."></input>    
            </div>

            {/* Shopping Cart */}
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
            <ShoppingCart className="h-6 w-6"/>
            </div>
          </div>
        </Wrapper>
      </header>
    );
  };
  
  export default Header;