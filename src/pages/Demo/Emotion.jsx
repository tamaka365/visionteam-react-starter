import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Box from "src/components/basic/Box/index";

export default function Emotion() {
  return (
    <div>
      <Box
        css={css`
          font-size: 48px;
        `}
        component="h1"
      >
        emotion
      </Box>
      <Button>hello world</Button>
    </div>
  );
}

const Button = styled.button`
  font-size: 32px;
`;
