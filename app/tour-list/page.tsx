import TourListComp from "@/components/TourList";
import TourRecommendComp from "@/components/TourRecommend ";
import TourHikaeriComp from "@/components/TourHikaeri";
import TourGroupComp from "@/components/TourGroup";

export default async function TourList() {

  return (
    <main className='overflow-hidden'>
      <TourListComp />
      <TourGroupComp />
    </main>
  );
}
