import React from 'react'
import '../css/StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image = "https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80"
                profileSrc="https://avatars0.githubusercontent.com/u/69780199?s=460&u=3940fd45951e75044f959991d0107ee212d42207&v=4"
                title="Ian Lombu"
            />

            <Story
                image = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80"
                profileSrc="https://avatars1.githubusercontent.com/u/8461930?s=460&v=4"
                title="Qazi"
            />

            <Story
                image = "https://images.unsplash.com/photo-1600718096300-5e9fc80ff942?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80"
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sony"
            />

            <Story
                image = "https://images.unsplash.com/photo-1588171372033-a42dd7cf8414?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
                profileSrc="https://avatars0.githubusercontent.com/u/6589966?s=460&u=92735e6e0182d3000728073fbaa438160e11ed90&v=4"
                title="Nazariy Dumanskyy"
            />
        </div>
    )
}

export default StoryReel
