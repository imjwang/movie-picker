import Link from "next/link";

const Menu = () => {
  return (
    <div className="dropdown dropdown-hover w-16 h-16 flex">
      <span className="material-symbols-outlined place-self-center">menu</span>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href="/supa">supa</Link>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
