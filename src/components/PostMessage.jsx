import { BASE_URL } from "../api"

export const PostMessage = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit called")
  }
  
  return (
    <div className="post-wrapper">
      <p>What's making you happy right now?</p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          placeholder="Write your message here..."
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
