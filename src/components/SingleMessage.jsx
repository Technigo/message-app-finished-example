import { useState } from "react"

import { BASE_URL } from "../api"

export const SingleMessage = (props) => {

  return (
    <div className="message">
      <div className="message-header">
        <p>{props.singleMessage.message}</p>
      </div>
    </div>
  )
}
