import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["REACT_APP_OPENAI_API_KEY"], // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;
