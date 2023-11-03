import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <div className="justify-between-full fixed z-40 bg-[#fff] w-full left-0 top-0">
        <div className="flex flex-auto items-center mx-auto px-6 xl:container pt-3 pb-2">
          <div className="flex mx-auto flex-auto justify-between items-center relative">
            <div className="flex gap-4 md:gap-10 items-center">
              <Link href='/' className='flex justify-center items-center'>
                <Image
                  src='/backpacklg.svg'
                  alt='logo'
                  width={118}
                  height={18}
                  className='object-contain'
                />
              </Link>
              <Link href='/aboutUs' className='flex justify-center items-center' >
                About Us
              </Link>
              <CustomButton
                title='Sign in'
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
              />
            </div>
          </div>
        </div>
      </div>


    </nav>
  </header>
);

export default NavBar;
