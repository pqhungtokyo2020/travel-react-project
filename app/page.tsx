import {HomeProps } from "@types";
import {Hero} from "@components";
import TourPopular from "@/components/TourPopular";
import TourRecommendComp from "@/components/TourRecommend ";
import TourHikaeriComp from "@/components/TourHikaeri";
import TourbyLocation from "@/components/TourByLocation";
import TourGroup from "@/components/TourGroup";


export default async function Home({}: HomeProps) {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <TourbyLocation />
      <TourPopular />
      <TourRecommendComp />
      <TourHikaeriComp />
      <TourGroup />
    </main>
  );
}
