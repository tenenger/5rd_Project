import styled from 'styled-components';

export const SLoadingModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes partAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > .spinner {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
    > .part {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
      > div {
        box-sizing: border-box !important;
        position: absolute;
        width: 112px;
        height: 112px;
        top: 44px;
        left: 44px;
        border-radius: 50%;
        border: 12px solid #000;
        border-color: #fe718d transparent #fe718d transparent;
        animation: partAnimation 1.5s linear infinite;
        box-sizing: content-box;

        &:nth-child(2) {
          border-color: transparent;
          > div {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: rotate(45deg);
            &:before,
            &:after {
              content: '';
              display: block;
              position: absolute;
              width: 12px;
              height: 12px;
              top: -12px;
              left: 38px;
              background: #fe718d;
              border-radius: 50%;
              box-shadow: 0 100px 0 0 #fe718d;
            }
            &:after {
              left: -12px;
              top: 38px;
              box-shadow: 100px 0 0 0 #fe718d;
            }
          }
        }
      }
    }
  }
`;
