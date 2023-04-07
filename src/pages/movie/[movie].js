import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";

const MoviePage = () => {
  const router = useRouter();
  const { movie } = router.query;

  const [t, setT] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("movies").select();
      setT(data);
    };
    getData();
  }, []);

  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "movies" },
      (payload) => {
        console.log(payload);
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

export default MoviePage;
