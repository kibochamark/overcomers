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
      <div className="top-80">
        <div className="">
          <ChurchExperienceTimeline />
        </div>
      </div>

      {/* events */}
      {/* <div className="">
        <EventList />
      </div> */}

      {/* 
      {/* e fam */}
            {/* <div className="relative">
              <EFamilyJoin />
            </div>  */}


      {/* video */}
      {/* <div className="">
        <ChurchServicePlayer />
      </div> */}

      {/* our leadership */}
      {/* <div className="w-full">
        <TimelineDemo />
      </div> */}


      {/* order of services */}
      {/* <div className="relative">
      <div 
        className="" 
        style={{ }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
        <OrderOfServices/>
      </div> */}

    </div>
  );
}
