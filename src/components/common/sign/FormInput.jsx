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
  color: #adb5bd;
  transition: 0.3s ease;
  cursor: pointer;
  background-color: #fff;
`;

const SInput = styled.input`
  font-size: 1.8rem;
  padding: 16px 20px;
  border: 1px solid #ced4da;

  ${props =>
    props.isError &&
    `
    border-bottom: 2.5px solid #f03e3e;
  `}

  :focus {
    ${props =>
      props.isValid &&
      props.isTouched &&
      `
    border-bottom: 2.5px solid #228be6;
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
  color: #f03e3e;
`;

const FormInput = ({ type, name, placeholder, defaultValue = '', register, formState: { errors }, getFieldState }) => {
  const { invalid, isTouched, error } = getFieldState(name);

  return (
    <SLayout>
      <SInput
        id={name}
        type={type}
        name={name}
        required
        defaultValue={defaultValue}
        isError={errors[name]}
        isValid={!invalid}
        isTouched={isTouched}
        {...register(name)}
      />
      <SErrorMessage>{errors[name] && errors[name].message}</SErrorMessage>
      <SLabel htmlFor={name}>{placeholder}</SLabel>
    </SLayout>
  );
};

export default FormInput;
