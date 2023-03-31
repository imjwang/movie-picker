import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Avatar from "./Avatar";
import { useState, useEffect } from "react";
import generateGreeting from "@/lib/randomGreeting";

const Menu = () => {
  const [greeting, setGreeting] = useState("");
  const { user, error, isLoading } = useUser();

  const handleGreeting = () => {
    setGreeting(generateGreeting());
  };

  useEffect(() => {
    const initGreeting = generateGreeting();
    setGreeting(initGreeting);
  }, []);

  return (
    <div className="dropdown mx-2">
      <label tabIndex={0} className="hover:cursor-pointer">
        {user ? (
          <Avatar user={user} />
        ) : (
          <a href="/api/auth/login">
            <div
              className="tooltip tooltip-right tooltip-info hover:bg-secondary-focus rounded-full w-10 h-10 grid grid-cols-1 grid-rows-1"
              data-tip={greeting}
              key={greeting}
              onMouseOut={handleGreeting}
            >
              <span className="material-symbols-outlined self-center">
                login
              </span>
            </div>
          </a>
        )}
      </label>
      {user ? (
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a href="/api/auth/logout">Log Out</a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menu;
