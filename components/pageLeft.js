import Container from "../utils/Container";

const style = {
  width: 720,
  minHeight: 500,
  height: "auto",
  borderRight: "1px solid #ddd",
  marginRight: 40,
  marginTop: 40,
  marginBottom: 40,
  float: "left"
};

export default ({ children = "", render = "" }) => (
  <Container render={render} style={style}>
    {children}
  </Container>
);
