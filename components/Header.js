import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

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
            isActive ? `${styles["menu"]} ${styles["active"]}` : styles["menu"]
          }
        >
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              {/* <div className={styles.keyboard}>
              <div className={styles.keyboard_top}>Top</div>
              <div className={styles.keyboard_front}></div>
              <div className={styles.keyboard_left}></div>
            </div> */}
              <Link href={"/beans/selection"}>SELECT</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href={"/beans/create"}>NEW</Link>
            </li>
            {/* <li className={styles.menu_item}>
              <Link href={"/user/register"}>登録</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href={"/user/login"}>ログイン</Link>
            </li> */}
            {/* <li className={styles.menu_item}>
            <Link href={"/"}>一覧ページ</Link>
          </li>
          <li className={styles.menu_item}>MY PAGE</li> */}
          </ul>
          {/* <ul className={styles.menu_list}>
          <li className={styles.menu_item}>New</li>
          <li className={styles.menu_item}>Delete</li>
          <li className={styles.menu_item}>保存</li>
          <li className={styles.menu_item}>管理</li>
          <li className={styles.menu_item}>編集</li>
        </ul> */}
        </nav>
      </header>
    </>
  );
}
