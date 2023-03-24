import { Link } from 'react-scroll';
interface LinkNavProps {
  children: any,
  href: string,
  isActive: string,
  setIsActive: (value: string) => void
}

const LinkNav = (props: LinkNavProps) => {
  function handleClick() {
    props.setIsActive(props.href)
  }

  return (
    <Link to={props.href} spy={true} smooth={true} offset={-80} duration={50} onClick={handleClick}>
      <div className={`p-4 rounded-full text-lg ${props.isActive === props.href ? "bg-background text-white" : "text-colorLight hover:bg-blackNavBar transition-colors duration-[400ms]"}`}>{props.children}</div>
    </Link>

  )
}

export default LinkNav