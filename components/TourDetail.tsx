"use client";
import ImageCarousel from "@/components/common/ImageCarousel";
import TourDetailInfo from "@/components/TourDetail_Info";
import TourDetail_Highlight from "@/components/TourDetail_Highlight";
import TourDetail_Schedule from "@/components/TourDetail_Schedule";
import TourDetail_Comment from "@/components/TourDetail_Comment";
import TourDetail_Booking from "@/components/TourDetail_Booking";
import TourDetail_SubTour from "@/components/TourDetail_SubTour";

export default function TourDetail() {
  const images: string[] = [
    'tourimages/image1.jpg',
    'tourimages/image2.jpg',
    'tourimages/image3.jpg',
    'tourimages/image4.jpg',
    'tourimages/image5.jpg',
    'tourimages/image6.jpg',
    'tourimages/image7.jpg',
    'tourimages/image8.jpg',
    'tourimages/image9.jpg',
    'tourimages/image10.jpg'
  ];

  return (
    <div className="tour-detail my-20">
      <div className="row w-full flex mb-10">
        <div className="tour-detail-image items-center flex py-2">
          <ImageCarousel images={images} />
        </div>
        <div className="tour-detail-info m-2">
          <TourDetailInfo />
        </div>
      </div>

      <div className="row w-full flex mb-10">
        <div className="w-4/5">
          <TourDetail_Schedule />
        </div>
        <div className="w-1/5 my-4">
        <TourDetail_SubTour />
        </div>
      </div>
      <div className="row w-full flex mb-10">
        <div className="w-4/5">
          <TourDetail_Highlight />
        </div>
        <div className="w-1/5 my-4">
        <TourDetail_SubTour />
        </div>
      </div>
      <div className="row w-full flex mb-10">
        <TourDetail_Comment />
      </div>
      <div className="row w-full flex">
        <TourDetail_Booking />
      </div>
    </div>
  );
};