import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/Images/right-image.png"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
      <section>
        <Wrapper>
          <section className="flex flex-col lg:flex-row px-8 py-6 mt-6 md:flex-row items-center">
            {/* left side */}
            <div className="flex-1">
            <div>
              <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200">Shop 70%</Badge>
            </div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                An Industrial Take on Streetwear
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
            <div>
              <Button className="bg-black h-12 px-8 mt-4">Start Shopping</Button>
            </div>
            </div>
            {/* Right side */}
            <div className="flex-1 rounded-full bg-pink-100">
            <Image src={HeroPoster} alt="hero image"height={800} width={600}/>
            </div>
          </section>
        </Wrapper>
      </section>
    );
  };
  
  export default Hero;