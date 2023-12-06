"use client";

import { useRouter } from "next/navigation";

export default function DetailLink(props: any) {
  const router = useRouter();
  const { post } = props;

  return (
    <div
      onClick={() => router.push(`/detail/${post._id}`)}
      className="bg-white rounded-lg p-5 mb-1 shadow-md cursor-pointer"
      key={String(post._id)}
    >
      <h4 className="text-black text-2xl font-bold m-0">{post.title}</h4>
      <p className="text-gray-500 my-1.5">{post.content}</p>
    </div>
  );
}
