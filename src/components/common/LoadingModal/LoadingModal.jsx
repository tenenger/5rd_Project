import { SLoadingModalBox } from './LoadingModal.style';

const LoadingModal = () => (
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
export default LoadingModal;
