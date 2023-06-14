import * as React from 'react'

import EcoTitleSection from './eco-title-section'
import EcoContentSection from './eco-content-section'
import JoinDashboardSection from './join-dashboard-section'

const Index: React.FC = () => {
  return (
    <>
      <div className="h-[80vh] text-center">
        <h1>some other parts...</h1>
      </div>

      <EcoTitleSection />
      <EcoContentSection />
      <JoinDashboardSection />

      <div className="h-[60vh] text-center">
        <h1>some other parts...</h1>
      </div>
    </>
  )
}

export default Index
