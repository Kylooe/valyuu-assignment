import * as React from 'react'

type Props = {
  items: {
    icon: string
    title: string
    value: string | number
    desc: string
  }[]
}

const dividerClass = {
  mobile: 'h-px w-full border-0 my-8',
  desktop: 'desktop:h-20 desktop:w-px relative desktop:top-4 desktop:mx-9 desktop:my-0'
}

const Dashboard: React.FC<Props> = (props) => {
  const {
    items,
  } = props

  return (
    <div className={`py-8 px-5 m-auto w-fit bg-white border border-jet-black rounded-large desktop:p-9 desktop:flex`}>
      {items.map((item, index) => (
        <>
          {index !== 0 && (
            <hr className={`bg-jet-black ${dividerClass.mobile} ${dividerClass.desktop}`} />
          )}
          <div className="flex items-center gap-4 desktop:gap-5">
            <img src={item.icon} className="h-16 desktop:h-[100px]" />
            <div className="w-[212px] desktop:w-[264px]">
              <p className="text-p2 desktop:text-p1">{item.title}</p>
              <h2 className="my-1">{item.value}</h2>
              <p className="text-p2 desktop:text-p1">{item.desc}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Dashboard
