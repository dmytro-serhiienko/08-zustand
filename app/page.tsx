"use client";
import css from "./Home.module.css";
import { RiQuillPenAiLine } from "react-icons/ri";

// FOR GSAP
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${css.description}`, {
        opacity: 0,
        y: 30,
        duration: 5,
        delay: 0.3,
        ease: "power2.out",
        stagger: 0.7,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <p className={css.decor}>HUB</p>
        <div className={css.upperWrap}>
          <h1 className={css.title}>
            <RiQuillPenAiLine className={css.icon} />
            NoteHub — Where Your Ideas Live
          </h1>
        </div>
        <div className={css.botWrap}>
          <span className={css.description}>Capture.</span>
          <span className={css.description}>Organize.</span>
          <span className={css.description}>Create.</span>

          {/* <p className={css.description}>Capture. Organize. Create.</p> */}
        </div>
      </div>
    </main>
  );
}
