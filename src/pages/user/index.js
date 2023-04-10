import { supabase } from "@/lib/supabaseClient";
import NavBar from "@/components/NavBar";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/context/globalStore";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Modal from "@/components/Modal";

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

  if (user === undefined) {
    return <div>loading...</div>;
  }

  return (
    <>
      {showModal && <Modal />}
      <NavBar />
      <div className="prose">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "SET_MODAL", payload: true })}
        >
          click to open
        </button>
        <h3>{user.name}</h3>
        {userData.map((i) => (
          <p key={i.id}>{i.name}</p>
        ))}
      </div>
    </>
  );
};
export default AboutPage;
