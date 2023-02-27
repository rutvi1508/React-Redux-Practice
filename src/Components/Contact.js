import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
    const location = useLocation()

    console.log("LOCAOSAJNAND", location)
    return (
        <div>
            <h1>Hello</h1>
            <h2>Contact US</h2>
        </div>
    )
}

export default Contact