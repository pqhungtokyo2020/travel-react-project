import TourListComp from "@/components/TourList";
import TourGroupComp from "@/components/TourGroup";

export default async function TourList() {

  return (
    <main className='overflow-hidden'>
      <TourListComp />
      <TourGroupComp />
    </main>
  );
}
