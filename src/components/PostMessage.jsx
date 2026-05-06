import { useState } from "react"

import { BASE_URL } from "../api"

export const PostMessage = (props) => {
  const [newMessage, setNewMessage] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit called")
    fetch(`${BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: newMessage
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Message posted:", data)
        props.onNewMessage()
        setNewMessage("")
      })
      .catch(error => console.error("Error posting message:", error))
  }
  
  return (
    <div className="post-wrapper">
      <p>What's making you happy right now?</p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          placeholder="Write your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          aria-label="button for submitting your post"
        >
          <span
            className="emoji"
            aria-label="like button">
            &#x2665;
          </span>
          Send message
          <span
            className="emoji"
            aria-label="like button">
            &#x2665;
          </span>
        </button>
      </form>
    </div>
  )
}
