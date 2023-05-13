import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { CheckBoxSquareIcon } from '../components/common/icons';
import { Line, Button, FormInput } from '../components/common';
import { PATH, localStorageKey, loginSchema } from '../constants';
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
  const [isCheck, setCheck] = useState(getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) !== '');
  const { register, formState, handleSubmit, getFieldState } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const handleLoginSubmit = data => {
    isCheck
      ? setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, data.email)
      : setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, '');

    navigate(PATH.MY_LOCATION);
  };

  return (
    <SLayout>
      <STitle>로그인</STitle>
      <SForm noValidate onSubmit={handleSubmit(handleLoginSubmit)}>
        <FormInput
          type="text"
          name="email"
          placeholder="이메일"
          defaultValue={getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) ?? ''}
          register={register}
          formState={formState}
          getFieldState={getFieldState}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="비밀번호"
          register={register}
          formState={formState}
          getFieldState={getFieldState}
        />
        <SLabel>
          <input type="checkbox" checked={isCheck} onChange={e => setCheck(e.target.checked)} />
          <CheckBoxSquareIcon size="2.3rem" color={isCheck ? '#228be6' : '#e9ecef'} />
          <span>이메일 기억하기</span>
        </SLabel>
        <Button type="submit" color="blue">
          로그인
        </Button>
        <Line />
        <Button isBorder handleClick={() => navigate(PATH.JOIN)}>
          회원가입
        </Button>
      </SForm>
    </SLayout>
  );
};

export default Login;
