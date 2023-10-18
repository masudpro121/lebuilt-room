import axios from "axios";

export default function handler(req, res) {
  if (req.method == "POST") {
    const { uid, messages } = JSON.parse(req.body);
    const data = {
      to: uid,
      messages
    };
    console.log(uid, 'uid');
    console.log(messages);
    if (uid && messages.length>0) {
      axios
        .post("https://api.line.me/v2/bot/message/push", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.LINE_MESSAGE_ACCESS,
          },
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
