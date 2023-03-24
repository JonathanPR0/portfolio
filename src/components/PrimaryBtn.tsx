import { Link } from "react-scroll"

interface PrimaryBtnProps {
  text: string
  href: string
  className?: string
  scroll?: boolean
}

const PrimaryBtn = (props: PrimaryBtnProps) => {
  return (
    props.scroll ? (
      <Link to={props.href} spy={true} smooth={true} offset={-80} duration={50}><div className={`w-max py-3 px-5 cursor-pointer inline-block text-backgroundVariant hover:text-backgroundVariant bg-primary hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms] ${props.className}`}>{props.text}</div></Link>
    ) : (
      <a href={props.href} className={`w-max py-3 px-5 cursor-pointer inline-block text-backgroundVariant hover:text-backgroundVariant bg-primary hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms] ${props.className}`}>{props.text}</a>
    )

  )
}

export default PrimaryBtn