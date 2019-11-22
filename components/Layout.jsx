import Header from "./header";
import Footer from "./footer";
import Container from "../utils/Container";

export default ({ children = "" }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
