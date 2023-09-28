import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const { data: session } = useSession();
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  if (!session) {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        </Head>
        <header className={styles.header}>
          <div className={styles.header_title}>
            <h1 className={styles.title}>Tasting Note</h1>
          </div>
          <div className={styles.header_button}>
            <button
              className={
                isActive
                  ? `${styles["button"]} ${styles["active"]}`
                  : styles["button"]
              }
              onClick={handleButtonClick}
            >
              <span className={styles.button_item}></span>
              <span className={styles.button_item}></span>
              <span className={styles.button_item}></span>
            </button>
          </div>
          <nav
            className={
              isActive
                ? `${styles["menu"]} ${styles["active"]}`
                : styles["menu"]
            }
          >
            <ul className={styles.menu_list}>
              <li className={styles.menu_item} onClick={() => signIn()}>
                ログイン
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        </Head>
        <header className={styles.header}>
          <div className={styles.header_title}>
            <h1 className={styles.title}>Tasting Note</h1>
          </div>
          <div className={styles.header_button}>
            <button
              className={
                isActive
                  ? `${styles["button"]} ${styles["active"]}`
                  : styles["button"]
              }
              onClick={handleButtonClick}
            >
              <span className={styles.button_item}></span>
              <span className={styles.button_item}></span>
              <span className={styles.button_item}></span>
            </button>
          </div>
          <nav
            className={
              isActive
                ? `${styles["menu"]} ${styles["active"]}`
                : styles["menu"]
            }
          >
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <Link href={"/beans/selection"}>SELECT</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href={"/beans/create"}>NEW</Link>
              </li>
              {/* <li className={styles.menu_item}>
                <Link href={"/"}>ログアウト</Link>
              </li> */}
              <li
                className={styles.menu_item}
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                ログアウト
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
