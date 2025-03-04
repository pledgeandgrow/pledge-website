"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { Menu } from "@/types/menu";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center justify-center main-bg ${sticky
          ? "bg-black fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
        }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-4"
                } `}
            >
              <img src="/assets/imgs/logo-dark.png" alt="logo" className="h-20" />
            </Link>
          </div>
          <div className="flex items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 lg:w-[800px] md:w-[700px] w-[500px] rounded border-[.5px] border-body-color/50 bg-black px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                  }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                              ? "text-white"
                              : "text-white hover:text-primary"
                            }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-white  lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 border-b border-white border-opacity-20 lg:border-b-0"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative lg:absolute lg:-left-60 top-full rounded-sm bg-black transition-[top] lg:py-10 lg:px-10 py-6 duration-300 lg:border border-white  border-b border-white group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block md:w-[600px] lg:w-[700px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                              }`}
                          >
                            <div className="grid grid-cols-3  gap-4">
                              {menuItem.submenu?.map((submenuItem: Menu, index: number) =>
                                index < 3 ? (
                                  <div key={index} className="text-sm lg:text-lg font-bold text-white hidden sm:block">
                                    {submenuItem.title}
                                  </div>
                                ) : (
                                  <Link
                                    href={submenuItem.path || "#"}
                                    key={index}
                                    className="block subsubmenu rounded py-2.5 text-sm text-white hover:text-primary px-3 hover:border border-white hover:p-2 text-center"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                )
                              )}
                            </div>

                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <button
   type="submit"
  className="rounded-full border-2 border-white text-white py-2 px-6 mt-2 lg:mt-0 hidden lg:inline-block hover:bg-white hover:text-black transition-colors"
>
  <Link className="text" href="/digitaliser-votre-projet">
    Digitaliser votre projet
  </Link>
</button>


          
        </div>
      </div>
    </header>
  );
};

export default Header;
