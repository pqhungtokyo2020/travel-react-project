"use client";
import DateComponent from "@/components/DateComponent";
export default function TourDetail() {

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="tour-detail my-20">
      <div className="row w-full flex">
        <div className="tour-detail-image m-2">
          <div className="main-detail-image">
            <img className="w-full h-full rounded-xl" src="tourimages/image1.jpg" alt="Image" />
          </div>
          <div className="sub-detail-image mt-2 flex">
            {
              [1, 2, 3, 4, 5].map(item => {
                return <div className="sub-detail-image-item m-1">
                  <img className="w-full h-full rounded-xl" src={`tourimages/image${item}.jpg`} alt="Image" />
                </div>
              })
            }
          </div>
        </div>
        <div className="tour-detail-info border m-2 rounded-xl shadow-xl">
          <div className="">
            <div className="bg-orange-500 rounded-tr-lg rounded-tl-xl p-3 font-bold text-white flex">
              <h1>50,0000円　～　10,0000円 (税込み）</h1>
            </div>
          </div>
          <div className="p-6">
            <div className="">
              <h2 className="font-bold text-lg mb-2 tour-tite">日帰りツアーホンダベイパラワンアイランドホッピング日帰りツアー
                <span className="inline-block ml-5 time-icon text-xs font-normal">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>1泊2日
                </span>
              </h2>
            </div>

            <div className="text-sm my-2.5 flex">
              <div className="flex items-center space-x-1 pr-2">
                <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="orange-start font-bold">4.4</span>
              <span className="text-neutral-500"> (6,682)・3K+ 件の予約</span>

              <span className="pl-14">
                <span className="text-neutral-500">
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                    <path d="M31 40.178C28.7084 42.2154 26.5043 43.7801 24.992 44.7717C23.7735 45.5708 22.2331 45.5748 21.0145 44.776C16.3338 41.7078 5 33.1335 5 22.0441C5 12.0786 13.0589 4 23 4C32.5915 4 40.4309 11.5204 40.9704 21" stroke="#212121" stroke-width="3.6" stroke-linecap="round"></path>
                    <circle cx="23" cy="21.5" r="6.5" stroke="#212121" stroke-width="3.6"></circle>
                    <path d="M32 33H45" stroke="#212121" stroke-width="3.6" stroke-linecap="round"></path>
                    <path d="M39 27L45 33L39 39" stroke="#212121" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </span>
              <span className="pl-2 text-neutral-500">出発地：
                <span className="">東京</span>
              </span>
            </div>

            <div className="">
              <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">日本語ガイド</span>
              <span className="inline-block bg-cyan-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">キャンセル無料</span>
              <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">20% OFF</span>
            </div>
            <div className="py-3">
              <p className="text-gray-700 text-sm leading-loose">
                このホンダ ベイ アイランド ホッピング アクティビティを予約して、白い砂浜、美しい海、素晴らしいアトラクションをご覧ください、素晴らしいアトラクションをご覧ください
                このホンダ ベイ アイランド ホッピング アクティビティを予約して、白い砂浜、美しい海、素晴らしいアトラクションをご覧ください、素晴らしいアトラクションをご覧ください
              </p>
            </div>
            <div className="pt-5 text-center">
              <a href="#booking" className="items-end bg-orange-500 hover:bg-orange-400 
              text-white font-bold py-2 px-10 border-b-4 border-orange-700 
              hover:border-orange-500 rounded ">
                予約する
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" row w-full my-20">
        <div className="tour-detail-highlight m-4 w-12/12 border rounded-xl shadow-xl">
          <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
            <span className="font-bold pt-3">ハイライト</span>
          </div>
          <div className="tour-detail-highlight-content">
            {
              [1, 2, 3, 4, 5, 6, 7].map(item => {
                return <div className="m-5 tour-detail-highlight-content-item p-4 flex shadow rounded-xl">
                  <div className="w-2/5">
                    <img className="w-11/12 rounded-xl" src="tourimages/image5.jpg" alt="Image" />
                  </div>
                  <div className="w-3/5 leading-loose">
                    <p>
                      1000年以上にわたり首都として栄えてきた首都のハノイには、各時代の歴史的建造物が多く残されています。李朝時代に建てられたお寺をはじめ、フランス統治時代の建築物、ベトナム戦争時代の収容所などベトナムの歴史を語るのにハノイは切り離せない街です。
                    </p>
                    <p>
                      数百年以上前に作られた家屋などもあり、これらは修復と保存を繰り返しながら、世界遺産登録を目指しています。ドンラム村の保存には奈良文化財研究所、昭和女子大学、JICAなども協力しています。こんな場所で日本とベトナムのつながりを感じられるのはたいへん興味深いですね。
                    </p>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div className="row w-full flex mb-20">
        <div className="tour-detail-schedule m-4 w-3/4 border rounded-xl shadow-xl">
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

                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      ホテル又は指定の集合場所へお迎え(ご自身で移動いただく事もございます)
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
                    </p>

                    <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 9:30頃</time>
                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      バッチャン村に到着、バッチャン焼きのお店・工房見学へご案内いたします。
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
                    </p>

                    <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 10:30頃</time>
                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      バッチャン村出発、ハロン湾へむけて出発
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
                    </p>

                    <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 12:30頃</time>
                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      ハロン湾到着
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
                    </p>

                    <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 12:30～15:30頃</time>
                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      ハロン湾クルーズ観光とシーフードの昼食をお楽しみ頂きます。途中、鍾乳洞も訪問します。
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
                    </p>

                    <time className="block mb-2 font-normal leading-none 
                  text-neutral-500 mt-4 bg-sky-100 p-2 w-1/4 rounded-r-2xl">◆ 18:30頃</time>
                    <p className="mb-4 text-base font-normal text-slate-600 p-3">
                      ホテルまたは指定集合場所に到着。解散となります
                      <img className="w-full h-full rounded-xl tour-schedule-item-image" src="tourimages/schedule_image.jpg" alt="Image" />
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

        <div className="w-1/4 m-4">
          <div className="rounded-xl shadow-xl border">
            <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
              <span className="font-bold pt-3">おすすめツアー</span>
            </div>
            <div className="p-4">
              {
                [1, 2, 3, 4, 5, 6, 7].map(item => {
                  return <div className="tour-detail-subitem row w-full border rounded-xl mb-4">
                    <div className="">
                      <div className="relative">
                        <img className="w-full rounded-t-xl" src={`tourimages/image${item}.jpg`} alt="Image" />
                      </div>
                      <div className="p-4">
                        <div className="">
                          <h2 className="font-bold text-sm mb-2 tour-tite">{truncateString('ホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアー', 24)}
                          </h2>
                        </div>
                        <div className="text-sm mb-2 flex">
                          <div className="flex items-center space-x-1 pr-2">
                            <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <span className="orange-start font-bold">4.4</span>
                        </div>
                        <div className="flex text-sm font-bold pt-1.5 text-gray-700">
                          <span>50,000円から～</span>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>

      <div className="row w-full mb-20">
        <div className="tour-detail-comment m-4 w-12/12 border rounded-xl shadow-xl">
          <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
            <span className="font-bold pt-3">クチコミ</span>
          </div>
          <div className="tour-detail-comment-content">
            {
              [1, 2, 3, 4, 5, 6, 7].map(item => {
                return <div className="m-4 tour-detail-comment-content-item p-4 rounded-xl border shadow">
                  <div className="comment-title flex">
                    <div>
                      <img className="m-2" src="/icon/usericon.jpg" alt="Image" height="45" width="45" />
                    </div>
                    <div className="pt-2">
                      <p className="font-bold">Karen</p>
                      <p className="text-neutral-500">2022年12月12日</p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <div className="w-full">
                      <div className="text-sm my-2.5 flex">
                        <div className="flex items-center space-x-1 pr-2">
                          <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span className="text-slate-600">とても満足</span>
                      </div>
                    </div>
                    <div className="text-slate-600">
                      お店の方が優しくて最高でした！ 日本語が少しできる方が対応してくださりました！
                      指定されたところから、上下セットになっているチマチョゴリを選んで着る感じになります！
                      しかし、私の肩幅が広すぎて、上がつんつんだったので、変えてもらいました！
                      その時も快く対応していただ来ました！ ヘアーセットは自分たちでお互いにしました！
                      お店の方が片言ながら、ありがとうございますと言ってくださって、とても嬉しかったです！
                      最初から最後まで、笑顔で対応していただいてとても感謝しています! とてもいい思い出になりました！
                      またご縁があればよろしくお願いします！ ありがとうございました!
                    </div>
                    <div className="flex">
                      {
                        [1, 2, 3, 4, 5, 6, 7].map(item => {
                          return <img className="w-28 m-2 rounded-xl" src={`tourimages/image${item}.jpg`} alt="Image" />
                        })
                      }
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div id="booking" className="row w-full mb-20">
        <div className="tour-detail-highlight m-4 w-12/12 border rounded-xl shadow-xl">
          <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
            <span className="font-bold pt-3">予約する</span>
          </div>
          <div className="tour-detail-highlight-content">
            <div className="flex">
              <div className="m-8 w-3/5">
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap">
                    <label className="mb-2 font-semibold">ツアー種類</label>
                    <ul className="items-center w-full bg-white sm:flex mb-6">
                      <li className="w-1/5 border border-gray-200 rounded-lg mr-2">
                        <div className="flex items-center ps-3">
                          <input id="" type="radio" value=""
                            name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 
                      border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          <label className="w-full py-3 ms-2 text-sm font-medium 
                        text-gray-900">1泊2日</label>
                        </div>
                      </li>
                      <li className="w-1/5 border border-gray-200 rounded-lg mx-2">
                        <div className="flex items-center ps-3">
                          <input id="" type="radio" value=""
                            name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 
                      border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          <label className="w-full py-3 ms-2 text-sm font-medium 
                        text-gray-900">2泊3日</label>
                        </div>
                      </li>

                      <li className="w-1/5 border border-gray-200 rounded-lg mx-2">
                        <div className="flex items-center ps-3">
                          <input id="" type="radio" value=""
                            name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 
                      border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          <label className="w-full py-3 ms-2 text-sm font-medium 
                        text-gray-900">3泊4日</label>
                        </div>
                      </li>

                      <li className="w-1/5 border border-gray-200 rounded-lg mx-2">
                        <div className="flex items-center ps-3">
                          <input id="" type="radio" value=""
                            name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 
                      border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          <label className="w-full py-3 ms-2 text-sm font-medium 
                        text-gray-900">4泊5日</label>
                        </div>
                      </li>
                    </ul>

                    <div className="w-full md:w-1/2 mb-6">
                      <label className="font-semibold">開始日</label>
                      <div className="relative w-full my-2 tour-detail-date">
                        <DateComponent />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 mb-6">
                      <label className="font-semibold mb-2 ml-3">終了日</label>
                      <div className="relative w-full my-2 tour-detail-date ml-3 pb-6">
                        <DateComponent />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="mb-2 font-semibold">大人人数</label>
                      <input className="border-gray-200 rounded-lg w-full text-gray-700 border rounded py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="mb-2 ml-2 font-semibold">子供人数</label>
                      <input className="border-gray-200 rounded-lg w-full text-gray-700 border rounded py-3 px-4 my-2 mx-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-2/5 m-4">
                <label className="font-semibold">お支払い方法</label>
                <div className="w-full flex flex-wrap mt-4">
                  <div className="tour-detail-paid-icon rounded-xl border p-4 mx-2 mb-4">
                    <img className="w-full h-9" src="/icon/mastercard.png" alt="Image" />
                  </div>
                  <div className="tour-detail-paid-icon rounded-xl border p-4 mx-2 mb-4">
                    <img className="w-full h-9" src="/icon/visacard.png" alt="Image" />
                  </div>
                  <div className="tour-detail-paid-icon rounded-xl border p-4 mx-2 mb-4">
                    <img className="w-full h-9" src="/icon/jcbcard.png" alt="Image" />
                  </div>
                  <div className="tour-detail-paid-icon rounded-xl border p-4 mx-2 mb-4">
                    <img className="w-full h-9" src="/icon/americancard.png" alt="Image" />
                  </div>
                  <div className="tour-detail-paid-icon rounded-xl border p-4 mx-2 mb-4">
                    <img className="w-full h-9" src="/icon/paypallogo.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-right border-t-2 border-orange-500 p-6 mx-8">
              <span className="font-semibold pr-4 text-orange-500">合計：50,000円</span><span className="text-gray-700 mr-20">(税込み)</span>
              <a href="#booking" className="items-end bg-orange-500 hover:bg-orange-400 
              text-white font-bold py-2 px-10 border-b-4 border-orange-700 
              hover:border-orange-500 rounded ">
                確認する
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};