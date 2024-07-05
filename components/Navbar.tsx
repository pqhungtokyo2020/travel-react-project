"use client"
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isStickyTop, setStickyTop] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", onscroll);

    return () => {
      document.removeEventListener("scroll", onscroll)
    }
  }, []);


  const onscroll = (event: Event) => {
    const scrollTop = window.scrollY || window.pageYOffset;
    if (scrollTop > 45) {
      setStickyTop(true);
    } else {
      setStickyTop(false);
    }
  };

  return <header className={`w-full z-10`}>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6'>
      <div className={`top-main-nav  justify-between-full fixed z-40 w-full left-0 top-0 ${isStickyTop ? "sticky-top" : ""}`}>
        <div className="flex flex-auto items-center mx-auto px-6 xl:container">
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

            <div className="flex gap-4 md:gap-2 w-11/12 items-center justify-end pr-5">
              <form className="mr-16">
                <div className="relative nav-search-box rounded-3xl">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="search-box flex w-full p-3 ps-12
                  text-sm text-gray-500 rounded-3xl outline-none h-12"
                    placeholder="ツアー検索" />
                </div>
              </form>

              <Link href='#' className='top-main-nav-link flex rounded-3xl items-center px-4 h-10' >
                <img className="mx-1 border" src="/icon/japanflag.png" alt="Image" height="" width="35" />
                日本語
              </Link>
              <Link href='#' className='top-main-nav-link flex rounded-3xl items-center px-4 h-10' >
                JPY
              </Link>

              <Link href='/tour-list' className='top-main-nav-link flex rounded-3xl items-center px-4 h-10' >
                国内ツアー
              </Link>
              <Link href='/tour-list' className='top-main-nav-link flex rounded-3xl items-center px-4  h-10' >
                海外ツアー
              </Link>
              <Link href='/regist' className='top-main-nav-link flex rounded-3xl items-center px-4  h-10'>
                会員登録（無料）
              </Link>
              <Link href='/login' className='btn-login flex rounded-3xl items-center px-4  h-10 font-bold'>
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
}
export default NavBar;
