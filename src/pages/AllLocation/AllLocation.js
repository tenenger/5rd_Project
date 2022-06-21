import Location from "components/Location/Location";
import LoadingModal from "components/Loading/LoadingModal";
import { SAllLocationBox } from "./AllLocation.style";

const AllLocation = () => {
  return (
    <SAllLocationBox>
      <Location loadingModal={<LoadingModal />} />
    </SAllLocationBox>
  );
};

export default AllLocation;
