import styled from 'styled-components';
import { Line, Button } from '../components/common';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/common/sign/FormInput';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants/path';

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

const joinSchema = z
  .object({
    email: z.string().email('이메일 형식을 입력해주세요'),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,12}$/, '영문, 숫자 조합 6~12자 입력해주세요'),
    confirmPassword: z.string().min(1, '비밀번호 확인을 위해 새 비밀번호를 다시 입력해주세요'),
    nickname: z.string().regex(/^(?=.*[ㄱ-힣A-Za-z])[ㄱ-힣A-Za-z]{2,10}$/, '한글 또는 영문으로 2~10자 입력해주세요'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

const Join = () => {
  const { register, formState, handleSubmit, getFieldState } = useForm({
    resolver: zodResolver(joinSchema),
  });
  const navigate = useNavigate();

  const handleJoinSubmit = data => {
    // 회원가입 data api 요청 : POST;

    navigate(PATH.LOGIN);
  };

  console.log(formState.errors);

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
