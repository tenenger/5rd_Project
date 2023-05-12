import styled from 'styled-components';
import { CheckBoxSquareIcon } from '../components/common/icons';
import { useState } from 'react';
import { Line, Button } from '../components/common';
import { localStorageKey } from '../constants/localStorageKey';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const SLayout = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const STitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding-bottom: 40px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const SInput = styled.input`
  font-size: 2rem;
  padding: 10px 5px;
  border: 1px solid #ced4da;
`;

const SLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;

  > input {
    display: none;
  }
`;

const Login = () => {
  const [isCheck, setCheck] = useState(getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) ? true : false);

  const handleLoginSubmit = e => {
    e.preventDefault();

    console.log(isCheck);

    if (isCheck) setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, e.target.email.value);
    else setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, '');
  };

  return (
    <SLayout>
      <STitle>로그인</STitle>
      <SForm onSubmit={handleLoginSubmit}>
        <SInput
          type="text"
          name="email"
          placeholder="이메일"
          defaultValue={getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) ?? ''}
        />
        <SInput type="password" name="password" placeholder="비밀번호" />
        <SLabel>
          <input type="checkbox" checked={isCheck} onChange={e => setCheck(e.target.checked)} />
          <CheckBoxSquareIcon size="2.3rem" color={isCheck ? '#228be6' : '#e9ecef'} />
          <span>이메일 기억하기</span>
        </SLabel>
        <Button color="blue">로그인</Button>
        <Line />
        <Button isBorder>회원가입</Button>
      </SForm>
    </SLayout>
  );
};

export default Login;
