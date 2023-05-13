import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('이메일 형식을 입력해주세요'),
  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,12}$/, '영문, 숫자 조합 6~12자 입력해주세요.'),
});

export const joinSchema = z
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
