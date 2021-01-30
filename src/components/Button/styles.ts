import styled from 'styled-components';

export const StyledButton = styled.button`
  min-height: 32px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.common.black};
`;
