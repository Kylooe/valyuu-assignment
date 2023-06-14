import * as React from 'react'

import Card from '@/components/Card'

const EcoContentSection: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState<'left' | 'right'>('left')

  const switchActiveCard = React.useCallback((target: 'left' | 'right') => () => {
    setActiveCard(target)
  }, [])

  return (
    <div className="flex items-center justify-center flex-col gap-6 desktop:flex-row desktop:gap-4 py-module px-5 desktop:py-32">
      <div className="text-center desktop:text-left desktop:w-[330px]">
        <p className="text-p2">We believe</p>
        <h3>Save planet is something everyone can do</h3>
      </div>
      <div className="relative flex flex-wrap gap-5">
        <Card
          cover="/ivana-cajina-DhUjuTaLFMg.png"
          bgColor="#EDE9FF"
          title="Sustainability"
          content="donate the value of your product to Stichting Leergeld."
          active={activeCard === 'left'}
        />
        <Card
          cover="/surface-VDWS2oWdZzg.png"
          bgColor="#E8FFA8"
          title="Do some good"
          content="donate the value of your product to Stichting Leergeld."
          active={activeCard === 'right'}
          actions={{
            onMouseEnter: switchActiveCard('right'),
            onMouseLeave: switchActiveCard('left'),
          }}
        />
      </div>
    </div>
  )
}

export default EcoContentSection
