import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user, error, isLoading } = useUser();
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

  if (!t || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Sheet prose>
        <div className="max-w-prose mx-auto lg:text-lg">
          <p className="text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            {t.genre}
          </p>
          <h1 className="mt-2 text-5xl text-center leading-8 font-extrabold tracking-tight text-inherit sm:text-6xl">
            {t.name}
          </h1>
          {user && <button className="btn btn-primary">Click Me</button>}
        </div>
      </Sheet>
    </>
  );
};

export default MoviePage;
