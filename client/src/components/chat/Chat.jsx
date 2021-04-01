import React, { useState } from "react";
import { userMessage } from "../../actions/watson";
import { connect } from "react-redux";

const Chat = ({ chat, userMessage }) => {
  // Handle user msg
  const [message, setMessage] = useState("");

  // Handle user submission
  const handleClick = async (e) => {
    // key code of "enter" button which is 13
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log("msg", message);
      userMessage(message);
      // Clear message after "enter" pressed
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <p> Initial chat</p>
      <div>Msg goes here</div>
      {chat.length === 0
        ? ""
        : chat.map((msg) => 
        <div className={msg.type}>{msg.message}</div>
        )}
      <input
        id="chatbot"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage })(Chat);
