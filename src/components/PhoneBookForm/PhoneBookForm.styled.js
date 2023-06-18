import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  font-size: 20px;
  height: 25px;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  font-size: 18px;

  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  padding: 10px 20px;
`;

export { Form, Label, Input, ButtonBox, Button };
