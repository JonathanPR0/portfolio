interface CardProps {
  children: any,
  title: string,
  smallText: string,
  iconClass?: string
  cardClass?: string
}

const Card = (props: CardProps) => {
  return (
    <article className={`flex items-center justify-center flex-col lg:h-full bg-backgroundVariant border border-transparentColor p-8 text-center rounded-2xl transition-colors duration-[400ms] hover:border-primaryVariant hover:bg-transparentColor cursor-default ${props.cardClass}`}>
      <div className={`flex items-center justify-center text-primary text-2xl mb-4 ${props.iconClass}`}>
        {props.children}
      </div>
      <h5 className="text-base text-white">{props.title}</h5>
      <small className="text-xs text-colorLight">{props.smallText}</small>
    </article>
  )
}

export default Card