import Link from 'next/link';
export default function TourListSearchFilter() {
    return <div className="w-full">
        <div className="filter-main-div rounded-lg">
            <div className="w-full">
                <div className="w-full list-tour-filter-title pl-4 py-2">
                    <p className="flex items-center my-2 text-lg font-bold">
                        <span className="mr-2">
                            <svg className="h-6 w-6 green-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </span>
                        <span className="">絞り込み</span>
                    </p>
                </div>
                <form className="w-full job-filter">
                    <div className="green-bd-bottom-1 py-2">
                        <p className="pl-6 font-bold">地域</p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>北部</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>中部</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>南部</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>その他</span>
                            <span className="float-right">400+</span>
                        </p>
                    </div>
                    <div className="green-bd-bottom-1 py-2">
                        <p className="pl-6 font-bold">都道府県</p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>ダナン</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>ニャチャン</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>ヒュー</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>クイニョン</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>その他</span>
                            <span className="float-right">400+</span>
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="pl-6 font-bold">価格</p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>～３万円</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>３万円～5万円</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>5万円～7万円</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>7万円～10万円</span>
                            <span className="float-right">400+</span>
                        </p>
                        <p className="py-2 px-6 mx-2 my-2 items-center flex filter-option">
                            <input className="w-4 h-4 mr-2 option-check" type="checkbox" name="" id="" />
                            <span className='w-3/4'>10万円～</span>
                            <span className="float-right">400+</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
}