import styled from 'styled-components';

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

const SLabel = styled.label`
  margin: 16px 20px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  color: ${props => props.theme.colors.gray[5]};
  transition: 0.3s ease;
  cursor: pointer;
  background-color: ${props => props.theme.colors.white[0]};
`;

const SInput = styled.input`
  font-size: 1.8rem;
  padding: 16px 20px;
  border: 1px solid ${props => props.theme.colors.gray[4]};

  ${props =>
    props.isError &&
    `
    border-bottom: 2.5px solid ${props.theme.colors.red[7]};
  `}

  :focus {
    ${props =>
      props.isValid &&
      props.isTouched &&
      `
    border-bottom: 2.5px solid ${props.theme.colors.blue[6]};
  `}
  }

  :valid ~ label,
  :focus ~ label {
    top: -25px;
    left: -10px;
  }

  /* border: 1px solid ${props =>
    props.isValid && props.isDirty ? '#228be6' : props.isError ? '#f03e3e' : '#ced4da'}; */
  outline: none;
`;

const SErrorMessage = styled.span`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.red[7]};
`;

const FormInput = ({
  type,
  name,
  placeholder,
  defaultValue = '',
  register,
  formState: { errors },
  getFieldState,
  trigger,
}) => {
  const { invalid, isTouched } = getFieldState(name);

  const handleChange = () => {
    if (!trigger) return;

    if (name === 'password') trigger('confirmPassword');
  };

  return (
    <SLayout>
      <SInput
        defaultValue={defaultValue}
        id={name}
        isError={errors[name]}
        isTouched={isTouched}
        isValid={!invalid}
        name={name}
        type={type}
        required
        {...register(name, {
          onChange: handleChange,
        })}
      />
      <SErrorMessage>{errors[name] && errors[name].message}</SErrorMessage>
      <SLabel htmlFor={name}>{placeholder}</SLabel>
    </SLayout>
  );
};

export default FormInput;
