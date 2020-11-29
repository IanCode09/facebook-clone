import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import {
    Videocam,
    PhotoLibrary,
    InsertEmoticon
} from '@material-ui/icons'
import '../css/MessageSender.css'

function MessageSender() {
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://avatars0.githubusercontent.com/u/69780199?s=460&u=3940fd45951e75044f959991d0107ee212d42207&v=4" />
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`Whats's on your mind`}
                    />
                    <input 
                        type="file"
                        className="messageSender__fileSelector"
                        onChange={handleChange}
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
