import { supabase } from "@/lib/supabaseClient";
import NavBar from "@/components/NavBar";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/context/globalStore";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Modal from "@/components/Modal";
import Sheet from "@/components/Sheet";

export const getServerSideProps = withPageAuthRequired();

const AboutPage = ({ user }) => {
  const [userData, setUserData] = useState([]);
  const {
    state: { showModal },
    dispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await supabase
        .from("movies")
        .select()
        .eq("user", user.sub);
      setUserData(data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .channel("any")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "movies",
          filter: `user=eq.${user.sub}`,
        },
        (payload) => {
          console.log(payload);
          setUserData([...userData, payload.new]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [userData, setUserData, user.sub]);

  if (user === undefined) {
    return <div>loading...</div>;
  }

  return (
    <>
      {showModal && (
        <Modal>
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Modal>
      )}
      <NavBar />
      <Sheet prose>
        <button
          className="btn btn-primary w-32"
          onClick={() => dispatch({ type: "SET_MODAL", payload: true })}
        >
          open modal
        </button>
        <h3>{user.name}</h3>
        <ul>
          {userData.map((i) => (
            <li key={i.id}>{i.name}</li>
          ))}
        </ul>
      </Sheet>
    </>
  );
};
export default AboutPage;

`My heart, my life 
Don't hide it from me 
Tell me what's in your heart 
What's in my heart,
 what's in my heart 
 I couldn't tell you
  All I want to say is 
  You're my love from now on 
  How can I forget all those things?
   I'm happy because of you 
   We haven't slept for so many nights 
   Now you're in my world I kept meeting you in my dreams 
   I couldn't say it out loud 
   That I can't live without you 
   I'll never leave you 
   I'm worried 
   Where am I lost? 
   In the path of love 
   Now I found you 
   I'm worried 
   Where am I lost? 
   In the path of love 
   Now I found you 
   My heart, my life Don't hide it from me 
   Tell me what's in your heart 
   What's in my heart, 
   what's in my heart 
   I know everything that you're hiding 
   You tell everyone except me 
   You show me the right with love
  I don't know why you're torturing me so much
  My heartbeats are impatient
      Maybe you don't even know 
      How much you mean to me 
      I understand your love 
      I kept meeting you in my dreams 
      I couldn't say it out loud 
      That I can't live without you 
      I'll never leave you I'm worried 
      Where am I lost?
       In the path of love 
       Now I found you I'm worried 
       Where am I lost? 
       In the path of love 
       Now I found you 
       I'm worried Where am I lost?
        In the path of love 
        Now I found you`;
