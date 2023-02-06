import React from 'react'
import SliderImg from './SliderImg'

const Step3 = () => {
  return (
    <div className='step3'>
      <h2 style={{'marginBottom': '3rem'}}>Biggest WEB3 Priority - Community</h2>
      <div className='flex-row top'>
        <div><img src="images/TwitterStats.jpg" alt="" /></div>
        <div><img src="images/DiscordStats.jpg" alt="" /></div>
      </div>
      <SliderImg />
      <div className='bottom-line'>
        <p>Web3 Social Media Marketing | Community Building, Moderation (Twitter, Discord) | Team Management (Moderators)</p>
      </div>
    </div>

  )
}

export default Step3