import Image from "./Image"
import PrimaryBtn from "./PrimaryBtn"
import SecondaryBtn from "./SecondaryBtn"

interface ProjectProps {
  srcImg: string
  title: string
  textPrimaryBtn: string
  urlPrimaryBtn: string
  textSecondaryBtn: string
  urlSecondaryBtn: string
}

const Project = (props: ProjectProps) => {
  return (
    <article className="flex flex-col w-full sm:w-[43%] md:w-[31%] p-5 bg-backgroundVariant hover:bg-transparentColor border border-transparentColor hover:border-primaryVariant rounded-[2rem] transition-colors duration-[400ms]">
      <div>
        <Image src={props.srcImg} className="rounded-3xl overflow-hidden" />
      </div>
      <h3 className="text-left text-lg font-medium mt-4 mb-6">{props.title}</h3>
      <div className="flex gap-2 md:gap-3 mb-4">
        <SecondaryBtn text={props.textSecondaryBtn} href={props.urlSecondaryBtn} className="text-sm md:px-3 lg:px-5 flex items-center justify-center" />
        <PrimaryBtn text={props.textPrimaryBtn} href={props.urlPrimaryBtn} className="text-sm md:px-3 lg:px-5 flex items-center justify-center" />
      </div>
    </article>
  )
}

export default Project