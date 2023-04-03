import Head from "next/head";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@auth0/nextjs-auth0/client";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";
import Review from "@/components/Review";
import Spinner from "@/components/Spinner";
import AddForm from "@/components/AddForm";

export default function Home() {
  const { user, error, isLoading } = useUser();

  const handleMovieAdd = async () => {
    const { error } = await supabase.from("movies").insert({
      name: "Jeff's Movie",
      genre: "VIOLENCE",
      director: "Jeff Jeffers",
      user: user.sub,
    });
    console.log(error);
  };
  const handleTest = async () => {
    const { error } = await supabase.from("users").insert({
      id: user.sub,
      name: user.name,
    });
    console.log(error);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Sheet>
          <Review />
        </Sheet>
        <Sheet>
          <AddForm />
        </Sheet>
      </main>
    </>
  );
}
