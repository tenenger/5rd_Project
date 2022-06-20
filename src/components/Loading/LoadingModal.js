import React from "react";
import { SLoadingModalBox } from "./LoadingModal.style";

const LoadingModal = () => {
  return (
    <SLoadingModalBox>
      <div class="spinner">
        <div class="part">
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
