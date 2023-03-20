import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <button className="btn btn-sm btn-secondaryr">click me!</button>
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
