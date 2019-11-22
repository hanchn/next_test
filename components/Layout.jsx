import Header from "./header";
import Footer from "./footer";
import Container from "./Container";

export default ({ children = "" }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
