import React from 'react';
import { styled } from 'linaria/react';

const families = {
  serif: 'serif'
};

const sizes = {
  medium: '18'
};

const Title = styled.h1`
  font-family: ${families.serif};
`;

const Container = styled.div`
  font-size: ${() => sizes.medium}px;
  color: ${props => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
    border-color: ${props => props.color};
  }
`;

export default function Component() {
  return (
    <Container color="#333">
      <Title>Hello world</Title>
    </Container>
  );
}
