import * as React from 'react'

import Button from '../Button'
import './index.css'

type Props = {
  active?: boolean
  cover: string
  title: string
  content: string
  bgColor?: string
  actions?: Record<string, () => void>
}

const containerClass = {
  base: 'rounded-small border border-jet-black flex items-center',
  mobile: 'flex-col w-[336px]',
  desktop: 'desktop:flex-row desktop:p-5 desktop:w-fit relative transition',
}

const Card: React.FC<Props> = (props) => {
  const {
    active,
    cover,
    title,
    content,
    bgColor,
    actions,
  } = props

  return (
    <div
      className={`${containerClass.base} ${containerClass.mobile} ${containerClass.desktop} ${active ? 'activeContainer' : 'inactiveContainer'}`}
      style={{ backgroundColor: bgColor }}
      {...actions}
    >
      <div className="w-[336px] h-[189px] desktop:w-[330px] desktop:h-[315px] flex justify-center items-center overflow-hidden">
        <img src={cover} className="desktop:h-full desktop:max-w-none" alt="cover" />
      </div>

      <div className={`p-5 desktop:p-0 ${active ? 'activeContent' : 'inactiveContent'} overflow-hidden transition-all`}>
        <h5 className={`mb-2 ${active ? 'activeTitle' : 'inactiveTitle'} w-full visible transition-all`}>{title}</h5>
        <p className="mb-8 text-p3 desktop:text-p2">{content}</p>
        <Button />
      </div>
    </div>
  )
}

export default Card
