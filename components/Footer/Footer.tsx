import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>
            Developer: <span className={css.nameD}>Dmytro Serhiienko</span>
          </p>
          <p>
            Contact me:
            <Link
              href="https://github.com/dmytro-serhiienko"
              target="_blank"
              className={css.github}
            >
              Git Hub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
