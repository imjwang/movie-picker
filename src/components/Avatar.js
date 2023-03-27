import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Avatar() {
  const { user, error, isLoading } = useUser();
  console.log(user?.sub);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user?.picture);

  return (
    user && (
      <div className="avatar">
        <div className="w-12 rounded-full ring-1 ring-lime-200 hover:ring-teal-200 hover:ring-2">
          <Image width={100} height={100} alt={user.name} src={user.picture} />
        </div>
      </div>
      // <h2>{user.name}</h2>
      // <p>{user.email}</p>
    )
  );
}
