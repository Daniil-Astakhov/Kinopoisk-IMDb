import Link from "next/link";

import "../../../app/globals.scss";
import "./Header.scss";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center justify-center p-2 header">
      <ul className="flex w-auto gap-10 justify-around">
        <li>Фильмы</li>
        <li>Лучшие</li>
        <li>
          <Link href="../../page2">Рекомендации</Link>
        </li>
        <li>Просмотрено</li>
        <li>Мой список</li>
      </ul>
    </header>
  );
};

export default Header;
