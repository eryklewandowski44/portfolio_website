import React from 'react'

const Footer = () => {
    return (
        <div className='foo'>
            <div className="foo-flex">
                <div className="foo-left">
                    <h3>Get in Touch</h3>
                    <div className="foo-left-flx">
                        <p>Thanks for checking out my digital portfolio! If you like what you see and want to collaborate on a project or have any questions, dont hesitate to drop me a line:</p>
                        <img src="images/about.png" alt="" />
                    </div>
                    <div className='snd-mail'>
                        <p><a href="mailto:">Send me an Email</a></p>
                    </div>
                </div>
                <div className="foo-right">
                    <p><a href="/">Portfolio</a></p>
                    <p><a href="/">Linkedin</a></p>
                    <p><a href="/">Contact</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer