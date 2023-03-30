import Image from "next/image";

export default function Avatar({ user }) {
  return (
    user && (
      <div className="avatar">
        <div className="w-10 rounded-full ring-1 ring-offset-4 ring-offset-neutral ring-lime-200 hover:ring-teal-200 hover:ring-2">
          <Image width={100} height={100} alt={user.name} src={user.picture} />
        </div>
      </div>
    )
  );
}
