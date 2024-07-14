"use client";
import Link from 'next/link';
import SelectBox from '../components/common/SelectBox';
export default function TourListSearch() {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const options = [
    { value: 'option1', label: '評価（高い順）' },
    { value: 'option2', label: '料金（安い順）' },
    { value: 'option3', label: '新着ツアー' },
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };


  return <div className="w-full">
    <div className="">
      <div className="w-full my-5 flex filter-background rounded items-center">
        <div className="w-2/3 py-3 pl-5">
          <h2 className="text-xl font-bold">検索結果：50件</h2>
        </div>
        <div className="w-1/3 py-3 items-center flex ml-24">
          <span className="pr-2">並べ替え</span>
          <SelectBox options={options} onChange={handleSelectChange} />
        </div>
      </div>
      <div className="w-full">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
            return <div className={`w-full search-item-box h-38 flex p-2 rounded-xl`}>
              <div className="w-1/3 bg-white m-4 flex">
                <div className="relative">
                  <img className="w-full rounded" src={`tourimages/image${item}.jpg`} alt="Image" />
                  <div className="tour-price bg-orange-500">50,000 円から～</div>
                </div>
              </div>
              <div className="w-2/3 pt-4 pl-2">
                <div className="w-full">
                  <h2 className="font-bold text-lg mb-2 tour-tite">
                    <Link href="tour-detail">
                      {truncateString('ホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアーホンダベイ パラワンアイランドホッピング日帰りツアー', 25)}
                    </Link>
                    <span className="inline-block ml-5 time-icon text-xs font-normal">
                      <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>1泊2日
                    </span>
                  </h2>
                </div>
                <div className="w-full flex items-center">
                  <div className="flex items-center space-x-1 pr-2">
                    <svg className="w-4 h-4 orange-start" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="orange-start font-bold">4.4</span>
                  <span className="text-neutral-500 "> (6,682)・3K+ 件の予約</span>
                  <span className="pl-10">
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
                <div className="w-full flex pt-3">
                  <p className="text-gray-700 text-sm line-clamp-3 leading-6">
                    {truncateString('このホンダ ベイ アイランド ホッピング アクティビティを予約して、白い砂浜、美しい海、素晴らしいアトラクションをご覧ください、素晴らしいアトラクションをご覧ください このホンダ ベイ アイランド ホッピング アクティビティを予約して、白い砂浜、美しい海、素晴らしいアトラクションをご覧ください、素晴らしいアトラクションをご覧ください', 150)}
                  </p>
                </div>
                <div className="w-full flex pt-2">
                  <span className="language-support inline-block text-sm mr-2 mb-2 p-1">日本語ガイド</span>
                  <span className="sales inline-block text-sm  mb-2 p-1">20% OFF</span>
                </div>
              </div>
            </div>
          })}
      </div>
      <div className="paging mt-5 justify-center w-full flex">
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">&lt;&lt;</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">01</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">02</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">03</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">04</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">05</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">06</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">07</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">08</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">09</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">10</Link>
        </span>
        <span className="item mx-2 items-center flex justify-center">
          <Link href="#">&gt;&gt;</Link>
        </span>
      </div>
    </div>
  </div>
}