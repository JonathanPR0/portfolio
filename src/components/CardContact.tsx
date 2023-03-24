interface CardContactProps {
  children: any,
  title: string,
  smallText: string,
  linkText: string,
  linkHref: string,
  iconClass?: string
  cardClass?: string
}

const CardContact = (props: CardContactProps) => {
  return (
    <article className={`flex items-center justify-center flex-col lg:h-full bg-backgroundVariant border border-transparentColor p-8 text-center rounded-2xl transition-colors duration-[400ms] hover:border-primaryVariant hover:bg-transparentColor cursor-default gap-2 ${props.cardClass}`}>
      <div className={`flex items-center justify-center text-white text-2xl mb-2 ${props.iconClass}`}>
        {props.children}
      </div>
      <h5 className="text-base text-white">{props.title}</h5>
      <small className="text-xs text-colorLight">{props.smallText}</small>
      <a href={props.linkHref} className="text-sm text-primary cursor-pointer hover:text-white">{props.linkText}</a>
    </article>
  )
}

export default CardContact