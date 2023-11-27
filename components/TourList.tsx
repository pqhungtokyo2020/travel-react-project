"use client";
import Image from "next/image";
export default function TourList() {

  const truncateString = (str:string, num:number) => {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
  return (
    <div className="tour-card-list">
      {
        [1, 2, 3, 4, 5, 6, 7].map(item => {
          return <div className="tour-item">
            <div className="relative">
              <img className="w-full" src={`tourimages/image${item}.jpg`} alt="Image" />
              <div className="tour-price bg-orange-500">50,000 円から～</div>
            </div>
            <div className="px-6 py-4">
              <div className="">
                <h2 className="font-bold text-lg mb-2 tour-tite">{truncateString('ホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアー', 30)}
                  <span className="inline-block ml-5 time-icon text-xs font-normal">
                    <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>1泊2日
                  </span>
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
                <span className="text-neutral-500 "> (6,682)・3K+ 件の予約</span>
                <span></span>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                このホンダ ベイ アイランド ホッピング アクティビティを予約して、白い砂浜、美しい海、素晴らしいアトラクションをご覧ください、素晴らしいアトラクションをご覧ください
              </p>
            </div>
            <div className="px-6 pb-4">
              <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">日本語ガイド</span>
              <span className="inline-block bg-cyan-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">キャンセル無料</span>
              <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-xs font-normal text-white mr-2 mb-2">20% OFF</span>
            </div>
          </div>
        })
      }
    </div>
  );
};