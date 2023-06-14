import * as React from 'react'

import EcoTitleSection from './eco-title-section'
import EcoContentSection from './eco-content-section'

const Index: React.FC = () => {
  return (
    <>
      <div className="h-screen text-center">
        <h1>some other parts...</h1>
      </div>

      <EcoTitleSection />
      <EcoContentSection />

      <div className="h-screen text-center">
        <h1>some other parts...</h1>
      </div>
    </>
  )
}

export default Index
