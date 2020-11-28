import React from 'react'
import '../css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed
