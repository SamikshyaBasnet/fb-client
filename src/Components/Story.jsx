import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(22,22,22,0.5), rgba(22,22,22,0.6)),url(${image})` }} className='story' >
            <Avatar src={profileSrc} className='story__avatar' />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
