import styled from "styled-components";

const Button = styled.button`
  color: hotpink;
`;

export default function Styled({ color = "red" }) {
  return (
    <div>
      <div>This has a hotpink background.</div>
      <Button>hello emotion</Button>
    </div>
  );
}
