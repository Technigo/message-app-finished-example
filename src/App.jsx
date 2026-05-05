import { useEffect, useState } from "react"

import { BASE_URL } from "./api"
import { MessageList } from "./components/MessageList"
import { PostMessage } from "./components/PostMessage"

export const App = () => {
  const [messageList, setMessageList] = useState([
    {_id: "123", message: "This is a message"},
    {_id: "456", message: "This is another message"}
  ])

  const fetchPosts = () => {
    // This function should fetch from the API and update the messageList state with the new data
    console.log("fetchPosts called")
  }
    
  return (
    <>
      <PostMessage />
      <MessageList messageList={messageList} />
    </>
  )
}
