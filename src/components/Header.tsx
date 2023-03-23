interface HeaderProps {
  sectionTitle: string,
  subtitleText: string
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <h5 className='text-md mb-2 text-colorLight'>{props.subtitleText}</h5>
      <h2 className='text-3xl mb-12 text-primary'>{props.sectionTitle}</h2>
    </>
  )
}

export default Header