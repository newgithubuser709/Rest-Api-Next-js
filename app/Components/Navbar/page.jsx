import Link from "next/link";

// styles
import style from "./nav.module.css";

export default function page() {
  return (
    <>
      <header>
        <nav className={style.nav}>
          <ul className={style.nav_ul}>
            <li className={style.ul_li}>
              <Link href="/">Home</Link>
            </li>
            <li className={style.ul_li}>
              <Link href="/Pages/About">About</Link>
            </li>
            <li className={style.ul_li}>
              <Link href="/Pages/Contact">Contact</Link>
            </li>
            <li className={style.ul_li}>
              <Link href="/Pages/Products">All-Wines</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
