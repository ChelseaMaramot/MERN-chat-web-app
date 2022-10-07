import MessageCard from '../UI/Message/MessageCard';

const DisplayMessages = ({data}) => {
    return (
        <div>
            {data.map(item =>
                <MessageCard
                    message = {item.message}
                    isMyMessage = {item.sender=='Chel' ? true : false}
                ></MessageCard>
            )}
        </div>
    )
};

export default DisplayMessages;