import { connectDB } from "@/util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res.status(500).json("제목을 입력해주세요");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
