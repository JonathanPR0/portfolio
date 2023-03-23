interface ImageProps {
  src: string,
  alt?: string,
  className?: string,
}

const Image = (props: ImageProps) => {
  return (
    <img src={props.src} alt={props.alt} className={`block w-full object-cover ${props.className}`} />
  )
}

export default Image