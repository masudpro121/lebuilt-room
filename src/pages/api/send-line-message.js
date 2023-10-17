import axios from "axios";

export default function handler(req, res) {
  if (req.method == "POST") {
    const { uid, text, img } = JSON.parse(req.body);
    console.log(uid, text, img);
    const data = {
      to: uid,
      messages: [
        {
          type: "text",
          text: text,
        },
        {
          type: "image",
          originalContentUrl: img[0],
          previewImageUrl: img[0],
        },
        {
          type: "image",
          originalContentUrl: img[1],
          previewImageUrl: img[1],
        },
        {
          type: "image",
          originalContentUrl: img[2],
          previewImageUrl: img[2],
        },
        {
          type: "image",
          originalContentUrl: img[3],
          previewImageUrl: img[3],
        },
      ],
    };
    if (uid && text && img) {
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
