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
              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100' >
                国内ツアー
              </Link>
              <Link href='/aboutUs' className='flex rounded-full items-center px-4 hover:bg-gray-100' >
                海外ツアー
              </Link>
              <Link href='/aboutUs' className='flex rounded-full items-center font-bold px-4 hover:bg-gray-100'>
                会員登録（無料）
              </Link>
              <CustomButton
                title='ログイン'
                btnType='button'
                containerStyles='bg-orange-500 text-primary-blue rounded-full 
                  text-white font-bold'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
