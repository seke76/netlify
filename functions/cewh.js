import axios from "axios";

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
export async function handler(event, context) {
  try {
    console.log("Hello webhook!");
    const body = JSON.parse(event.body);
    //const username = body.sender.login;
    const username = "Stefan";
    //const avatarUrl = body.sender.avatar_url;
    const avatarUrl = "fjart";
    //const repoName = body.repository.name;
    const repoName = "Apis";
    const res = await axios.post(process.env.DISCORD_WEBHOOK_URL, {
      content: `:taco: :taco: :taco: ${username} just starred ${repoName}! :rocket: :muscle: :tada: :taco:`,
      embeds: [
        {
          image: {
            url: avatarUrl,
          },
        },
      ],
    });
    console.log("Submitted!");
    return {
      statusCode: 204,
    };
  } catch (err) {
      console.log("Shit, something went terrible wrong!");
    return { statusCode: 500, body: err.toString() };
  }
}
