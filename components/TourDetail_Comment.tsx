"use client";
export default function TourDetail_Comment() {
  return (
    <div className="row w-full">
      <div className="tour-detail-comment m-4 w-12/12 border rounded-xl">
        <div className="tour-detail-title bg-sky-100 flex pl-5 rounded-t-xl">
          <span className="font-bold pt-3">クチコミ</span>
        </div>
        <div className="tour-detail-comment-content">
          {
            [1, 2, 3, 4, 5, 6, 7].map(item => {
              return <div className="m-4 tour-detail-comment-content-item p-4 rounded-xl border">
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
                        return <img className="w-20 m-2 rounded-xl" src={`tourimages/image${item}.jpg`} alt="Image" />
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
  );
};