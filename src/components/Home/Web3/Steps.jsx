import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function Steps() {
    return (
        <div className='steps-contain'>
            <div style={{'marginTop': '10rem'}}>
                <img src="images/steps.png" alt="" />
            </div>
            <div id='step1'><Step1 /></div>
            <div id='step2'><Step2 /></div>
            <div id='step3'><Step3 /></div>
            <div id='step4'><Step4 /></div>
        </div>
    )
}

export default Steps