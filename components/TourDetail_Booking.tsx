"use client";
import DateComponent from "@/components/common/DateComponent";
export default function TourDetail_Booking() {
  return (
    <div id="booking" className="row w-full">
      <div className="tour-detail-highlight m-4 w-12/12 border rounded-xl">
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
  );
};