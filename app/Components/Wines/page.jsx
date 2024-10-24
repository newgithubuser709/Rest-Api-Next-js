"use client";

import { useEffect, useState } from "react";

// style
import style from "./page.module.css";

export default function page() {
  const [wines, setwines] = useState([]);
  const [counter, setcounter] = useState(9);

  useEffect(() => {
    async function getdata() {
      const res = await fetch(`http://localhost:3000/Api/wines`);
      const data = await res.json();

      const slicedData = data.slice(0, counter);
      setwines(slicedData);
    }
    getdata();
  }, [counter]);

  return (
    <>
      <section className={style.section}>
        {wines.map((wine) => (
          <div key={wine.id}>
            <img src={wine.image} alt={wine.winery} />
            <h1>{wine.winery}</h1>
          </div>
        ))}
      </section>

      <div className={style.center}>
        <button
          className={style.button}
          onClick={() => setcounter(counter + 9)}
        >
          see more wines
        </button>
      </div>
    </>
  );
}
