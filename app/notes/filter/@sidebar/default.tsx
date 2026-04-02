import css from "@/app/notes/filter/@sidebar/SidebarNotes.module.css";

import Link from "next/link";
import { noteTags } from "@/types/note";

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {noteTags.map((noteTag) => (
        <li className={css.menuItem} key={noteTag}>
          <Link href={`/notes/filter/${noteTag}`} className={css.menuLink}>
            {noteTag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
