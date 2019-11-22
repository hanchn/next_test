import Container from "../utils/Container";

export default ({ children = "", render = "" }) => (
  <Container render> {children} </Container>
);
