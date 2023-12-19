"use client";
export default function TourByLocation() {

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="tour-by-location flex items-start text-black-100 mx-8 flex-wrap rounded-2xl">
      <div className="flex">
        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/hcm_image.jpg" alt="Image"/>
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ホーチミン</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/dalat_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ダラット</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/nhatrang_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ニャチャン</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/danang_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ダナン</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/hanoi_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ハノイ</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/halong_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">ハロン湾</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

        <div className="tour-by-location-item border mr-2 rounded-2xl shadow-xl">
          <div className="relative m-2">
            <img className="rounded-2xl" src="tourimages/sapa_image.jpg" alt="Image" />
          </div>
          <div className="pl-3 pb-2">
            <div className="">
              <h2 className="font-bold text-sm">サパ</h2>
            </div>
            <div className="flex text-sm pt-1.5 text-gray-500">
              <span>100+件</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};