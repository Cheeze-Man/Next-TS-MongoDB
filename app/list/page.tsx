import { connectDB } from "@/util/database";
import { Db } from "mongodb";
import DetailLink from "./DetailLink";

export default async function List() {
  const db: Db = (await connectDB).db("forum");
  const list = await db.collection("post").find().toArray();

  return (
    <div className="bg-blue-100 p-10">
      {list.map((post) => (
        <DetailLink post={post} />
      ))}
    </div>
  );
}
