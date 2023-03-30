import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <Menu />
      </div>
      <div className="navbar-center">
        <article className="prose prose-2xl font-bold">movies</article>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
