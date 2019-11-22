import Container from "../../utils/Container";
import SiteInfo from "./siteInfo";
import Navigation from "./navigation";

const style = {
  position: "relative",
  border: "1px solid transparent",
  borderBottom: "1px solid #ddd",
  height: 160
};

export default () => {
  return (
    <Container comp={"header"} style={style}>
      <SiteInfo />
      <Navigation />
    </Container>
  );
};
