import MessageCard from '../UI/Message/MessageCard';

const DisplayMessages = ({data, sender}) => {
    return (
        <div>
            {data.map((item, index) =>
                <MessageCard
                    key = {index}
                    message = {item.message}
                    isMyMessage = {item.sender==sender ? true : false}
                ></MessageCard>
            )}
        </div>
    )
};

export default DisplayMessages;