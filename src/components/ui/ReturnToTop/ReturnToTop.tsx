import { ChevronUp } from "@/components/icons";
import { useEffect, useState } from "react";
import styles from "./ReturnToTop.module.css";

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.iconWrapper}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.iconBtnWrapper}>
          <ChevronUp className={styles.iconStyles} />
        </button>
      )}
    </div>
  );
}
