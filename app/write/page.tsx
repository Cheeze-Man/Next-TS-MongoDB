export default function Write() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/test" method="GET">
        <button type="submit">GET</button>
      </form>
      <form action="/api/test" method="POST">
        <button type="submit">POST</button>
      </form>
    </div>
  );
}
