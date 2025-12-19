import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const analyzeEmotion = async (text) => {
  const response = await API.post("/analyze", {
    text: text,
  });
  return response.data;
};
