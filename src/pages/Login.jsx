import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled, { useTheme } from 'styled-components';

import { Line, Button, FormInput } from 'components/common';
import { CheckBoxSquareIcon } from 'components/common/icons';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';
import { PATH, localStorageKey } from 'constants';

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

const loginSchema = z.object({
  email: z.string().email('이메일 형식을 입력해주세요'),
  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,12}$/, '영문, 숫자 조합 6~12자 입력해주세요.'),
});

const Login = () => {
  const theme = useTheme();
  const [isCheck, setCheck] = useState(getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) !== '');
  const { register, formState, handleSubmit, getFieldState } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const handleLoginSubmit = data => {
    if (isCheck) setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, data.email);
    else setLocalStorage(localStorageKey.SAVED_EMAIL_KEY, '');

    navigate(PATH.MY_LOCATION);
  };

  return (
    <SLayout>
      <STitle>로그인</STitle>
      <SForm noValidate onSubmit={handleSubmit(handleLoginSubmit)}>
        <FormInput
          defaultValue={getLocalStorage(localStorageKey.SAVED_EMAIL_KEY) ?? ''}
          formState={formState}
          getFieldState={getFieldState}
          name="email"
          placeholder="이메일"
          register={register}
          type="text"
        />
        <FormInput
          formState={formState}
          getFieldState={getFieldState}
          name="password"
          placeholder="비밀번호"
          register={register}
          type="password"
        />
        <SLabel>
          <input checked={isCheck} type="checkbox" onChange={e => setCheck(e.target.checked)} />
          <CheckBoxSquareIcon color={isCheck ? theme.colors.blue[6] : theme.colors.gray[2]} size="2.3rem" />
          <span>이메일 기억하기</span>
        </SLabel>
        <Button bgColor="blue.6" color="white" type="submit">
          로그인
        </Button>
        <Line />
        <Button handleClick={() => navigate(PATH.JOIN)} isBorder>
          회원가입
        </Button>
      </SForm>
    </SLayout>
  );
};

export default Login;
