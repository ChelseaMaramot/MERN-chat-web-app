import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import MessageCard from '../UI/SideBar/ChatRoomBox';

const DisplayRooms = ({data}) => {
    return (
        <div>
            {data.map(item =>
                <ChatRoomBox
                    conversationID={item.conversationID}
                    roomName={item.roomName}
                ></ChatRoomBox>
            )}
        </div>
    )
};

export default DisplayRooms;