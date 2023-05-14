import styled from 'styled-components';

import { Button } from '../components/common';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants';

const SLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 600px;
  margin: 0 auto;
`;

const STitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding-bottom: 40px;
`;

const JoinComplete = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <SLayout>
      <STitle>회원가입이 완료되었습니다 😊</STitle>
      <Button color="white" bgColor="blue.6" handleClick={handleClick}>
        로그인 하러 가기
      </Button>
    </SLayout>
  );
};

export default JoinComplete;
