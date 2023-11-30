import { connectDB } from "@/util/database";
import { MongoClient, Db } from "mongodb";

export default async function Home() {
  const client: MongoClient = (await connectDB) as MongoClient;
  const db: Db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);

  return <main></main>;
}
