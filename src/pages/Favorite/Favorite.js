import LoadingModal from "components/Loading/LoadingModal";
import Location from "components/Location/Location";

const DUMMY = [
  { sido: "서울", station: ["동대문구", "서초구"] },
  { sido: "대구", station: ["본동"] },
];

const Favorite = () => {
  return (
    <div>
      {DUMMY.map((data) => (
        <Location
          key={data.sido}
          loadingModal={<LoadingModal />}
          sidoList={[data.sido]}
          likeSido={data.sido}
          station={data.station}
          favorite
        />
      ))}
    </div>
  );
};

export default Favorite;
