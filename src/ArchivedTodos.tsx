import { Link } from "react-router-dom";

function ArchivedTodos() {
  return (
    <>
      <h1>HEJ</h1>
      <Link to="/">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          Tillbaka
        </button>
      </Link>
    </>
  );
}

export default ArchivedTodos;
