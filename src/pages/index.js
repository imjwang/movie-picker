import Head from "next/head";
import Profile from "@/components/Avatar";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@auth0/nextjs-auth0/client";
import NavBar from "@/components/NavBar";
import Sheet from "@/components/Sheet";
import Review from "@/components/Review";
import Spinner from "@/components/Spinner";

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
        <Review movie="Parasite" />
        <div className="bg-base-200 h-12 py-1 px-10 w-1/2 self-center">
          <Spinner color="cyan-500" />
        </div>
        <Sheet>
          <a className="btn btn-primary" href="/api/auth/login">
            Login
          </a>
          <a className="btn btn-primary" href="/api/auth/logout">
            Logout
          </a>
        </Sheet>
      </main>
    </>
  );
}
