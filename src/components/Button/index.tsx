import React from 'react';

import { StyledButton } from './styles';

const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
