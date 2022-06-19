import React from "react";
import { Link } from "react-router-dom";
import { SNav } from "./Nav.style";

export const Nav = () => {
  return (
    <SNav>
      <Link to="/">메인화면</Link>
      <Link to="/favorite">즐겨찾기</Link>
      <Link to="/profile">프로필</Link>
    </SNav>
  );
};
