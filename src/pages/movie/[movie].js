import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";

export async function getStaticPaths() {
  const res = await supabase.from("movies").select();
  const paths = res.data.map((i) => ({
    params: { movie: String(i.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await supabase.from("movies").select().eq("id", params.movie);
  return {
    props: {
      data: res.data[0], // Return the first object in the array
    },
  };
}

const MoviePage = ({ data }) => {
  const router = useRouter();
  const { movie } = router.query;
  const [t, setT] = useState(data);

  useEffect(() => {
    const subscription = supabase
      .channel("any")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "movies",
          filter: `id=eq.${movie}`,
        },
        (payload) => {
          console.log(payload);
          setT(payload.new);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [movie]);

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Sheet>
        <div className="flex flex-col items-center justify-center">fasdf</div>
        <p>{t.name}</p>
      </Sheet>
    </>
  );
};

export default MoviePage;
