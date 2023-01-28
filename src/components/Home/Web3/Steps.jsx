import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function Steps() {
    return (
        <div className='steps-contain'>
            <h1>Steps</h1>
            <div className='steps'>
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
            </div>
        </div>
    )
}

export default Steps