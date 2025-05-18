import { hello, weather } from "./client";

export default async function Home() {
  const res = await hello({ json: { name: "John" } });
  const data = await res.json();
  console.log(data.message);
  const res2 = await weather();
  const data2 = await res2.json();
  console.log(data2.message);
  return (
    <div>
      はろー
    </div>
  );
}
