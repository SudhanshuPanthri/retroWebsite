import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../css/Name.css'
const Name = () => {
    // const [keyPressed, setKeyPressed] = useState(true)
    const line1 = "Hi, I'm Sudhanshu Panthri....."
    const line2 = "Mind If I Take You On A Journey ?"
    const line3 = `Press --> Arrow key to move`

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.25,
                staggerChildren: 0.08,
            },
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    // const down = () => {
    //     if (keyPressed) {
    //         setKeyPressed(!keyPressed)
    //     }
    //     else {
    //         setKeyPressed(!keyPressed)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('keydown', down)
    //     return (
    //         window.removeEventListener('keydown', down)
    //     )
    // }, [])
    return (
        <motion.div className='nameParent'
        >
            <motion.div className='itachi'></motion.div>
            <motion.div className='greetingMessage'
                variants={sentence}
                initial="hidden"
                animate="visible">
                {line1.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br />
                {line2.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                    )
                })}
                <br />
                <br />
                <br />
                <br />
                {line3.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                    )
                })}
            </motion.div>
        </motion.div>

    )
}

export default Name