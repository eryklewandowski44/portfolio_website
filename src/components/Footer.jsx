import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='foo'>
            <div className="foo-flex">
                <div className="foo-left">
                    <h3>Get in Touch</h3>
                    <div className="foo-left-flx">
                        <p>Thanks for checking out my digital portfolio! If you like what you see and want to collaborate on a project or have any questions, dont hesitate to drop me a line:</p>
                        <img src="images/Eryk-3D-1.png" alt="" />
                    </div>
                    <div className='snd-mail'>
                        <p><a href="mailto:eryk.lewandowski44@gmail.com">Send me an Email</a></p>
                    </div>
                </div>
                <div className="foo-right">
                    <p><Link to={'/'}>Portfolio</Link></p>
                    <p><a href="https://www.linkedin.com/in/eryk-lewandowski44/" target='_blank' rel='noreferrer'>Linkedin</a></p>
                    <p><Link to={'/about'}>Contact</Link></p>
                </div>
            </div>
        </div>
    )
}


export default Footer