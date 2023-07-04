import { useState } from "react";
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { useSectionRef } from "../shared/sectionRefContext";

export default function Navbar({ leftFontStyle, rightFontStyle,  }) {
  const [toggle, setToggle] = useState(false);

  const { scrollToHome, scrollToAbout, scrollToWork, scrollToContact, scrollToProjects } = useSectionRef();

  const title = "JD"

  return (
    <div className="sticky top-0 z-40">

      {/* Nav mobile */}
      <nav className="flex justify-between items-center py-4  bg-white px-4 z-20 max-md:hidden">
        {/* Logo */}
        <div>
          <a className="font-bold text-3xl">{title}</a>
        </div>

        {/* Nav desktop */}
        <div className="flex items-center gap-x-4 font-medium">
          <a onClick={() => scrollToHome()}>Home</a>
          <a onClick={() => scrollToAbout()}>About</a>
          <a onClick={() => scrollToProjects()}>Projects</a>
          <a onClick={() => scrollToWork()}>Work</a>
          <a onClick={() => scrollToContact()}>Contact</a>
        </div>

        {/* <div className="absolute bg-red-100 top-0 bottom-0 left-0 right-0 z-20 hidden max-md:block max-md:z-10">asdf</div> */}
      </nav>

      {toggle ? <div className="fixed top-0 bottom-0 left-0 right-0 h-full z-10" onClick={() => setToggle(prev => !prev)}></div> : null}

      {/* Nav mobile */}
      <nav className="justify-between items-center py-4  bg-white px-4 z-20 hidden max-md:flex">
        <div>
          <a className="font-bold text-3xl">WK</a>
        </div>

        {toggle ? <img src={close} className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(prev => !prev)} /> : null}
        {!toggle ? <img src={menu} className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(prev => !prev)} /> : null}
        {toggle ?
          <div className="absolute flex flex-col bg-black text-white top-14 right-3 rounded-md p-2 opacity-80 z-50">
            <a className="py-2 pr-10 pl-2" onClick={() => scrollToHome()} >Home</a>
            <a className="py-2 pr-10 pl-2" onClick={() => scrollToAbout()}>About</a>
            <a className="py-2 pr-10 pl-2" onClick={() => scrollToProjects()}>Projects</a>
            <a className="py-2 pr-10 pl-2" onClick={() => scrollToWork()}>Work</a>
            <a className="py-2 pr-10 pl-2" onClick={() => scrollToContact()}>Contact</a>
          </div>
          : null}
      </nav>
    </div>
  )
}