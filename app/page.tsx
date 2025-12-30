import ChurchExperienceTimeline from "@/components/ChurchExperience";
import EFamilyJoin from "@/components/EFam";
import EventList from "@/components/Events";
import ChurchHero from "@/components/HeroSection";
import ChurchServicePlayer from "@/components/LatestVideo";
import OrderOfServices from "@/components/OrderOfService";
import TimelineDemo from "@/components/OurLeaders";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* hero section */}
      <ChurchHero />
      {/* church experience */}
      <div className="-top-80 relative pb-80">
        <div className="py-20">
          <ChurchExperienceTimeline />
        </div>
      </div>

      {/* events */}
      <div className="">
        <EventList />
      </div>


{/* e fam */}
      {/* <div className="relative md:px-20 px-0 bg-gray-100">
        <EFamilyJoin />
      </div> */}


      {/* video */}
      {/* <div className="bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-100px-0 py-8 md:px-20">
        <ChurchServicePlayer />
      </div> */}

      {/* our leadership */}
      <div className="w-full">
        <TimelineDemo />
      </div>


      {/* order of services */}
      {/* <div className="relative p-20">
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center z-0" 
        style={{ backgroundImage: "url('/schedule.jpg?height=1080&width=1920')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
        <OrderOfServices/>
      </div> */}

    </div>
  );
}
