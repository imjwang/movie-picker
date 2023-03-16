import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

const Page = () => {
  const [t, setT] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("users").select();
      setT(data);
    };
    getData();
  }, []);

  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "users" },
      (payload) => {
        setT([...t, payload.new]);
      }
    )
    .subscribe();

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {t.map((i) => (
        <ul key={i.id}>
          <li>{i.name}</li>
        </ul>
      ))}
    </>
  );
};

export default Page;
