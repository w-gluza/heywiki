import React, { useState } from "react";
import { connect } from "react-redux";

//  Import action
import { userMessage, sendMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage, sendMessage }) => {
  //  Handle user message
  const [message, setMessage] = useState("");

  //  Handle user submission
  const handleClick = async (e) => {
    // key code of "enter" button which is 13
    const code = e.keyCode || e.which;

    if (code === 13) {
      userMessage(message);
      sendMessage(message);

      // clear message after being send
      setMessage("");
    }
  };

  return (
    <div className="chatWrapper">
      <div className="chat">
        <p className="chatHeading">Some title</p>
        <div className="conversationHistory">
          {chat.length === 0
            ? ""
            : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
        </div>
        <input
          id="chatBox"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleClick}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);
