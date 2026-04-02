import css from "@/app/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.notWrap}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
