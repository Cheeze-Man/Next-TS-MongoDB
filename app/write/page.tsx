export default function Write() {
  return (
    <div className="p-5">
      <h4 className="my-5 font-bold">글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input
          className="w-full mb-4 p-2.5 border border-gray-300 rounded"
          name="title"
          placeholder="Title"
          type="text"
        />
        <input
          className="w-full mb-4 p-2.5 border border-gray-300 rounded"
          name="content"
          placeholder="Content"
          type="text"
        />
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
