import * as React from 'react'
import Button from './Button'

type Props = {
  active?: boolean
  cover: string
  title: string
  content: string
  bgColor?: string
  actions?: Record<string, () => void>
}

const transitionClass = 'ease-linear duration-200'

const containerClass = {
  base: 'rounded-small border border-jet-black flex items-center overflow-hidden',
  mobile: 'flex-col w-[336px]',
  desktop: `desktop:flex-row desktop:p-5 desktop:w-fit relative ${transitionClass}`,
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

  const desktopStateClass = React.useMemo(() => ({
    container: active ? 'desktop:-rotate-7' : 'desktop:rotate-7',
    wrapper: active ? 'desktop:static desktop:p-9' : 'desktop:absolute inset-x-0',
    title: active ? '' : 'desktop:text-white desktop:text-center',
    content: active ? '' : 'desktop:hidden',
  }), [active])

  return (
    <div
      className={`${containerClass.base} ${containerClass.mobile} ${containerClass.desktop} ${desktopStateClass.container}`}
      style={{ backgroundColor: bgColor }}
      {...actions}
    >
      <div className="w-[336px] h-[189px] desktop:w-[330px] desktop:h-[315px] flex justify-center items-center overflow-hidden">
        <img src={cover} className="desktop:h-full desktop:max-w-none" alt="cover" />
      </div>
      <div className={`p-5 ${desktopStateClass.wrapper} transitionClass`}>
        <h5 className={`mb-2 ${desktopStateClass.title} transitionClass`}>{title}</h5>
        <p className={`mb-8 text-p3 desktop:text-p2 ${desktopStateClass.content}`}>{content}</p>
        <Button className={desktopStateClass.content} />
      </div>
    </div>
  )
}

export default Card
