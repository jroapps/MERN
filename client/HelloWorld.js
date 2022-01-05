import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
            <h1>This is my first MERN app!</h1>
        </div>
    )
}

export default hot(module)(HelloWorld)