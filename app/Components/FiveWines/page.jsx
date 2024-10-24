"use client";

import { useEffect, useState } from "react";

// style
import style from "./page.module.css";

export default function page() {
  const [wines, setwines] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await fetch(`http://localhost:3000/Api/wines`);
      const data = await res.json();

      const slicedData = data.slice(0, 5);
      setwines(slicedData);
    }
    getdata();
  }, []);

  if (!wines)
    return (
      <>
        <p>No wine found</p>
        <p>search between 1 - 718</p>
      </>
    );

  return (
    <>
      <section className={style.section}>
        {wines.map((wine) => (
          <div key={wine.id}>
            <img src={wine.image} alt={wine.winery} />
            <h1>{wine.winery}</h1>
            <p>Location: {wine.location}</p>
            <p>ID: {wine.id}</p>
          </div>
        ))}
      </section>
    </>
  );
}
