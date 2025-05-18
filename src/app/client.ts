import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";
import { helloRoute, weatherRoute } from "./api/[[...route]]/route";

const baseUrl = "http://localhost:3000";

const helloClient = hc<typeof helloRoute>(baseUrl);
export const hello = helloClient.api.hello.$post;
export type HelloResType = InferResponseType<typeof hello, 200>;
export type HelloReqErrType = InferResponseType<typeof hello, 400>;

const weatherClient = hc<typeof weatherRoute>(baseUrl);
export const weather = weatherClient.api.weather.$get;
export type WeatherResType = InferResponseType<typeof weather, 200>;
