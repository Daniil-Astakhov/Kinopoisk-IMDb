import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "movies", href: "/allMovies" },
  { label: "best", href: "/best" },
  { label: "recomended", href: "/recomended" },
  { label: "reiting", href: "/reiting" },
  { label: "Выйти", href: "/" },
];

const Header = () => {
  const { header } = styles;
  return (
    <header className={header}>
      <ul className="flex w-auto gap-10 justify-around">
        <Navigation navLinks={navItems} />
      </ul>
    </header>
  );
};

export default Header;
