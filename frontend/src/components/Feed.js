import React from 'react'
import '../css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic = 'https://avatars0.githubusercontent.com/u/69780199?s=460&u=3940fd45951e75044f959991d0107ee212d42207&v=4'
                message='Its me Ian Lombu'
                timestamp='1601493943737'
                imgName='imgName'
                username='Ian'
            />
        </div>
    )
}

export default Feed
