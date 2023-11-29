import { connectDB } from "@/util/database";
import { MongoClient, Db } from "mongodb";

export default async function Home() {
  const client: MongoClient = (await connectDB) as MongoClient; // 'as MongoClient'를 사용하여 타입 명시
  const db: Db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);

  return <main></main>;
}
