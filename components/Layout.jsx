import Header from "./header";
import Footer from "./footer";
import PageLeft from "./pageLeft";
import PageRight from "./pageRight";
import Container from "../utils/Container";

export default ({ children = "" }) => {
  return (
    <>
      <Header />
      <Container style={{ overflow: "hidden" }}>
        <PageLeft children={children} />
        <PageRight />
      </Container>
      <Footer />
    </>
  );
};
