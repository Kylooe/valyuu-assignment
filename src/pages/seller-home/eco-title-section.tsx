import * as React from 'react'

const EcoTitleSection: React.FC = () => {

  return (
    <div className="text-center text-white py-module desktop:py-20 bg-cover bg-center bg-[url('/eco_title.png')]">
      <div className="mb-5 desktop:mb-12">
        <p className="text-p2 desktop:text-p1">Every year,  there are</p>
        <h2>100,00,00</h2>
        <p className="text-p2 desktop:text-p1">end-of-use electronics,</p>
      </div>
      <div className="mb-5 desktop:mb-12">
        <h2>2000€</h2>
        <p className="text-p2 desktop:text-p1">value is ignored, and eventually</p>
      </div>
      <div>
        <h2>1000KG</h2>
        <p className="text-p2 desktop:text-p1">waste is generated</p>
      </div>
    </div>
  )
}

export default EcoTitleSection
