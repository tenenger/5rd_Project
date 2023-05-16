import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';

import { Line, Button, FormInput } from 'components/common';
import { PATH } from 'constants';

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
  const [stage, setStage] = useState(1);

  const { register, formState, trigger, handleSubmit, getFieldState } = useForm({
    resolver: zodResolver(
      z
        .object({
          email: z.string().email('이메일 형식을 입력해주세요'),
          password:
            stage > 1
              ? z.string().regex(/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,12}$/, '영문, 숫자 조합 6~12자 입력해주세요')
              : z.string().optional(),
          confirmPassword:
            stage > 1
              ? z.string().min(1, '비밀번호 확인을 위해 새 비밀번호를 다시 입력해주세요')
              : z.string().optional(),
          nickname:
            stage > 2
              ? z.string().regex(/^(?=.*[ㄱ-힣A-Za-z])[ㄱ-힣A-Za-z]{2,10}$/, '한글 또는 영문으로 2~10자 입력해주세요')
              : z.string().optional(),
        })
        .refine(({ password, confirmPassword }) => password === confirmPassword, {
          message: '비밀번호가 일치하지 않습니다',
          path: ['confirmPassword'],
        })
    ),
  });
  const navigate = useNavigate();

  const handleJoinSubmit = data => {
    // 회원가입 data api 요청 기능 추가 예정: POST;
    console.log(data);

    if (stage !== 3) {
      setStage(stage + 1);
      return;
    }

    navigate(PATH.JOIN_COMPLETE);
  };

  return (
    <SLayout>
      <STitle>회원가입</STitle>
      <SForm noValidate onSubmit={handleSubmit(handleJoinSubmit)}>
        <FormInput
          formState={formState}
          getFieldState={getFieldState}
          name="email"
          placeholder="아이디(이메일)"
          register={register}
          type="text"
        />
        {stage >= 2 && (
          <>
            <FormInput
              formState={formState}
              getFieldState={getFieldState}
              name="password"
              placeholder="비밀번호"
              register={register}
              trigger={trigger}
              type="password"
            />
            <FormInput
              formState={formState}
              getFieldState={getFieldState}
              name="confirmPassword"
              placeholder="비밀번호 확인"
              register={register}
              trigger={trigger}
              type="password"
            />
          </>
        )}
        {stage >= 3 && (
          <FormInput
            formState={formState}
            getFieldState={getFieldState}
            name="nickname"
            placeholder="별명"
            register={register}
            type="text"
          />
        )}
        <Button type="submit" isBorder>
          {stage === 3 ? '회원가입' : '다음 단계'}
        </Button>
        <Line />
        <Button bgColor="blue.6" color="white" handleClick={() => navigate(PATH.LOGIN)}>
          로그인 하러가기
        </Button>
      </SForm>
    </SLayout>
  );
};

export default Join;
