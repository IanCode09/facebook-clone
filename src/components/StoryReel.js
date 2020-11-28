import React from 'react'
import '../css/StoryReel.css'
import Story from './Story'

function StoryReel() {
    const image = "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80"
    return (
        <div className="storyReel">
            <Story
                image = {image}
                profileSrc="https://avatars0.githubusercontent.com/u/69780199?s=460&u=3940fd45951e75044f959991d0107ee212d42207&v=4"
                title="Ian Lombu"
            />

            <Story
                image = {image}
                profileSrc="https://avatars1.githubusercontent.com/u/8461930?s=460&v=4"
                title="Qazi"
            />

            <Story
                image = {image}
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sony"
            />

            <Story
                image = {image}
                profileSrc="https://avatars0.githubusercontent.com/u/6589966?s=460&u=92735e6e0182d3000728073fbaa438160e11ed90&v=4"
                title="Nazariy Dumanskyy"
            />
        </div>
    )
}

export default StoryReel
