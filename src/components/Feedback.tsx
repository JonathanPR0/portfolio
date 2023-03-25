interface FeedbackProps {
  isActive: boolean
}

const Feedback = (props: FeedbackProps) => {
  return (
    <div className={`relative ${props.isActive ? "inline-block translate-y-0" : "hidden translate-y-[-32px]"} w-full bg-feedback p-2 text-backgroundVariant rounded-lg border border-backgroundVariant transition-transform`}>Email enviado</div>
  )
}

export default Feedback