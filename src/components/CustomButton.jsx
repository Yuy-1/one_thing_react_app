//library imports
import { CheckCircleIcon } from "@heroicons/react/solid/index.js"

const CustomButton = ({text, handleCompletedThing}) => {
  return (
    <button
      className=""
    >
      <span className="pointer-events-none">{text}</span>
      <CheckCircleIcon className="pointer-events-none w-12 h-12" />
    </button>
  )
}

export default OneThing