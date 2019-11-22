import Container from "../Container";
import SiteInfo from "./siteInfo";
import Navigation from "./navigation";

const style = {
  position: "relative",
  borderBottom: "1px solid #ddd",
  height: 160,
  overflow: "hidden"
};

export default () => {
  return (
    <Container comp={"header"} style={style}>
      <SiteInfo />
      <Navigation />
    </Container>
  );
};
