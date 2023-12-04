import { connectDB } from "@/util/database";
import { Db, ObjectId } from "mongodb";

export default async function Detail(props: any) {
  const db: Db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result?.title}</h4>
      <h4>{result?.content}</h4>
    </div>
  );
}
