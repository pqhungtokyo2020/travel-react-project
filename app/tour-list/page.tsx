

import {Hero } from "@components";


import TourListComp from "@/components/TourList";
import TourRecommendComp from "@/components/TourRecommend ";
import TourHikaeriComp from "@/components/TourHikaeri";


export default async function TourList() {

  return (
    <main className='overflow-hidden'>
      <TourListComp />
      <TourRecommendComp />
      <TourHikaeriComp />
    </main>
  );
}
