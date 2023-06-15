import * as React from 'react'

import SliderItem from '@/components/SliderItem'
import EcoTitleSection from './eco-title-section'
import EcoContentSection from './eco-content-section'
import JoinDashboardSection from './join-dashboard-section'

const Index: React.FC = () => {
  return (
    <>
      <SliderItem animateIn={false}>
        <div className="h-[120vh] border-b flex flex-col justify-between">
          <p>some other part...</p>
          <p>bottom of this part</p>
        </div>
      </SliderItem>

      <SliderItem>
        <EcoTitleSection />
      </SliderItem>
      <SliderItem>
        <EcoContentSection />
      </SliderItem>
      <SliderItem>
        <JoinDashboardSection />
      </SliderItem>

      <SliderItem>
        <div className="h-[60vh] pt-20">
          <h1>some other part...</h1>
        </div>
      </SliderItem>
    </>
  )
}

export default Index
