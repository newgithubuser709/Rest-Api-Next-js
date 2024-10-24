"use client";

import { useState, Suspense, lazy } from "react";

// Component
import Navbar from "./Components/Navbar/page";
const SomeWines = lazy(() => import("./Components/FiveWines/page"));

// Styles
import style from "./page.module.css";

export default function Home() {
  const [wineState, setwineState] = useState(false);

  return (
    <>
      <Navbar />

      <section className={`container ${style.section}`}>
        <h1 className={style.sect_h1}> we offer branded wines </h1>

        <p className={style.sect_p}>
          RVW is a leader in Telecommunications Engineering, Electric Power
          Engineering, Architectural Services, and Telecommunications
          Billing.Our corporate headquarters are in Columbus, Nebraska, and we
          have more than 95 employees who serve clients throughout the
          country.We’ ve been in business since 1938, and owe our success to
          our: Service Our organizational chart is simple: the client is in the
          center, and serving the best needs of the client is everybody’ s
          job.We believe the key to success is building project teams that work
          together to produce high quality results, on time, and within budget.
        </p>

        <p className={style.sect_p}>
          We believe the key to success is building project teams that work
          together to produce high quality results, on time, and within
          budget.Stability Since 1938, RVW’ s management team has made a long -
          term commitment to the company, developing goals and principles that
          lead us well into the future and help ensure our continued success.
        </p>

        <button className={style.button} onClick={() => setwineState(true)}>
          see some wines
        </button>

        {wineState && (
          <Suspense>
            <SomeWines />
          </Suspense>
        )}
      </section>
    </>
  );
}
