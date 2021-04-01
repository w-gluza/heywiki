import { INPUT_SUCCESS, INPUT_FAIL } from "./types";

// Function that handles user messages
export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (error) {
    dispatch({ type: INPUT_FAIL });
  }
};

// Create a session

// Send the msg to the bot - API CALL
