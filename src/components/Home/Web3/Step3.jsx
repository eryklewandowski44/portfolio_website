import React from 'react'
import SliderImg from './SliderImg'

const Step3 = () => {
  return (
    <div>
      <div className="web3-card1 step3">
        <h2>Building & Preparation</h2>
        <div className="card1-flex stp3">
          <div className='bnp-imgs'>
            <div className='img'>
              <img src="images/DiscordStats.jpg" alt="" />
            </div>
            <div className='img'>
              <img src="images/TwitterStats.jpg" alt="" />
            </div>
          </div>
          <div className='required'>
            <h3>Required Skills</h3>
            <ul>
              <li>Web3 Social Media marketing</li>
              <li>Community building, moderation {'('}Twitter, Discord{')'}</li>
              <li>Team Management {'('}Management of moderators{')'}</li>
            </ul>
          </div>
        </div>
        <SliderImg />
      </div>
    </div>
  )
}

export default Step3