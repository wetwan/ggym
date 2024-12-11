/* eslint-disable react-hooks/rules-of-hooks */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const index = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:880px)");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navbarBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed top-0 z-50 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <img src={Logo} alt="logo" />
            {/* nav menu  */}
            {
              isAboveMediumScreens ?
                <div className={`${flexBetween} w-full`}>
                  {/* nav menu link  */}
                  <div className={`${flexBetween} gap-8 text-sm capitalize`}>
                    <Link
                      page="home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="benefit"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="our classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="contact us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>{" "}
                  <div className={`${flexBetween} gap-8`}>
                    <p className="">Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      become a member{" "}
                    </ActionButton>
                  </div>
                </div>
                // small screen icons
              : <button
                  className=" rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>

            }
          </div>
        </div>
      </div>
      {/* mobile menu link */}
      {!isAboveMediumScreens && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icons  */}
          <div className="flex justify-end p-12">
            <button className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* mobile menu list  */}
          <div className=" flex ml-[33%] flex-col gap-10 text-2xl capitalize">
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="benefit"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>{" "}
        </div>
      )}
    </nav>
  );
};

export default index;
