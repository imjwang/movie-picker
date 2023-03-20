import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import Sheet from "@/components/Sheet";
import NavBar from "@/components/NavBar";

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
      <NavBar />
      <Sheet>
        <table className="table w-full">
          <thead>
            <tr>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {t.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Sheet>
    </>
  );
};

export default Page;
