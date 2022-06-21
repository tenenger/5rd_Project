import React, { useEffect, useState } from "react";
import { SFavorite } from "./Favorite.style";
import LoadingModal from "components/Loading/LoadingModal";
import Location from "components/Location/Location";

const likeList = [
  { sido: "서울", station: ["동대문구", "서초구"] },
  { sido: "대구", station: ["본동"] },
];

const Favorite = () => {
  return (
    <SFavorite>
      {likeList.map((item) => (
        <Location
          key={item.sido}
          loadingModal={<LoadingModal />}
          sidoList={[item.sido]}
          likeSido={item.sido}
          station={item.station}
          favorite
        />
      ))}
    </SFavorite>
  );
};

export default Favorite;
