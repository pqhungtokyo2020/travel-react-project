"use client";
export default function TourGroup() {

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="items-start text-black-100 m-8 flex-wrap">
      <div className="w-full flex flex-wrap">
          <h1 className="pl-3 font-bold text-lg">ワクワクを探しにいこう</h1>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/adventuretravel.jpg" alt="Image" />
          <span className="tour-group-item-title">アドベンチャー</span>
        </div>
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/resorttravel.jpg" alt="Image" />
          <span className="tour-group-item-title">リゾート観光</span>
        </div>
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/campingtravel.jpg" alt="Image" />
          <span className="tour-group-item-title">キャンプ観光</span>
        </div>
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/hikingtravel.jpg" alt="Image" />
          <span className="tour-group-item-title">ハイキング</span>
        </div>
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/golftravel.jpg" alt="Image" />
          <span className="tour-group-item-title">ゴルフ旅行</span>
        </div>
        <div className="tour-group-item rounded-xl overflow-hidden shadow-lg m-3 h-44 border">
          <img className="h-full" src="tourimages/scubatravel.jpg" alt="Image" />
          <span className="tour-group-item-title">スキューバ旅行</span>
        </div>
      </div>
    </div>
  );
};