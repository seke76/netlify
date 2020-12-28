const axios = require("axios").default;

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    console.log("Hello webhook!");
    const body = JSON.parse(event.body);
    //const username = body.sender.login;
    const username = "Stefan";
    //const avatarUrl = body.sender.avatar_url;
    const avatarUrl = "fjart";
    //const repoName = body.repository.name;
    const repoName = "Apis";
   
    console.log("Submitted!");
    return {
      statusCode: 204,
    };
  } catch (err) {
      console.log("Shit, something went terrible wrong!");
    return { statusCode: 500, body: err.toString() };
  }
};
