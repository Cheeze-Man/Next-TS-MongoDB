"use client";

import { useRouter } from "next/navigation";

export default function DetailLink(props: any) {
  const router = useRouter();
  const { post } = props;

  return (
    <div
      className="bg-white rounded-lg p-5 mb-1 shadow-md"
      key={String(post._id)}
    >
      <h4
        onClick={() => router.push(`/detail/${post._id}`)}
        className="text-black text-2xl font-bold m-0 cursor-pointer"
      >
        {post.title}
      </h4>
      <p className="text-gray-500 my-1.5">{post.content}</p>
      <span
        onClick={() => {
          fetch("/api/test", { method: "DELETE" }).then(() => {});
        }}
        className="text-gray-500 font-bold my-1.5 cursor-pointer"
      >
        삭제
      </span>
    </div>
  );
}
