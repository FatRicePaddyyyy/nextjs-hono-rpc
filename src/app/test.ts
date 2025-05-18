import { hello } from "./client";

const res = await hello({ json: { name: "John" } });

if (res.ok) {
  const data = await res.json();
  console.log(data);
} else {
  console.log("Error");
}