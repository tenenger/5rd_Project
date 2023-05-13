import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Line, Button, FormInput } from '../components/common';
import { PATH, joinSchema } from '../constants';

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

const Join = () => {
  const { register, formState, handleSubmit, getFieldState } = useForm({
    resolver: zodResolver(joinSchema),
  });
  const navigate = useNavigate();

  const handleJoinSubmit = data => {
    // 회원가입 data api 요청 기능 추가 예정: POST;

    navigate(PATH.LOGIN);
  };

  return (
    <SLayout>
      <STitle>회원가입</STitle>
      <SForm noValidate onSubmit={handleSubmit(handleJoinSubmit)}>
        <FormInput
          type="text"
          name="email"
          placeholder="아이디(이메일)"
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
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          register={register}
          formState={formState}
          getFieldState={getFieldState}
        />
        <FormInput
          type="text"
          name="nickname"
          placeholder="별명"
          register={register}
          formState={formState}
          getFieldState={getFieldState}
        />
        <Button type="submit" isBorder handleClick={() => navigate(PATH.JOIN)}>
          회원가입
        </Button>
        <Line />
        <Button color="blue">로그인</Button>
      </SForm>
    </SLayout>
  );
};

export default Join;
