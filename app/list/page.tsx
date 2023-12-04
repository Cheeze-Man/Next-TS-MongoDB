import { connectDB } from "@/util/database";
import { Db } from "mongodb";
import Link from "next/link";

export default async function List() {
  const db: Db = (await connectDB).db("forum");
  const list = await db.collection("post").find().toArray();

  return (
    <div className="bg-blue-100 p-10">
      {list.map((post) => (
        <Link href={`/detail/${String(post._id)}`}>
          <div
            className="bg-white rounded-lg p-5 mb-1 shadow-md"
            key={String(post._id)}
          >
            <h4 className="text-black text-2xl font-bold m-0">{post.title}</h4>
            <p className="text-gray-500 my-1.5">{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
