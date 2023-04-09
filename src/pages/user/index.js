import { supabase } from "@/lib/supabaseClient";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

const AboutPage = ({ user }) => {
  const [userData, setUserData] = useState([]);

  console.log(user);
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
      <NavBar />
      <div className="prose">
        <h3>{user.name}</h3>
        {userData.map((i) => (
          <p key={i.id}>{i.name}</p>
        ))}
      </div>
    </>
  );
};
export default AboutPage;
