import {
  faLocationDot,
  faMapLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SNav } from "./Nav.style";

export const Nav = () => {
  const { pathname } = useLocation();
  let tab;
  switch (pathname) {
    case "/":
      tab = 1;
      break;
    case "/all":
      tab = 2;
      break;
    case "/favorite":
      tab = 3;
      break;
    default:
      tab = 0;
      break;
  }
  return (
    <SNav tab={tab}>
      <Link to="/">
        <FontAwesomeIcon icon={faLocationDot} />
        <h3>내 지역보기</h3>
      </Link>
      <Link to="/all">
        <FontAwesomeIcon icon={faMapLocationDot} />
        <h3>전체 시도보기</h3>
      </Link>
      <Link to="/favorite">
        <FontAwesomeIcon icon={faStar} />
        <h3>즐겨찾기</h3>
      </Link>
    </SNav>
  );
};
