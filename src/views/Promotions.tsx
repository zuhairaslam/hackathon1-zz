import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";


const Promotions = () => {
    return (
      <section>
        <Wrapper>
          <section className="flex">
            {/* left side */}
            <div className="flex-col">
            <h1 className="flex bg-gray-300 h-18 ">Gray</h1>
            <h1 className="flex bg-gray-600 h-18 ">Dark Gray</h1>
            </div>
            {/* <div className="flex-1 rounded-full bg-pink-100">
            Blue
            <Image src={blue} alt="hero image"height={50} width={50}/>
            </div>
            <div className="flex-1 rounded-full bg-pink-100">
            Gray
            <Image src={gray} alt="hero image"height={50} width={50}/>
            </div>
            <div>
              <Button className="bg-black h-12 px-8 mt-4">Start Shopping</Button>
            </div>
            </div> */}
            {/* Right side */}
            <div className="flex">
            <h3 className="flex bg-pink-100 flex-col h-18"> Pink </h3>
            <h4 className="flex bg-gray-300 flex-col h-18"> Gray</h4>
            </div>
            {/* <div className="flex-1 rounded-full bg-pink-100">
            Blue
            <Image src={blue} alt="hero image"height={50} width={50}/>
            </div>
            <div className="flex-1 rounded-full bg-pink-100">
            Gray
            <Image src={gray} alt="hero image"height={50} width={50}/>
            </div> */}
            
          </section>
        </Wrapper>
      </section>
    );
  };
  
  export default Promotions;