import { useEffect, useState } from "react"

import { BASE_URL } from "./api"
import { MessageList } from "./components/MessageList"
import { PostMessage } from "./components/PostMessage"

export const App = () => {
  const [messageList, setMessageList] = useState([])

  const fetchPosts = () => {
    // This function should fetch from the API and update the messageList state with the new data
    console.log("fetchPosts called")

    fetch(`${BASE_URL}/messages`)
      .then(response => response.json())
      .then(data => setMessageList(data))
      .catch(error => console.error("Error fetching messages:", error))
  }
    
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <PostMessage onNewMessage={fetchPosts} />
      <MessageList messageList={messageList} />
    </>
  )
}
