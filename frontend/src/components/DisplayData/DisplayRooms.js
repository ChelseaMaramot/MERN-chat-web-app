import { useState } from 'react';
import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import MessageCard from '../UI/SideBar/ChatRoomBox';


// will add auth context 
const DisplayRooms = ({data, onSelectRoom}) => {

    

    return (
        <div>
            {data.map((item, index) =>
                <ChatRoomBox
                    key = {index}
                    conversationID = {item.conversationID}
                    roomName = {item.roomName}
                    onClickRoom = {onSelectRoom}
                ></ChatRoomBox>
            )}
        </div>
    )
};

export default DisplayRooms;