import * as React from 'react'
import IconForward from '@/assets/forward.svg'

type Props = {
  text?: string
  onClick?: () => {}
  className?: string
}

const Card: React.FC<Props> = (props) => {
  const {
    text = 'Know more',
    onClick,
    className,
  } = props

  return (
    <button
      className={`flex items-center bg-ultra-marine rounded-full py-2 px-3 desktop:py-4 desktop:px-5 ${className}`}
      onClick={onClick}
    >
      <span className="text-p2 text-white">{text}</span>
      <img
        src={IconForward}
        className="pl-1.5 desktop:pl-2"
      />
    </button>
  )
}

export default Card
