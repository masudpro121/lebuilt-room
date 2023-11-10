import axios from 'axios'
const translate = async (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);
  encodedParams.set("format", "text");
  encodedParams.set("source", "zh-CN");
  encodedParams.set("target", "en");

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "a0da856e65msh3d9021db6e76e07p144c43jsnce7b7228dfba",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
     return response.data
  } catch (error) {
    console.error(error);
  }
};

export default translate