"use client";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ navLinks }) => {
  const { active } = styles;
  const pathname = usePathname();
  console.log(pathname, navLinks[0].href);

  return (
    <>
      {navLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.label} className={isActive ? `${active}` : " "}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        );
      })}
    </>
  );
};

export { Navigation };
