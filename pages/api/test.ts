import { connectDB } from "@/util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "GET") {
    const db = (await connectDB).db("forum");
    let list = await db.collection("post").find().toArray();
    res.status(200).json(list);
  }
  if (req.method == "POST") {
    return res.status(200).json({ message: "your request = post" });
  }
}
