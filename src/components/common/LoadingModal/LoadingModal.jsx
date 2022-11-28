import React from "react";
import { SLoadingModalBox } from "./LoadingModal.style";

const LoadingModal = () => {
  return (
    <SLoadingModalBox>
      <div className="spinner">
        <div className="part">
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </SLoadingModalBox>
  );
};
export default LoadingModal;
