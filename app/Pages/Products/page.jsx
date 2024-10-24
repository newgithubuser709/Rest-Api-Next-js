"use client";
import React, { useEffect } from "react";
import Head from "next/head";

// components
import Wines from "../../Components/Wines/page";
import Navbar from "../../Components/Navbar/page";

// Adding style
import style from "./style.module.css";

export default function Page() {
  useEffect(() => {
    document.title = "Dynamic Page Title";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "This is a dynamic description");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "This is a dynamic description";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="author" content="haseeb" />
        <meta
          name="description"
          content="next js practicing api routes and authentication"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <Navbar />

      <section className={style.section}>
        <h1 className={style.h1}>
          To get the specific wine fully detailed follow steps
        </h1>
        <p className={style.p}>http://domain.com/Pages/Products/1</p>
        <p className={style.p}>http://domain.com/Pages/Products/718</p>
        <p className={style.p}>Search the wine between 1 - 718</p>
        <a href="/Pages/Products/1" className={style.a}>
          See the first wine →
        </a>
      </section>

      <section className={style.section}>
        <h1 className={style.h1}>ALL WINES</h1>
      </section>

      <Wines />
    </>
  );
}
