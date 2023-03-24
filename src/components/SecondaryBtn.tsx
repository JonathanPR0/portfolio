interface SecondaryBtnProps {
  text: string
  href: string
  className?: string
  download?: boolean
}

const SecondaryBtn = (props: SecondaryBtnProps) => {
  return (props.download ? (
    <a href={props.href} download className={`w-max py-3 px-5 cursor-pointer inline-block text-primary hover:text-backgroundVariant hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms] ${props.className}`}>{props.text}{props.download}</a>
  ) : (
    <a href={props.href} className={`w-max py-3 px-5 cursor-pointer inline-block text-primary hover:text-backgroundVariant hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms] ${props.className}`}>{props.text}</a>
  )
  )
}

export default SecondaryBtn