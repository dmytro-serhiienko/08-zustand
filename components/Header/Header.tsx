import Link from "next/link";
import css from "./Header.module.css";
import { RiQuillPenAiLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className={css.header}>
      <Link className={css.logo} href="/" aria-label="Home">
        <RiQuillPenAiLine className={css.icon} />
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link className={css.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="/notes/filter/all">
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
