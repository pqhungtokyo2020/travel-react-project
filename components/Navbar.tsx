import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <div className="justify-between-full fixed z-40 bg-[#fff] w-full left-0 top-0">
        <div className="flex flex-auto items-center mx-auto px-6 xl:container pt-3 pb-2">
          <div className="flex mx-auto flex-auto justify-between items-center 
            relative">
            <div className="flex gap-4 md:gap-10 items-center w-1/12">
              <Link href='/' className='flex justify-center items-center'>
                <Image
                  src='/backpacklg.svg'
                  alt='logo'
                  width={100}
                  height={18}
                  className='object-contain'
                />
              </Link>
            </div>

            <div className="flex gap-4 md:gap-2 w-11/12 justify-end pr-5">
              <form className="mr-16">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="flex w-full p-3 ps-12
                    text-sm text-gray-500 rounded-full bg-gray-100 outline-none h-12"
                    placeholder="ツアー検索" />
                </div>
              </form>

              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100 h-10' >
                <img className="mx-1 border" src="/icon/japanflag.png" alt="Image" height="" width="35" />
                日本語
              </Link>
              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100 h-10' >
                JPY
              </Link>

              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100 h-10' >
                国内ツアー
              </Link>
              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100 h-10' >
                海外ツアー
              </Link>
              <Link href='/aboutUs' className='flex rounded-full items-center font-bold px-4 hover:bg-gray-100 h-10'>
                会員登録（無料）
              </Link>
              <CustomButton
                title='ログイン'
                btnType='button'
                containerStyles='bg-orange-500 text-primary-blue rounded-full 
                  text-white font-bold h-10 shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
