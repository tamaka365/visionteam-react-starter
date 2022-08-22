import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import { useTheme } from "src/theme";

export default function Linaria({ red = "red" }) {
  const { primary, primaryLight } = useTheme();

  return (
    <div>
      <Container fs="pink" cl="blue" css={`padding: '12px`}>
        <div>hello world</div>

        <Title cl="orange">hello world 3</Title>
      </Container>
    </div>
  );
}

// Write your styles in `styled` tag
const Title = styled.h1`
  font-size: 46px;
  color: ${({ cl }) => cl};
`;

const Container = styled.div`
  color: ${({ cl }) => cl};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }
`;
