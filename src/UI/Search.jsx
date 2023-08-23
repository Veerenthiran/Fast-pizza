import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!search) return alert("Please enter an order number");
    e.preventDefault();
    navigate(`/order/${search}`);
    setSearch("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Seach Order #.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      className="rounded-full px-4 py-2 text-sm placeholder:text-stone-400 bg-yellow-100 w-28 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:outline-none focus:ring-offset-2"
      />
    </form>
  );
}

export default Search;
