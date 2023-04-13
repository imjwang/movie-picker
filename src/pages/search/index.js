import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Sheet from "@/components/Sheet";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getUsername = async () => {
      const { data } = await supabase
        .from("users")
        .select()
        .ilike("name", `%${query}%`);
      setResults(data);
    };

    setTimeout(() => {
      getUsername();
    }, 500);
  }, [query]);

  return (
    <Sheet prose>
      <input
        className="input input-primary"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </Sheet>
  );
};

export default SearchPage;
