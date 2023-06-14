import * as React from 'react'

import Dashboard from '@/components/Dashboard'

const JoinDashboardSection: React.FC = () => {
  return (
    <div className="py-module desktop:py-20 bg-background bg-cover desktop:bg-center bg-[url('/sticker_m.png')] desktop:bg-[url('/sticker.png')] border-y border-jet-black">
      <div className="text-center mb-6 desktop:mb-10">
        <h3>Come and join us!</h3>
        <p className="text-p2 mt-2">together with our 134,000 members, Valyuu has already</p>
      </div>

      <Dashboard
        items={[
          {
            icon: '/icon0.png',
            title: 'Saved CO₂',
            value: '90,000g',
            desc: 'From Paris to New York',
          }, {
            icon: '/icon1.png',
            title: 'Tree Planted',
            value: '23,500',
            desc: 'Driving on GAS',
          }, {
            icon: '/icon2.png',
            title: 'Donation',
            value: '€7,600',
            desc: 'From Paris to New York',
          }
        ]}
      />

      <h3 className="mt-20 text-center">other content...</h3>
    </div>
  )
}

export default JoinDashboardSection
