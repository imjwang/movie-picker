import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";

export async function getStaticPaths() {
  const res = await supabase.from("users_movies").select();
  const paths = res.data.map((i) => ({
    params: { user: i.user_id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await supabase
    .from("users_movies")
    .select()
    .eq("user_id", params.user);
  return {
    props: {
      data: res.data, // Return the first object in the array
    },
  };
}

const UserPage = ({ data }) => {
  const router = useRouter();
  const { user } = router.query;
  const [t, setT] = useState(data);
  const [userName, setUserName] = useState("");
  const [movieNames, setMovieNames] = useState([]);

  useEffect(() => {
    const getUsername = async () => {
      const { data } = await supabase.from("users").select().eq("id", user);
      setUserName(data[0].name);
    };
    getUsername();
  }, [user]);

  useEffect(() => {
    const fetchMovieNames = async () => {
      const { data } = await supabase
        .from("movies")
        .select("name")
        .in(
          "id",
          t.map((i) => i.movie_id)
        );
      setMovieNames(data);
    };
    fetchMovieNames();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .channel("any")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "movies",
          filter: `user=eq.${user}`,
        },
        (payload) => {
          console.log(payload);
          setMovieNames([...movieNames, payload.new.name]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Sheet prose>
        <h1>{userName}</h1>
        {movieNames.map((i) => (
          <div key={i.name}>
            <p>{i.name}</p>
          </div>
        ))}
      </Sheet>
    </>
  );
};

export default UserPage;
