import { SingleMessage } from "./SingleMessage"

export const MessageList = (props) => {

  return (
    <div className="list-wrapper">
      {props.messageList.map((singleMessage) => (
        <SingleMessage
          key={singleMessage._id}
          singleMessage={singleMessage}
        />
      ))}
    </div>
  )
}
