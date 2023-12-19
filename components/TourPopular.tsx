"use client";
export default function TourPopular() {

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="tour-card-sub-list border">
      <div className="flex w-full">
        <div className="w-1/2">
          <span className="tour-card-sub-list-title">
            <img className="mx-1" src="/icon/popularicon.png" alt="Image" height="" width="40" />
            人気ツアー
          </span>
        </div>
        <div className="w-1/2 text-right mr-6">
          <span className="decoration-1">
            <a href="" className="text-gray-500 underline underline-offset-1">
              すべて表示
            </a>
          </span>
        </div>
      </div>
      <div className="w-full tour-card-sub-list-content flex flex-wrap">
        {
          [1, 2, 3, 4, 5,6,7,8,9,10].map(item => {
            return <div className="tour-sublist-item">
              <div className="relative">
                <img className="w-full" src={`tourimages/image${item}.jpg`} alt="Image" />
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
                <div className="flex text-sm pt-1.5 text-gray-700 flex w-full">
                  <div className="w-3/5">
                    <span>50,000円～</span>
                  </div>
                  <div className="w-2/5 flex">
                    <span><img className="mx-1" src="/icon/hearticon.png" alt="Image" height="" width="20" /></span>
                    <span className="text-gray-500 text-sm">1k+件</span>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};