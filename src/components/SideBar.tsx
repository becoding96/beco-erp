import React from "react";
import styles from "./SideBar.module.scss";
import { FaHome } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { base } from "../App";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickItem =
    (ad: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      navigate(`/${ad}`);
    };

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <a onClick={onClickItem(base)}>
          <FaHome size="1.5rem" />
        </a>
        <ul>
          <li
            className={
              location.pathname === `/${base}/im` ? styles.focus : undefined
            }
          >
            <a onClick={onClickItem(`${base}/im`)}>자재/품목 등록</a>
          </li>
          <li
            className={
              location.pathname === `/${base}/wh` ? styles.focus : undefined
            }
          >
            <a onClick={onClickItem(`${base}/wh`)}>자재 입고</a>
          </li>
          <li
            className={
              location.pathname === `/${base}/wr` ? styles.focus : undefined
            }
          >
            <a onClick={onClickItem(`${base}/wr`)}>생산 실적</a>
          </li>
          <li
            className={
              location.pathname === `/${base}/iv` ? styles.focus : undefined
            }
          >
            <a onClick={onClickItem(`${base}/iv`)}>재고 조회</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;