const style = {
  width: "100%",
  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto"
};

export default ({ children, comp: Comp = "div" }) => {
  return <Comp style={style}>{children}</Comp>;
};
