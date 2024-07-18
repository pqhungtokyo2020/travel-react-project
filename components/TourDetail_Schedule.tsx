"use client";
export default function TourDetail_Schedule() {

  return (
    <div className="row w-full">
      <div className="tour-detail-schedule m-4 border rounded-xl">
        <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
          <span className="font-bold pt-3">スケジュール</span>
        </div>
        <div className="tour-detail-schedule-content p-5">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {
              [1, 2, 3].map(item => {
                return <li className="">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img className="tour-detail-schedule-icon" src="/icon/calendar.png" alt="Image" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold 
                  text-gray-900 dark:text-white pl-8 pt-0.5">{item}日目
                    <span className="bg-cyan-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 
                    rounded  ms-3">朝食：✕</span>
                    <span className="bg-cyan-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 
                    rounded  ms-3">昼食：〇</span>
                    <span className="bg-cyan-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 
                    rounded  ms-3">夕食：〇</span>
                  </h3>
                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 8:00頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・ホテル又は指定の集合場所へお迎え(ご自身で移動いただく事もございます)
                  </p>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・ホテル又は指定の集合場所へお迎え(ご自身で移動いただく事もございます)
                  </p>

                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 9:30頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・バッチャン村に到着、バッチャン焼きのお店・工房見学へご案内いたします。
                  </p>

                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 10:30頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・バッチャン村出発、ハロン湾へむけて出発
                  </p>

                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 12:30頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・ハロン湾到着
                  </p>

                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 12:30～15:30頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・ハロン湾クルーズ観光とシーフードの昼食をお楽しみ頂きます。途中、鍾乳洞も訪問します。
                  </p>

                  <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 18:30頃</time>
                  <p className="mb-4 text-base font-normal text-slate-600 p-1">
                    ・ホテルまたは指定集合場所に到着。解散となります
                  </p>
                </li>
              })
            }

            <li className="">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img className="tour-detail-schedule-icon" src="/icon/calendar.png" alt="Image" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold 
                  text-gray-900 dark:text-white pl-8 pt-0.5">終了
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};