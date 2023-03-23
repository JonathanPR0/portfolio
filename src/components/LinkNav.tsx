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
    <a href={props.href} className={`p-4 rounded-full text-lg ${props.isActive === props.href ? "bg-background text-white" : "text-colorLight hover:bg-blackNavBar transition-colors duration-[400ms]"}`} onClick={handleClick}>{props.children}</a>
  )
}

export default LinkNav