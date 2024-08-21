"use client";
import { useEffect, useState } from "react";
import "../.././assets/styles/components/ScrollToTop/ScrollToTop.scss";

export const ScrollToTop = () => {
  const [ScrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollY(document.documentElement.scrollTop)
    );

    return () => {
      window.addEventListener("scroll", () =>
        setScrollY(document.documentElement.scrollTop)
      );
    };
  }, [ScrollY]);

  return (
    <div
      onClick={() => {
        ScrollY > 100
          ? window.scrollTo({
              behavior: "smooth",
              left: 0,
              top: 0,
            })
          : window.scrollTo({
              behavior: "smooth",
              left: 0,
              top: document.body.scrollHeight,
            });
      }}
      className={`ScrollToTop ${
        ScrollY > 100 ?  "ScrollToTop_Down" : "ScrollToTop_Up"
      }`}
    >
      <svg
      className="text-[42px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "1em" }}
        viewBox="0 0 5 5"
      >
        <circle
          style={{
            fill: "#000000",
            fillOpacity: 0.979592,
            stroke: "#000000",
            strokeWidth: 0.0360134,
          }}
          cx="2.5"
          cy="2.5"
          r="2.4819932"
        />
        <path
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: "0.0362033px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="M 1.5549134,2.3235735 2.3382928,3.0793488 2.3251167,1.2888531 2.6868601,1.2983891 2.7036294,3.0698122 3.4594588,2.3140371 3.7385519,2.5882142 2.5167683,3.7874409 1.2831558,2.5804655 Z"
        />
      </svg>
    </div>
  );
};
