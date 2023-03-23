import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import LinkNav from "../components/LinkNav"
import { useState } from "react"


const Nav = () => {
  const [isActive, setIsActive] = useState("#contact")

  return (
    <nav className="flex gap-3 bg-blackNavBar w-max px-7 py-3 fixed z-10 left-2/4 bottom-8 translate-x-[-50%] backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-full transition-all">
      <LinkNav isActive={isActive} setIsActive={setIsActive} href="#"><AiOutlineHome /></LinkNav>
      <LinkNav isActive={isActive} setIsActive={setIsActive} href="#about"><AiOutlineUser /></LinkNav>
      <LinkNav isActive={isActive} setIsActive={setIsActive} href="#experience"><BiBook /></LinkNav>
      <LinkNav isActive={isActive} setIsActive={setIsActive} href="#services"><RiServiceLine /></LinkNav>
      <LinkNav isActive={isActive} setIsActive={setIsActive} href="#contact"><BiMessageSquareDetail /></LinkNav>
    </nav>
  )
}

export default Nav
