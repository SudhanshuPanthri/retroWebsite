import React, { useEffect } from 'react'
import '../css/Greeting.css'
import { useNavigate } from 'react-router-dom'
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
            <div className='paraContainer'>
                <p className='para'>Press Space to enter the world</p>
            </div>
        </div>
    )
}

export default Greeting