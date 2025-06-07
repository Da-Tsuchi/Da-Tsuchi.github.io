import React, { useEffect, useState, useRef } from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import styles from "./TypingAnimation.module.css"; // .typing-animation-container 等を含む

export default function TypingAnimation() {
  const full = "  Hiroto Tsuchida's Page";
  const [txt, setTxt] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTxt(p => p + full.charAt(idx.current));
      idx.current += 1;
      if (idx.current === full.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* 粒子レイヤー ― 常時表示だが zIndex 0 なので背面に */}
      <BackgroundAnimation />

      {/* ヒーローセクション ― 通常フロー。打ち終われば透明化 */}
      <section
        className={`${styles["typing-animation-container"]} ${
          done ? styles.done : ""
        }`}
      >
        <strong>
          {txt}
          {!done && <span className={styles.cursor} />}
        </strong>
      </section>
    </>
  );
}
