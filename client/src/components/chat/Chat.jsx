import React, { useState } from "react";

const Chat = () => {
  // Handle user msg
  const [message, setMessage] = useState("");

  // Handle user submission
  const handleClick = async (e) => {
    // key code of "enter" button which is 13
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log("msg", message);
      // Clear message after "enter" pressed
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <p> Initial chat</p>
      <div>Msg goes here</div>
      <input
        id="chatbot"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
      />
    </div>
  );
};

export default Chat;
