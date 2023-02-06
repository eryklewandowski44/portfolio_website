import React from 'react'

function Card2() {
  return (
    <div className='w3-c2'>
      <h3 style={{'fontSize': 'x-large', 'marginBottom': '4rem'}}>NIVEA Eastern Europe</h3>
      <div className="flex-row c2">
        <div className="flex-col c2-lt">
          <div>
            <div className='nevia-logo'><img src="images/nivea/nivea.png" alt="" /></div>
            <p>Micro-Influencer campaign for NIVEA BABY</p>
          </div>
          <div>
            <h2>Response rate: <span style={{ color: '#62A64B'}}>75%</span></h2>
          </div>
        </div>
        <div className="flex-row c2-rt">
          <div><img src="images/nivea/Group 7.png" alt="" /></div>
          <div><img src="images/nivea/Group 6.png" alt="" /></div>
        </div>
      </div>
      <div className='bottom-line'>
      <p>Influencer Marketing | Data Analysis (NIELSEN Answers)</p>
      </div>
    </div>
  )
}

export default Card2