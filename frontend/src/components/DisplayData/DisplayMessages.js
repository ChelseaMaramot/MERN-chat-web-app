import MessageCard from '../UI/Message/MessageCard';

const DisplayMessages = ({data}) => {
    return (
        <div>
            {data.map((item, index) =>
                <MessageCard
                    key = {index}
                    message = {item.message}
                    isMyMessage = {item.sender=='chelsea' ? true : false}
                ></MessageCard>
            )}
        </div>
    )
};

export default DisplayMessages;