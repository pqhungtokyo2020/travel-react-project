"use client";
export default function TourDetail_Highlight() {

  return (
    <div className="row w-full">
      <div className="tour-detail-highlight m-4 border rounded-xl">
        <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
          <span className="font-bold pt-3">ハイライト</span>
        </div>
        <div className="tour-detail-highlight-content">
          {
            [1, 2, 3, 4, 5, 6, 7].map(item => {
              return <div className="m-5 tour-detail-highlight-content-item p-4 flex rounded-xl">
                <div className="w-2/5 p-3">
                  <img className="w-11/12 rounded-xl" src="tourimages/image5.jpg" alt="Image" />
                </div>
                <div className="w-3/5 leading-loose">
                  <p>
                    1000年以上にわたり首都として栄えてきた首都のハノイには、各時代の歴史的建造物が多く残されています。李朝時代に建てられたお寺をはじめ、フランス統治時代の建築物、ベトナム戦争時代の収容所などベトナムの歴史を語るのにハノイは切り離せない街です。
                  </p>
                  <p>
                    数百年以上前に作られた家屋などもあり、これらは修復と保存を繰り返しながら、世界遺産登録を目指しています。
                  </p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};