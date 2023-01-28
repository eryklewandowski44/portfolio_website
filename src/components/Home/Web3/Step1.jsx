import React from 'react'

function Step1() {
  return (
    <div>
      <div className="web3-card1 step1">
        <h2>Building & Preparation</h2>
        <div className="card1-flex">
          <div className="card1-left step1-card-left">
            <p>Creating the entire collection from scratch. Outsourcing, hiring and building and finally managing a team of 2D and Voxel designers.</p>
            <p>Proper calculation and cooperartion with the development team to match NFT in between 2D and The Sandbox <br />{'('}They are interchangeable thanks to layer infinity technology{')'}.</p>
            <div className="required">
              <h3>Required Skills</h3>
              <ul>
                <li>Outsourcing {'('}upwork, fivver{')'}</li>
                <li>Team&Project Management</li>
                <li>Brief {'('}Excalidraw, notion{')'}</li>
                <li>Rendering {'('}LightTracer{')'}</li>
                <li>MS&Google Environment</li>
              </ul>
            </div>
          </div>
          <div className="card1-right step1-imgs">
            <img src="images/step1-2.jpeg" alt="" />
            <img src="images/step1-1.png" alt="" />
            <img src="images/step1-3.png" alt="" />
            <img src="images/step1-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step1