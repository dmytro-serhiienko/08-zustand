import css from "./Home.module.css";
import { RiQuillPenAiLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>
          <RiQuillPenAiLine />
          NoteHub — Where Your Ideas Live
        </h1>
        <p className={css.description}>
          Stop losing your best thoughts to scattered notes. NoteHub is a
          digital sanctuary designed to turn mental clutter into clear
          structure. We offer a clean, distraction-free environment focused
          entirely on your writing. Whether itʼs a simple to-do list or your
          next big story, NoteHub makes organizing effortless.
        </p>
        <p className={css.description}>
          Focus on creating. We’ll take care of the rest.
        </p>
      </div>
    </main>
  );
}
