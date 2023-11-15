import axios from "axios";
const translate = async (text) => {
  const encodedParams = new URLSearchParams();

  encodedParams.set("from", "auto");
  encodedParams.set("to", "en");
  encodedParams.set("text", text);

  const options = {
    method: "POST",
    url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "efb2b785c6msh1ae9c55a6859ce5p181d94jsnbe2d6e86d146",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default translate;
