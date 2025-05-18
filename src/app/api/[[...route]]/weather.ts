import { Hono } from "hono";

export const app = new Hono().get("/", async (c) => {
  return c.json({ message: `今日の天気は晴れだよ。` });
});
