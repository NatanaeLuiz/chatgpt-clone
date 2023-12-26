import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.completions.create({
  model: "gpt-3.5-turbo-instruct",
  prompt: "Me diga um exemplo de nome legal  para uma aula sobre node.js com chatGPT",
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});