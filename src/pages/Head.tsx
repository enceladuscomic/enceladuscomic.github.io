import React, { useState } from 'react'
import { motion } from 'framer-motion'


function Head() {
    // state for eye opening animation
    const [eyeIsOpen, setEyeIsOpen] = useState(false)

    function handleEye(e: any) {
        setEyeIsOpen(!eyeIsOpen)

        setTimeout(function () {
            window.location.href = "/main";
        }, 2000);
    }

    // for spotlight
    window.addEventListener('mousemove', (event: any) => {
        if (event.target.classList.contains('spotlight')) {
            const localX = event.clientX - event.target.offsetLeft + (event.target.clientWidth / 2)
            const localY = event.clientY - event.target.offsetTop + (event.target.clientHeight / 2)

            document.documentElement.style.setProperty('--mouse-x', `${localX}px`)
            document.documentElement.style.setProperty('--mouse-y', `${localY}px`)
        }
    })

    return (
        <div className="landing">
            <span
                className="landing-text spotlight spotlight-container px-5 md:pl-10"
                onClick={handleEye}>ENCELADUS</span>
            {/* onClick={() => { setEyeIsOpen(!eyeIsOpen) }}>ENCELADUS</span> */}

            <div className="eye-wrap">
                <div className="eyelid">
                    <motion.span id="eyelid-span"
                        animate={{ height: eyeIsOpen ? 0 : '100%' }}
                        transition={{ duration: 1, type: 'tween', times: [0, 0.05, 0.1, 1.5] }}
                    >
                    </motion.span>
                </div>
                <div className="eye">
                    <motion.div className="eye-ball" >
                        <div className="iris"></div>
                        <div className="iris2"></div>
                        <div className="iris3"></div>
                        <div className="iris4"></div>
                        <div className="pupil"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Head