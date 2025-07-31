import { Link } from "react-scroll";
interface LinkNavProps {
  children: any;
  href: string;
  isActive: string;
  setIsActive: (value: string) => void;
}

const LinkNav = (props: LinkNavProps) => {
  function handleClick() {
    props.setIsActive(props.href);
  }

  return (
    <Link to={props.href} spy={true} smooth={true} offset={-80} duration={50} onClick={handleClick}>
      <span
        className={`display inline-block p-4 rounded-full text-lg cursor-pointer ${
          props.isActive === props.href
            ? "bg-primary text-white"
            : "text-colorLight hover:bg-blackNavBar transition-colors duration-[400ms]"
        }`}
      >
        {props.children}
      </span>
    </Link>
  );
};

export default LinkNav;
