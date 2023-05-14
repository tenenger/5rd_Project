import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '../icons';

export const SLayout = styled.div`
  position: relative;
  width: 100%;
`;

export const SContainer = styled.div`
  max-width: 1200px;
  height: 480px;
  margin: 0 auto;
  overflow: hidden;
`;

export const SCarousel = styled.div`
  display: flex;
  max-width: 1200px;
  height: 480px;
  margin: 0 auto;

  transform: translate3d(${props => props.idx * -100}%, 0, 0);
  transition: transform ${props => `${props.transition / 1000}s`} ease;
  user-select: none;
`;

export const SArrow = styled.svg`
  position: absolute;
  top: calc(50% - ${props => parseInt(props.size) / 2}rem);
  cursor: pointer;

  color: ${props => props.theme.gray[5]};

  :hover {
    color: ${props => props.theme.gray[3]};
  }
`;

export const SArrowLeft = styled(ArrowLeft)`
  left: 0;
`;

export const SArrowRight = styled(ArrowRight)`
  right: 0;
`;
