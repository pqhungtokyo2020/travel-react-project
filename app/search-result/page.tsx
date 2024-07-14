import TourListSearchComp from "@/components/TourListSearch";
import TourListSearchFilterComp from "@/components/TourListSearchFilter";
import TourGroupComp from "@/components/TourGroup";

export default async function TourList() {
  return (
    <main className='overflow-hidden'>
      <div className="w-full title-banner">
        <img className="w-full" src={`tourimages/img_tna_activity_list_hero_desktop_2x.jpg`} alt="Image" />
      </div>
      <div className="w-full flex">
        <div className="w-full flex mt-5">
          <div className="w-1/4 m-8">
            <TourListSearchFilterComp />
          </div>
          <div className="w-3/4 mr-8 mb-8 mt-4">
            <TourListSearchComp />
          </div>
        </div>
      </div>
      <TourGroupComp />
    </main>
  );
}
