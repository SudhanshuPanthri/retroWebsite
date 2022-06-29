import React, { useEffect } from 'react'
import '../css/Greeting.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const bounceTransition = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeInOut",
    },
}
const Greeting = () => {
    const navigate = useNavigate()
    const keyPressed = () => {
        navigate('/name')
    }
    useEffect(() => {
        window.addEventListener('keypress', keyPressed)
    }, [])
    return (
        <div className='greetingParent'>
            <motion.div className='paraContainer'
                animate={{
                    y: ["10%", "0%"],
                }}
                transition={bounceTransition}
            >
                <p className='para'>Press Space to enter the world</p>
            </motion.div>
        </div >
    )
}

export default Greeting