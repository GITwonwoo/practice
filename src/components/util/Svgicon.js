import React from "react";
import { MainQuickmenu } from "../common/_main_navi";
import styles from "./Svgicon.module.scss";

export default function Svgicon({ id }) {
  const items = [
    { to: "subscription", text: "정기배송", w: "50.8" },
    { to: "event", text: "이벤트", w: "40.2" },
    { to: "coupon", text: "쿠폰", w: "42.7" },
    { to: "specialEvent", text: "기획전", w: "36.2" },
    { to: "recipe", text: "레시피", w: "45.4" },
    { to: "store", text: "매장찾기", w: "36.8" },
    { to: "gift", text: "선물하기", w: "42" },
    { to: "mealSalad", text: "밀키트" },
    { to: "lunchBox", text: "밥 / 면", w: "48.1" },
    { to: "beverage", text: "음료", w: "29.8" },
    { to: "seafood", text: "해조류", w: "37.7" },
    { to: "view", text: "전체보기", w: "29.4" },
    { to: "beauty", text: "이너뷰티", w: "31.2", hiddenOnSmall: true },
    { to: "newitem", text: "신상품", w: "47", hiddenOnSmall: true },
    { to: "sale", text: "할인", w: "34", hiddenOnSmall: true },
  ];

  return (
    <div className="mw" id={id}>
      <ul
        className={`d-flex align-items-start justify-content-between ${styles.svgList}`}
      >
        {items.map(({ to, text, w, hiddenOnSmall }) => (
          <li
          key={to}
          className={`d-flex flex-column align-items-center gap-1 ${styles.svgItem} ${
            text === "전체보기" ? "d-lg-none d-lg-flex" : ""
          } ${hiddenOnSmall ? "d-none" : ""}`}
        >
            <MainQuickmenu to={to} w={w} className="mb-2"></MainQuickmenu>
            <span className="kr-body pb-3">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}