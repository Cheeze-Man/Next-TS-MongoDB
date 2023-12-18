import { connectDB } from "@/util/database";
import { Db, ObjectId } from "mongodb";

export default async function Edit(props: any) {
  const db: Db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-5">
      <h4 className="my-5 font-bold">수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input
          className="w-full mb-4 p-2.5 border border-gray-300 rounded"
          name="title"
          placeholder="Title"
          type="text"
          defaultValue={result?.title}
        />
        <input
          className="w-full mb-4 p-2.5 border border-gray-300 rounded"
          name="content"
          placeholder="Content"
          type="text"
          defaultValue={result?.content}
        />
        <input className="hidden" name="_id" value={result?._id.toString()} />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2.5 px-4 rounded"
          type="submit"
        >
          POST
        </button>
      </form>
    </div>
  );
}
