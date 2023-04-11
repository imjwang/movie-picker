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
      {showModal && <Modal />}
      <NavBar />
      <Sheet>
        <button
          className="btn btn-primary w-32"
          onClick={() => dispatch({ type: "SET_MODAL", payload: true })}
        >
          click to open
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
