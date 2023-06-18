import styled from '@emotion/styled';

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  font-size: 20px;
  height: 25px;
  border-radius: 5px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;

const ItemText = styled.p`
  margin: 0;
  margin-right: 30px;
`;

const Button = styled.button`
  font-size: 18px;

  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  padding: 10px 10px;
`;

export { Title, Input, List, Item, ItemText, Button };
