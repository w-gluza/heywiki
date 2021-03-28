// Import dependencies
const express = require("express");
const router = express.Router();
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

// Create instance of assistant

// Authenticate
const authenticator = new IamAuthenticator({
  apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

// Connect to assistant
const assistant = new AssistantV2({
  version: "2021-03-28",
  authenticator: authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
});

// Route to session token
// GET /api/watson/session
router.get("/session", async (req, res) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });
    res.json(session["result"]);
  } catch (err) {
    res.send("There was an error processing your request");
    console.log(err);
  }
});

// Handle messages





// Export routes
module.exports = router;