import React from 'react'
import './ChatRoomBox.css'

function ChatRoomBox() {
    return (
        <div className='chatRoomBox'>
            <img className="chatRoomImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=" "></img>
           
            <div className='textWrapper'>
                <span className="chatName">Jane Doe</span>
            </div>
            
        </div>
    )
}

export default ChatRoomBox
