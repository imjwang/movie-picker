import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Avatar from "./Avatar";

const Menu = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="dropdown mx-2">
      <label tabIndex={0} className="hover:cursor-pointer">
        {user ? (
          <Avatar user={user} />
        ) : (
          <a href="/api/auth/login">
            <span className="material-symbols-outlined">login</span>
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
